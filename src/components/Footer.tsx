import Link from "next/link";
import { site } from "@/lib/site";
import CookieSettingsLink from "./CookieSettingsLink";

export default function Footer() {
  const { legal, socials } = site;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link href="/" className="logo" aria-label="Элмио Дизайн">
              <b>элмио.</b>
              <small>elmio design · дизайн и ремонт</small>
            </Link>
            <p className="muted" style={{ marginTop: 20, maxWidth: 300 }}>
              Элмио Дизайн: студия дизайна интерьера и ремонта под ключ. {site.city}.
            </p>
          </div>
          <div>
            <h4>Навигация</h4>
            <ul>
              <li><Link href="/#services">Услуги</Link></li>
              <li><Link href="/#projects">Проекты</Link></li>
              <li><Link href="/#process">Этапы работы</Link></li>
              <li><Link href="/#contact">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4>Мы в сетях</h4>
            <ul>
              <li><a href={socials.telegram} target="_blank" rel="noopener noreferrer">Телеграм</a></li>
              <li><a href={socials.vk} target="_blank" rel="noopener noreferrer">ВКонтакте</a></li>
              <li><a href={socials.youtube} target="_blank" rel="noopener noreferrer">Ютуб</a></li>
              <li><a href={socials.dzen} target="_blank" rel="noopener noreferrer">Дзен</a></li>
            </ul>
          </div>
          <div>
            <h4>Контакты и реквизиты</h4>
            <ul style={{ marginBottom: 18 }}>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
            <div className="footer__req">
              <span>{legal.entity}</span>
              <span>ИНН {legal.inn}</span>
              {legal.ogrnip && <span>ОГРНИП {legal.ogrnip}</span>}
              {legal.regAuthority && <span>Зарегистрирован: {legal.regAuthority}</span>}
              <span>{legal.address}</span>
              <span>Режим работы: {site.hours}</span>
            </div>
          </div>
        </div>
        <p className="footnote">
          Информация на сайте носит справочный характер и не является публичной офертой
          (ст. 437 ГК РФ). Стоимость и сроки определяются договором.
        </p>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Элмио Дизайн. Все права защищены.</span>
          <nav aria-label="Правовая информация">
            <Link href="/privacy">Политика обработки персональных данных</Link>
            <Link href="/consent">Согласие на обработку ПДн</Link>
            <Link href="/cookies">Политика cookie</Link>
            <CookieSettingsLink />
          </nav>
        </div>
        <div className="big-word" aria-hidden>элмио дизайн</div>
      </div>
    </footer>
  );
}
