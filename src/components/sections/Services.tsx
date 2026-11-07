import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services({ head = true, children }: { head?: boolean; children?: React.ReactNode }) {
  return (
    <section className="section section--umber">
      <div className="wrap">
        {head && (
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Услуги</span>
              <h2 className="h-section">От идеи до <em>ключей</em></h2>
            </div>
            <p>
              Можно заказать только дизайн-проект или доверить нам весь путь. Дизайн-проект — от 3 000 ₽
              за м², ремонт, комплектация и надзор — по договору после замера.
            </p>
          </Reveal>
        )}
        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.t} className="service" delay={i * 90}>
              <span className="service__n">0{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
              <ul>{s.li.map((l) => <li key={l}>{l}</li>)}</ul>
              <p className="service__price">{s.price}</p>
              {s.href && <Link href={s.href} className="service__more">Подробнее <span className="arr">→</span></Link>}
            </Reveal>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
