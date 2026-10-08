import Reveal from "@/components/Reveal";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Как мы работаем</span>
            <h2 className="h-section">Пять шагов <em>без сюрпризов</em></h2>
          </div>
          <p>На каждом этапе вы видите результат и согласовываете его прежде, чем мы двинемся дальше.</p>
        </Reveal>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.k} className="step" delay={i * 90}>
              <div className="step__dot" />
              <span className="step__k">{s.k}</span>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
