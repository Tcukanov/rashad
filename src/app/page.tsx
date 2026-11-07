import Image from "next/image";
import Link from "next/link";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import DzenGrid from "@/components/sections/DzenGrid";
import Location from "@/components/sections/Location";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero__mark" aria-hidden>дизайн и ремонт.</span>
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1 className="eyebrow">Дизайн интерьера и ремонт квартир под ключ в Москве</h1>
            <p className="h-display hero__title">
              <span><i>Интерьеры,</i></span>
              <span><i>в которых</i></span>
              <span><i><em>тихо и тепло</em></i></span>
            </p>
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
              <Image src="/hero.webp" alt="Гостиная с кухней-столовой" width={1603} height={2000} priority sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
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

      <Team compact>
        <div className="more"><Link href="/studio" className="btn">О студии <span className="arr">→</span></Link></div>
      </Team>

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

      <DzenGrid />

      <Location />

      <CtaBand />
    </>
  );
}
