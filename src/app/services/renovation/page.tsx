import type { Metadata } from "next";
import Link from "next/link";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import DzenGrid from "@/components/sections/DzenGrid";
import PageHead from "@/components/sections/PageHead";
import Process from "@/components/sections/Process";
import { designPricePerM2 } from "@/lib/content";
import { projects } from "@/lib/projects";
import { serviceSchema } from "@/lib/schema";

const designPrice = designPricePerM2.toLocaleString("ru-RU");

export const metadata: Metadata = {
  title: "Ремонт квартир под ключ в Москве с дизайн-проектом",
  description: "Ремонт квартир под ключ в Москве: от демонтажа до клининга по дизайн-проекту студии. Смета и график в договоре, оплата по этапам, еженедельные фотоотчёты.",
};

const included = [
  "Демонтаж, черновые и чистовые работы",
  "Инженерные системы",
  "Комплектация: отделка, мебель, свет, сантехника",
  "Авторский надзор дизайнера на объекте",
  "Еженедельные фотоотчёты",
  "Клининг перед сдачей",
];

export default function RenovationPage() {
  return (
    <>
      <PageHead
        eyebrow="Ремонт под ключ"
        h1="Ремонт квартир под ключ в Москве"
        title={<>От демонтажа <em>до клининга</em></>}
        lead="Делаем ремонт по собственному дизайн-проекту, поэтому квартира выглядит так же, как на визуализации. Проект и ремонт ведёт одна команда: никто не перекладывает ошибки друг на друга."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Ремонт квартир под ключ", "Ремонт квартир")) }} />

      <section className="section section--umber">
        <div className="wrap price-split">
          <Reveal>
            <span className="eyebrow">Что входит</span>
            <h2 className="h-section">Ремонт <em>под ключ</em></h2>
            <ul className="price-list">{included.map((l) => <li key={l}>{l}</li>)}</ul>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Стоимость</span>
            <h2 className="h-section">Сколько <em>стоит</em></h2>
            <div className="about__body">
              <p>
                Стоимость ремонта считаем после замера: она зависит от площади, состава работ и материалов.
                Смета и график фиксируются в договоре до начала работ, оплата — отдельно за каждый этап.
              </p>
              <p>
                Дизайн-проект — от {designPrice} ₽ за м². <Link href="/services/design" className="link">Что в него входит →</Link>
              </p>
            </div>
            <div className="more"><Link href="/contacts" className="btn btn--solid">Рассчитать ремонт <span className="arr">→</span></Link></div>
          </Reveal>
        </div>
      </section>

      <Process />

      <DzenGrid
        ids={["65cc989cfda6df2ef7fe1f76", "660167794518f16949429001", "67051a9337bc38198a920366", "65e9a65ef0624d1b18fc55a1"]}
        title={<>Ремонт <em>на видео</em></>}
        text="Обзоры готовых ремонтов и приёмы, которые мы используем на объектах."
      />

      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Портфолио</span>
              <h2 className="h-section">Наши <em>проекты</em></h2>
            </div>
            <p>Квартиры в жилых комплексах Москвы.</p>
          </Reveal>
          <ProjectIndex projects={projects.slice(0, 5)} />
          <div className="more"><Link href="/projects" className="btn">Все проекты <span className="arr">→</span></Link></div>
        </div>
      </section>

      <CtaBand title="Рассчитаем ремонт" text="Пришлите площадь и пару слов о квартире: назовём ориентир по бюджету и срокам." />
    </>
  );
}
