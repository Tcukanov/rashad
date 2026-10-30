import Image from "next/image";
import Reveal from "@/components/Reveal";

const photo = { src: "/team.jpg", width: 1800, height: 1620 };

export default function Team({ children, compact = false }: { children?: React.ReactNode; compact?: boolean }) {
  if (compact) {
    return (
      <section className="section">
        <div className="wrap team-split">
          <Reveal>
            <Image {...photo} alt="Наша команда" sizes="(max-width: 900px) 100vw, 50vw" />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Команда</span>
            <h2 className="h-section">Наша <em>команда</em></h2>
            <div className="about__body">
              <p>
                Мы создаём интерьеры в спокойной природной гамме и сами доводим их до реального ремонта,
                поэтому квартира выглядит так же, как на визуализации.
              </p>
              <p>
                Ведём проект от первого замера до расстановки декора: один договор, одна команда,
                понятные сроки и бюджет.
              </p>
            </div>
            <div className="facts">
              <div><b>10+</b><span>лет на рынке</span></div>
              <div><b>110+</b><span>проектов</span></div>
              <div><b>5</b><span>этапов работы</span></div>
            </div>
            {children}
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Команда</span>
            <h2 className="h-section">Наша <em>команда</em></h2>
          </div>
          <p>Люди, которые ведут ваш проект от первого замера до расстановки декора.</p>
        </Reveal>
        <Reveal className="team">
          <Image {...photo} alt="Наша команда" sizes="(max-width: 900px) 100vw, 1100px" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
