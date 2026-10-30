"use client";

import { useState } from "react";
import { useConsentAll } from "./CookieBanner";

// Виджеты Яндекса ставят свои cookie, поэтому без согласия на все cookie грузятся только по клику.
export default function YandexEmbed({ src, title, label, className = "" }: { src: string; title: string; label: string; className?: string }) {
  const consent = useConsentAll();
  const [shown, setShown] = useState(false);

  return (
    <div className={`yembed ${className}`}>
      {consent || shown ? (
        <iframe src={src} title={title} loading="lazy" allowFullScreen />
      ) : (
        <div className="yembed__ph">
          <p>{label} загружается с серверов Яндекса, который может установить свои cookie.</p>
          <button className="btn" onClick={() => setShown(true)}>Показать</button>
        </div>
      )}
    </div>
  );
}
