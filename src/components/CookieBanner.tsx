"use client";

import Link from "next/link";
import Script from "next/script";
import { useState, useSyncExternalStore } from "react";

const KEY = "elmio-cookie-consent"; // "all" | "necessary"

type Choice = "all" | "necessary" | null;
const EVT = "elmio:cookie-change";

function read(): Choice {
  try {
    if (sessionStorage.getItem(KEY + ":reopen")) return null;
    const v = localStorage.getItem(KEY);
    return v === "all" || v === "necessary" ? v : null;
  } catch {
    return null;
  }
}

function subscribe(cb: () => void) {
  const reopen = () => {
    try { sessionStorage.setItem(KEY + ":reopen", "1"); } catch {}
    cb();
  };
  window.addEventListener(EVT, cb);
  window.addEventListener("storage", cb);
  window.addEventListener("elmio:cookie-settings", reopen);
  return () => {
    window.removeEventListener(EVT, cb);
    window.removeEventListener("storage", cb);
    window.removeEventListener("elmio:cookie-settings", reopen);
  };
}

// Яндекс Метрика подключается ТОЛЬКО после согласия на аналитические cookie.
export default function CookieBanner({ metrikaId }: { metrikaId: string }) {
  // "pending" на сервере: баннер не рендерится до гидрации
  const choice = useSyncExternalStore<Choice | "pending">(subscribe, read, () => "pending");
  const [accepted, setAccepted] = useState<Choice>(null);

  const save = (c: Exclude<Choice, null>) => {
    try {
      localStorage.setItem(KEY, c);
      sessionStorage.removeItem(KEY + ":reopen");
    } catch {}
    setAccepted(c);
    window.dispatchEvent(new Event(EVT));
  };

  const effective = choice === "pending" ? null : choice ?? accepted;
  const metrika =
    (effective === "all" || choice === "all") && metrikaId ? (
      <Script id="ym" strategy="afterInteractive">{`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${Number(metrikaId)}, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: false });
      `}</Script>
    ) : null;

  if (choice !== null) return metrika;

  return (
    <div className="cookie" role="dialog" aria-live="polite" aria-label="Использование cookie">
      <p>
        Мы используем обязательные cookie для работы сайта. С вашего согласия также подключим
        Яндекс&nbsp;Метрику, чтобы понимать, какие разделы полезны. Подробнее в{" "}
        <Link href="/cookies">политике cookie</Link>.
      </p>
      <div className="cookie__btns">
        <button className="btn" onClick={() => save("necessary")}>Только нужные</button>
        <button className="btn btn--solid" onClick={() => save("all")}>Принять все</button>
      </div>
    </div>
  );
}
