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
  title: "Дизайн и ремонт квартиры в новостройке в Москве",
  description: `Дизайн и ремонт квартиры в новостройке в Москве: от бетона до готового интерьера. Дизайн-проект от ${designPrice} ₽ за м², ремонт под ключ по договору.`,
};

const path = [
  { t: "Квартира в бетоне", p: "Обмеры, планировка под вашу семью и образ жизни." },
  { t: "Дизайн-проект", p: `3D-визуализация каждой комнаты и рабочие чертежи. От ${designPrice} ₽ за м².` },
  { t: "Ремонт под ключ", p: "Черновые и чистовые работы, инженерные системы. Смета и график в договоре." },
  { t: "Комплектация и надзор", p: "Отделка, мебель, свет. Дизайнер следит, чтобы всё совпало с проектом." },
];

export default function NovostroykaPage() {
  return (
    <>
      <PageHead
        eyebrow="Новостройки"
        h1="Дизайн и ремонт квартиры в новостройке в Москве"
        title={<>От бетона <em>до ключей</em></>}
        lead="Наше портфолио — квартиры в новых жилых комплексах Москвы. Берём квартиру без отделки и доводим её до готового интерьера: проект, ремонт, комплектация и надзор ведёт одна команда."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Дизайн и ремонт квартиры в новостройке", "Ремонт квартир")) }} />

      <section className="section section--umber">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Путь квартиры</span>
              <h2 className="h-section">Из бетона <em>в дом</em></h2>
            </div>
            <p>Можно заказать всё сразу или начать только с дизайн-проекта.</p>
          </Reveal>
          <div className="services">
            {path.map((s, i) => (
              <Reveal key={s.t} className="service" delay={i * 90}>
                <span className="service__n">0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </div>
          <div className="more">
            <Link href="/services/design" className="btn">Дизайн-проект <span className="arr">→</span></Link>{" "}
            <Link href="/services/renovation" className="btn">Ремонт под ключ <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Портфолио</span>
              <h2 className="h-section">Квартиры <em>в новых ЖК</em></h2>
            </div>
            <p>Проекты квартир в жилых комплексах Москвы.</p>
          </Reveal>
          <ProjectIndex projects={projects} />
        </div>
      </section>

      <DzenGrid
        ids={["660167794518f16949429001", "65cc989cfda6df2ef7fe1f76", "65e82d1a18fc0a21b241401d", "6613cbd1ffcf6052506d9b0a"]}
        title={<>Новостройки <em>на видео</em></>}
        text="Обзоры готовых квартир и того, как мы работаем над проектом."
      />

      <Process />

      <CtaBand title="Обсудим вашу квартиру" text="Расскажите, в каком ЖК квартира и какой площади: назовём сроки и ориентир по бюджету." />
    </>
  );
}
