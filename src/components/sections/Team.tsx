import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Team({ children, compact = false }: { children?: React.ReactNode; compact?: boolean }) {
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
        <Reveal className={`team ${compact ? "team--compact" : ""}`}>
          <Image src="/team.jpg" alt="Наша команда" width={1800} height={1620} sizes={compact ? "(max-width: 900px) 100vw, 640px" : "(max-width: 900px) 100vw, 1100px"} />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
