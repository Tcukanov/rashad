import Image from "next/image";
import Reveal from "@/components/Reveal";
import { dzenUrl, dzenVideos } from "@/lib/dzen";
import { site } from "@/lib/site";

// ids — показать только эти ролики (для страниц услуг); по умолчанию все из lib/dzen.ts.
export default function DzenGrid({
  ids,
  title = <>Смотрите нас <em>в Дзене</em></>,
  text = "Короткие ролики со строек и из готовых квартир: обзоры, приёмы и разборы решений.",
}: { ids?: string[]; title?: React.ReactNode; text?: string }) {
  const videos = ids ? dzenVideos.filter((v) => ids.includes(v.id)) : dzenVideos;
  return (
    <section className="section section--umber">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Дзен</span>
            <h2 className="h-section">{title}</h2>
          </div>
          <p>{text}</p>
        </Reveal>
        <ul className="dzen">
          {videos.map((v, i) => (
            <Reveal as="li" key={v.id} delay={(i % 4) * 80}>
              <a className="dzen__card" href={dzenUrl(v.id)} target="_blank" rel="noopener noreferrer">
                <Image src={`/dzen/${v.id}.webp`} alt="" width={405} height={720} sizes="(max-width: 700px) 50vw, 25vw" />
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
