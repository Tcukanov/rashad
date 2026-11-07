import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Страница не найдена" };

export default function NotFound() {
  return (
    <section className="wrap phero" style={{ paddingBottom: "clamp(80px, 10vw, 140px)" }}>
      <span className="eyebrow">Ошибка 404</span>
      <h1 className="h-display">Такой страницы <em>нет</em></h1>
      <p className="phero__lead">Возможно, адрес набран с ошибкой или страница переехала. Начните с главной или посмотрите наши проекты.</p>
      <div className="hero__actions" style={{ marginTop: 32 }}>
        <Link href="/" className="btn btn--solid">На главную <span className="arr">→</span></Link>
        <Link href="/projects" className="btn">Проекты</Link>
        <Link href="/contacts" className="btn">Контакты</Link>
      </div>
    </section>
  );
}
