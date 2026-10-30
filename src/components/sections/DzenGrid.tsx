import Image from "next/image";
import Reveal from "@/components/Reveal";
import { dzenUrl, dzenVideos } from "@/lib/dzen";
import { site } from "@/lib/site";

export default function DzenGrid() {
  return (
    <section className="section section--umber">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Дзен</span>
            <h2 className="h-section">Смотрите нас <em>в Дзене</em></h2>
          </div>
          <p>Короткие ролики со строек и из готовых квартир: обзоры, приёмы и разборы решений.</p>
        </Reveal>
        <ul className="dzen">
          {dzenVideos.map((v, i) => (
            <Reveal as="li" key={v.id} delay={(i % 4) * 80}>
              <a className="dzen__card" href={dzenUrl(v.id)} target="_blank" rel="noopener noreferrer">
                <Image src={`/dzen/${v.id}.jpg`} alt="" width={405} height={720} sizes="(max-width: 700px) 50vw, 25vw" />
                <span className="dzen__play" aria-hidden>
                  <svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
                </span>
                <span className="dzen__t as-is">{v.title}</span>
              </a>
            </Reveal>
          ))}
        </ul>
        <div className="more">
          <a href={site.socials.dzen} className="btn" target="_blank" rel="noopener noreferrer">Все ролики в Дзене <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
