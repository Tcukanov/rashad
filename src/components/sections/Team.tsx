import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Team() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Команда</span>
            <h2 className="h-section">Наша <em>команда</em></h2>
          </div>
          <p>Дизайнеры, архитекторы и прорабы, которые ведут ваш проект от замера до расстановки декора.</p>
        </Reveal>
        <Reveal className="team">
          <Image src="/team.jpg" alt="Наша команда" width={1600} height={1431} sizes="(max-width: 900px) 100vw, 1100px" />
        </Reveal>
      </div>
    </section>
  );
}
