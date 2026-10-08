"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#about", label: "Студия" },
  { href: "/#services", label: "Услуги" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#process", label: "Этапы" },
  { href: "/#contact", label: "Контакты" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`header ${solid || open ? "is-solid" : ""}`}>
        <div className="wrap header__in">
          <Link href="/" className="logo" aria-label="Элмио Дизайн, на главную" onClick={() => setOpen(false)}>
            <b>ЭЛМИО</b>
            <small>ELMIO DESIGN · дизайн и ремонт</small>
          </Link>
          <nav className="nav" aria-label="Основное меню">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
          <div className="header__cta">
            <a className="header__phone" href={site.phoneHref}>{site.phone}</a>
            <Link className="btn" href="/#contact">Обсудить проект</Link>
            <button
              className={`burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{l.label}</Link>
        ))}
        <a href={site.phoneHref} className="muted" style={{ fontSize: 20 }} tabIndex={open ? 0 : -1}>{site.phone}</a>
        <Link className="btn btn--solid" href="/#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Обсудить проект</Link>
      </div>
    </>
  );
}
