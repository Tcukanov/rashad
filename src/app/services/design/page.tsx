import type { Metadata } from "next";
import Link from "next/link";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import Process from "@/components/sections/Process";
import { designPricePerM2, services } from "@/lib/content";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const price = designPricePerM2.toLocaleString("ru-RU");
const design = services[0];

export const metadata: Metadata = {
  title: `Дизайн-проект квартиры в Москве — от ${price} ₽ за м²`,
  description: `Дизайн-проект квартиры в Москве от ${price} ₽ за м²: планировка, 3D-визуализация каждой комнаты и рабочие чертежи для строителей. Студия на Огородном проезде.`,
};

// Примеры: цена за м² умножена на площадь, без допущений.
const examples = [40, 60, 80, 120].map((m2) => ({ m2, total: (m2 * designPricePerM2).toLocaleString("ru-RU") }));

// Разметка услуги с ценой для поисковиков.
const offer = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Дизайн-проект квартиры",
  serviceType: "Дизайн интерьера",
  areaServed: { "@type": "City", name: "Москва" },
  provider: { "@type": "HomeAndConstructionBusiness", name: site.nameRu, url: new URL("/", site.url).href },
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    priceSpecification: { "@type": "UnitPriceSpecification", price: designPricePerM2, priceCurrency: "RUB", unitText: "м²" },
  },
};

export default function DesignPage() {
  return (
    <>
      <PageHead
        eyebrow="Дизайн-проект"
        h1="Дизайн-проект квартиры в Москве"
        title={<>От {price} ₽ <em>за м²</em></>}
        lead={`${design.p} Цена фиксируется в договоре до начала работы.`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offer) }} />

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
                  <tr key={e.m2}><td>{e.m2} м²</td><td>от {e.total} ₽</td></tr>
                ))}
              </tbody>
            </table>
            <p className="muted">Расчёт: площадь × {price} ₽. Точную сумму назовём после замера.</p>
          </Reveal>
        </div>
      </section>

      <Process />

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
