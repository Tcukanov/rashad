import Image from "next/image";
import Link from "next/link";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import About from "@/components/sections/About";
import CtaBand from "@/components/sections/CtaBand";
import Services from "@/components/sections/Services";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  const hero = projects[0];

  return (
    <>
      <section className="hero">
        <span className="hero__mark" aria-hidden>элмио.</span>
        <div className="wrap hero__grid">
          <div className="hero__text">
            <span className="eyebrow">Студия дизайна и ремонта · {site.city}</span>
            <h1 className="h-display hero__title">
              <span><i>Интерьеры,</i></span>
              <span><i>в которых</i></span>
              <span><i><em>тихо и тепло</em></i></span>
            </h1>
            <p className="hero__lead">
              Проектируем и ремонтируем квартиры под ключ. Дерево, камень, свет и ничего лишнего:
              дом, в который хочется возвращаться.
            </p>
            <div className="hero__actions">
              <Link href="/contacts" className="btn btn--solid">Рассчитать проект <span className="arr">→</span></Link>
              <Link href="/projects" className="btn">Смотреть работы</Link>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__frame" aria-hidden />
            <div className="hero__img">
              <Image src={hero.cover.src} alt={`Гостиная, ${hero.title}`} width={hero.cover.w} height={hero.cover.h} priority sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
            <span className="hero__caption">{hero.title}</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {[...Array(2)].flatMap((_, k) =>
            ["Дизайн-проект", "Ремонт под ключ", "Комплектация", "Авторский надзор", "Визуализация", "Рабочие чертежи"].map((w) => (
              <span key={w + k}>{w}</span>
            )),
          )}
        </div>
      </div>

      <About>
        <div className="more"><Link href="/studio" className="btn">О студии <span className="arr">→</span></Link></div>
      </About>

      <Services>
        <div className="more"><Link href="/services" className="btn">Услуги и этапы работы <span className="arr">→</span></Link></div>
      </Services>

      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Портфолио</span>
              <h2 className="h-section">Избранные <em>проекты</em></h2>
            </div>
            <p>Квартиры в московских жилых комплексах. Откройте проект, чтобы увидеть все визуализации.</p>
          </Reveal>
          <ProjectIndex projects={projects.slice(0, 5)} />
          <div className="more"><Link href="/projects" className="btn">Все проекты <span className="arr">→</span></Link></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
