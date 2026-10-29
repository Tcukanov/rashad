"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav as links } from "@/lib/content";
import { site } from "@/lib/site";
import SocialIcons from "./SocialIcons";



export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

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
          <Link href="/" className="logo" aria-label="Дизайн и ремонт МСК, на главную" onClick={() => setOpen(false)}>
            <Image className="logo__mark" src="/logo-mark.webp" alt="" width={240} height={231} priority />
            <span className="logo__text">
              <b>Дизайн и ремонт МСК</b>
              <small>Студия интерьера и ремонта</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Основное меню">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""} aria-current={isActive(l.href) ? "page" : undefined}>{l.label}</Link>
            ))}
          </nav>
          <div className="header__cta">
            <SocialIcons className="header__socials" />
            <a className="header__phone" href={site.phoneHref}>{site.phone}</a>
            <Link className="btn" href="/contacts">Обсудить проект</Link>
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
        <a href={site.phone2Href} className="muted as-is" style={{ fontSize: 20 }} tabIndex={open ? 0 : -1}>{site.phone2Name} · {site.phone2}</a>
        <SocialIcons className="socials--lg" tabIndex={open ? 0 : -1} />
        <Link className="btn btn--solid" href="/contacts" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Обсудить проект</Link>
      </div>
    </>
  );
}
