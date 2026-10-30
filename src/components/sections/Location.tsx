import Reveal from "@/components/Reveal";
import YandexEmbed from "@/components/YandexEmbed";
import { site } from "@/lib/site";

export default function Location() {
  const { yandexOrgId: id, coords } = site;
  const ll = `${coords.lon}%2C${coords.lat}`;
  const orgUrl = `https://yandex.ru/maps/org/dizayn_i_remont_msk/${id}/`;
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <span className="eyebrow">Отзывы и адрес</span>
            <h2 className="h-section">Где мы <em>находимся</em></h2>
          </div>
          <p>Отзывы клиентов из Яндекс Карт и наш офис: приезжайте обсудить проект лично.</p>
        </Reveal>
        <div className="location">
          <Reveal className="location__reviews">
            <YandexEmbed src={`https://yandex.ru/maps-reviews-widget/${id}?comments`} title="Отзывы о студии в Яндекс Картах" label="Блок отзывов" />
            <a className="btn" href={`${orgUrl}reviews/`} target="_blank" rel="noopener noreferrer">Все отзывы и оставить свой <span className="arr">→</span></a>
          </Reveal>
          <Reveal className="location__map" delay={120}>
            <div className="location__addr">
              <b>{site.address}</b>
              <span className="muted">{site.hours}</span>
              <a href={`https://yandex.ru/maps/?rtext=~${coords.lat}%2C${coords.lon}&rtt=auto`} target="_blank" rel="noopener noreferrer">Построить маршрут →</a>
            </div>
            <YandexEmbed src={`https://yandex.ru/map-widget/v1/?ll=${ll}&z=16&oid=${id}&ol=biz`} title="Студия на Яндекс Картах" label="Карта" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
