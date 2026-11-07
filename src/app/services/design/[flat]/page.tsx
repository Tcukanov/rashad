import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import DzenGrid from "@/components/sections/DzenGrid";
import Process from "@/components/sections/Process";
import { designPricePerM2, services } from "@/lib/content";
import { flats, getFlat } from "@/lib/flats";
import { projects } from "@/lib/projects";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const price = designPricePerM2.toLocaleString("ru-RU");
const rub = (n: number) => n.toLocaleString("ru-RU");

export const dynamicParams = false;

export function generateStaticParams() {
  return flats.map((f) => ({ flat: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ flat: string }> }): Promise<Metadata> {
  const f = getFlat((await params).flat);
  if (!f) return {};
  const from = rub(f.areas[0] * designPricePerM2);
  return {
    title: `Дизайн-проект ${f.name} квартиры в Москве — от ${price} ₽ за м²`,
    description: `Дизайн-проект ${f.name} квартиры в Москве: планировка, 3D-визуализация и рабочие чертежи. ${f.short} квартира ${f.areas[0]} м² — от ${from} ₽.`,
  };
}

export default async function FlatPage({ params }: { params: Promise<{ flat: string }> }) {
  const f = getFlat((await params).flat);
  if (!f) notFound();
  const others = flats.filter((o) => o.slug !== f.slug);
  const crumbs: [string, string][] = [
    ["Главная", "/"],
    ["Дизайн-проект", "/services/design/"],
    [`${f.short} квартира`, `/services/design/${f.slug}/`],
  ];

  return (
    <>
      <section className="phero wrap">
        <nav className="phero__back crumbs" aria-label="Навигационная цепочка">
          <Link href="/">Главная</Link> / <Link href="/services/design">Дизайн-проект</Link> / <span>{f.short} квартира</span>
        </nav>
        <h1 className="eyebrow">Дизайн-проект {f.name} квартиры в Москве</h1>
        <p className="h-display">От {price} ₽ <em>за м²</em></p>
        <p className="phero__lead">{f.lead}</p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(`Дизайн-проект ${f.name} квартиры`, "Дизайн интерьера", designPricePerM2)) }}
      />

      <section className="section section--umber">
        <div className="wrap price-split">
          <Reveal>
            <span className="eyebrow">Что решаем</span>
            <h2 className="h-section">{f.short} <em>квартира</em></h2>
            <ul className="price-list">{f.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Стоимость</span>
            <h2 className="h-section">Сколько <em>стоит</em></h2>
            <table className="price-table">
              <tbody>
                {f.areas.map((m2) => (
                  <tr key={m2}><td>{f.short} квартира, {m2} м²</td><td>от {rub(m2 * designPricePerM2)} ₽</td></tr>
                ))}
              </tbody>
            </table>
            <p className="muted">Стоимость = площадь × {price} ₽. Точную сумму назовём после замера и зафиксируем в договоре.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap price-split">
          <Reveal>
            <span className="eyebrow">Состав проекта</span>
            <h2 className="h-section">Что вы <em>получите</em></h2>
            <ul className="price-list">{services[0].li.map((l) => <li key={l}>{l}</li>)}</ul>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Другие квартиры</span>
            <h2 className="h-section">Дизайн-проект <em>квартиры</em></h2>
            <ul className="price-list">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/services/design/${o.slug}`} className="link">Дизайн-проект {o.name} квартиры →</Link></li>
              ))}
              <li><Link href="/services/novostroyka" className="link">Квартира в новостройке →</Link></li>
            </ul>
          </Reveal>
        </div>
      </section>

      <Process />

      <DzenGrid ids={f.videos} title={<>Наши проекты <em>на видео</em></>} text="Обзоры готовых квартир и приёмы, которые мы используем в проектах." />

      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Портфолио</span>
              <h2 className="h-section">Наши <em>проекты</em></h2>
            </div>
            <p>Дизайн-проекты квартир в жилых комплексах Москвы.</p>
          </Reveal>
          <ProjectIndex projects={projects.slice(0, 5)} />
          <div className="more"><Link href="/projects" className="btn">Все проекты <span className="arr">→</span></Link></div>
        </div>
      </section>

      <CtaBand title="Рассчитаем ваш проект" text={`Пришлите площадь квартиры: назовём стоимость дизайн-проекта и сроки.`} />
    </>
  );
}
