import Reveal from "@/components/Reveal";
import { principles } from "@/lib/content";

export default function Principles() {
  return (
    <section className="section section--umber">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Принципы</span>
            <h2 className="h-section">Почему <em>Элмио</em></h2>
          </div>
          <p>Мы берём немного проектов одновременно, чтобы каждому уделить внимание дизайнера.</p>
        </Reveal>
        <div className="principles">
          {principles.map((p, i) => (
            <Reveal key={p.t} className="principle" delay={i * 90}>
              <span className="principle__n">0{i + 1}</span>
              <div>
                <h3>{p.t}</h3>
                <p>{p.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
