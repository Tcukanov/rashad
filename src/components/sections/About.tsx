import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function About({ children }: { children?: React.ReactNode }) {
  const p = projects[1];
  return (
    <section className="section">
      <div className="wrap about">
        <Reveal className="about__media">
          <Image src={p.cover.src} alt={`Интерьер, ${p.title}`} width={p.cover.w} height={p.cover.h} sizes="(max-width: 900px) 80vw, 38vw" />
          <div className="about__small">
            <Image src="/works/foriver/30.jpg" alt="Деталь интерьера: смеситель и раковина" width={1024} height={1280} sizes="20vw" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="eyebrow">О студии</span>
          <p className="about__quote">
            «Хороший интерьер не кричит. Он спокойно работает на вас каждый день: свет, хранение, фактуры
            и ни одного лишнего предмета».
          </p>
          <div className="about__body">
            <p>
              Элмио Дизайн — авторская студия дизайнера {site.designer}а. Мы создаём интерьеры в спокойной
              природной гамме и сами доводим их до реального ремонта, поэтому квартира выглядит так же,
              как на визуализации.
            </p>
            <p>
              Ведём проект от первого замера до расстановки декора: один договор, одна команда,
              понятные сроки и бюджет.
            </p>
          </div>
          <div className="facts">
            <div><b>{projects.length}</b><span>проектов в портфолио</span></div>
            <div><b>4</b><span>услуги под ключ</span></div>
            <div><b>5</b><span>этапов работы</span></div>
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
