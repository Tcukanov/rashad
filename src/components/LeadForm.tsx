"use client";

import Link from "next/link";
import { useState } from "react";

const SERVICES = ["Дизайн-проект", "Ремонт под ключ", "Дизайн + ремонт", "Комплектация", "Авторский надзор"];

type Status = { kind: "idle" | "sending" | "ok" | "err"; text?: string };

export default function LeadForm() {
  const [service, setService] = useState<string>(SERVICES[2]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          area: fd.get("area"),
          message: fd.get("message"),
          company: fd.get("company"), // honeypot
          service,
          consent,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Не удалось отправить заявку");
      setStatus({ kind: "ok", text: "Спасибо! Руслан свяжется с вами в течение рабочего дня." });
      (e.target as HTMLFormElement).reset();
      setConsent(false);
    } catch (err) {
      setStatus({ kind: "err", text: err instanceof Error ? err.message : "Ошибка отправки" });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <span className="field__label" id="svc-label">Что вас интересует</span>
        <div className="chips" role="group" aria-labelledby="svc-label">
          {SERVICES.map((s) => (
            <button type="button" key={s} className="chip" aria-pressed={service === s} onClick={() => setService(s)}>
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-name">Имя</label>
        <input id="f-name" name="name" required minLength={2} maxLength={80} autoComplete="given-name" />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Телефон</label>
        <input id="f-phone" name="phone" type="tel" required pattern="[\d\s()+\-]{10,20}" placeholder="+7" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="f-area">Площадь объекта, м²</label>
        <input id="f-area" name="area" inputMode="numeric" maxLength={6} />
      </div>
      <div className="field">
        <label htmlFor="f-msg">Пара слов о задаче</label>
        <textarea id="f-msg" name="message" maxLength={1500} placeholder="ЖК, сроки, пожелания по стилю" />
      </div>
      <div className="hp" aria-hidden>
        <label htmlFor="f-company">Компания</label>
        <input id="f-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Отдельное согласие (ст. 9 152-ФЗ в ред. с 01.09.2025): галочка не проставлена заранее */}
      <label className="check">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
        <span>
          Я даю <Link href="/consent" target="_blank">согласие на обработку персональных данных</Link> на условиях,
          указанных в согласии, и ознакомлен(а) с{" "}
          <Link href="/privacy" target="_blank">политикой обработки персональных данных</Link>.
        </span>
      </label>

      <div>
        <button className="btn btn--solid" type="submit" disabled={!consent || status.kind === "sending"}>
          {status.kind === "sending" ? "Отправляем…" : "Отправить заявку"} <span className="arr">→</span>
        </button>
      </div>
      {status.kind === "ok" && <p className="form__status form__status--ok" role="status">{status.text}</p>}
      {status.kind === "err" && <p className="form__status form__status--err" role="alert">{status.text}</p>}
    </form>
  );
}
