import Link from "next/link";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import DzenGrid from "@/components/sections/DzenGrid";
import PageHead from "@/components/sections/PageHead";
import { projects } from "@/lib/projects";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

// Страница услуги с ценой «по договору»: надзор, комплектация.
export default function ServiceLanding({
  path, crumb, h1, title, lead, included, why, cost, videos, cta,
}: {
  path: string;
  crumb: string;
  h1: string;
  title: React.ReactNode;
  lead: string;
  included: string[];
  why: { t: string; p: string }[];
  cost: string;
  videos: string[];
  cta: string;
}) {
  const crumbs: [string, string][] = [["Главная", "/"], ["Услуги", "/services/"], [crumb, `${path}/`]];
  return (
    <>
      <PageHead eyebrow={crumb} h1={h1} title={title} lead={lead} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(crumb, crumb)) }} />

      <section className="section section--umber">
        <div className="wrap price-split">
          <Reveal>
            <span className="eyebrow">Что входит</span>
            <h2 className="h-section">{crumb}</h2>
            <ul className="price-list">{included.map((l) => <li key={l}>{l}</li>)}</ul>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Стоимость</span>
            <h2 className="h-section">Сколько <em>стоит</em></h2>
            <div className="about__body">
              <p>{cost}</p>
              <p>
                Ремонт под ключ уже включает комплектацию и авторский надзор.{" "}
                <Link href="/services/renovation" className="link">Подробнее о ремонте →</Link>
              </p>
            </div>
            <div className="more"><Link href="/contacts" className="btn btn--solid">Узнать стоимость <span className="arr">→</span></Link></div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Зачем</span>
              <h2 className="h-section">Что это <em>даёт</em></h2>
            </div>
          </Reveal>
          <div className="services">
            {why.map((w, i) => (
              <Reveal key={w.t} className="service" delay={i * 90}>
                <span className="service__n">0{i + 1}</span>
                <h3>{w.t}</h3>
                <p>{w.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DzenGrid ids={videos} title={<>Наши проекты <em>на видео</em></>} text="Обзоры готовых квартир и приёмы, которые мы используем на объектах." />

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

      <CtaBand title="Обсудим ваш проект?" text={cta} />
    </>
  );
}
