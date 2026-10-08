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
              Можно заказать только дизайн-проект или доверить нам весь путь. Стоимость рассчитываем
              индивидуально после замера: зависит от площади, состава работ и материалов.
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
            </Reveal>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
