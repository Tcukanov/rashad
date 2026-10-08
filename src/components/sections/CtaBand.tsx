import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaBand({ title = "Обсудим ваш проект?", text = "Расскажите о квартире: назовём ориентировочную стоимость и сроки." }: { title?: string; text?: string }) {
  return (
    <section className="section cta-band">
      <Reveal className="wrap cta-band__in">
        <h2 className="h-section">{title}</h2>
        <div>
          <p>{text}</p>
          <Link href="/contacts" className="btn btn--solid">Оставить заявку <span className="arr">→</span></Link>
        </div>
      </Reveal>
    </section>
  );
}
