import type { Metadata } from "next";
import Link from "next/link";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import DzenGrid from "@/components/sections/DzenGrid";
import PageHead from "@/components/sections/PageHead";
import Process from "@/components/sections/Process";
import { designPricePerM2, services } from "@/lib/content";
import { projects } from "@/lib/projects";
import { designServiceSchema } from "@/lib/schema";

const price = designPricePerM2.toLocaleString("ru-RU");
const design = services[0];

export const metadata: Metadata = {
  title: `Дизайн-проект квартиры в Москве — от ${price} ₽ за м²`,
  description: `Дизайн-проект квартиры в Москве от ${price} ₽ за м²: планировка, 3D-визуализация каждой комнаты и рабочие чертежи для строителей. Студия на Огородном проезде.`,
};

// Примеры: цена за м² умноженная на типичную площадь квартиры, без допущений.
const examples = (
  [
    ["Однокомнатная", 40],
    ["Двухкомнатная", 60],
    ["Трёхкомнатная", 80],
    ["Четырёхкомнатная", 120],
  ] as const
).map(([kind, m2]) => ({ kind, m2, total: (m2 * designPricePerM2).toLocaleString("ru-RU") }));

export default function DesignPage() {
  return (
    <>
      <PageHead
        eyebrow="Дизайн-проект"
        h1="Дизайн-проект квартиры в Москве"
        title={<>От {price} ₽ <em>за м²</em></>}
        lead={`${design.p} Цена фиксируется в договоре до начала работы.`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(designServiceSchema()) }} />

      <section className="section section--umber">
        <div className="wrap price-split">
          <Reveal>
            <span className="eyebrow">Что входит</span>
            <h2 className="h-section">Состав <em>проекта</em></h2>
            <ul className="price-list">
              {design.li.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Стоимость</span>
            <h2 className="h-section">Сколько <em>стоит</em></h2>
            <table className="price-table">
              <tbody>
                {examples.map((e) => (
                  <tr key={e.m2}><td>{e.kind} квартира, {e.m2} м²</td><td>от {e.total} ₽</td></tr>
                ))}
              </tbody>
            </table>
            <p className="muted">Дизайн-проект однокомнатной, двухкомнатной или трёхкомнатной квартиры считаем одинаково: площадь × {price} ₽. Точную сумму назовём после замера.</p>
          </Reveal>
        </div>
      </section>

      <Process />

      <DzenGrid
        ids={["65e82d1a18fc0a21b241401d", "65df43fb78cfba76e1e41bfe", "65cdf83eb88df568a17e067c", "65e9a65ef0624d1b18fc55a1"]}
        title={<>Дизайн <em>на видео</em></>}
        text="Как мы делаем визуализации, за что платят дизайнеру и какие приёмы работают в квартире."
      />

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

      <CtaBand title="Рассчитаем ваш проект" text={`Пришлите площадь квартиры: назовём стоимость дизайн-проекта от ${price} ₽ за м² и сроки.`} />
    </>
  );
}
