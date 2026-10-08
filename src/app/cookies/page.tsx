import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import CookieSettingsLink from "@/components/CookieSettingsLink";

export const metadata: Metadata = { title: "Политика использования cookie" };

export default function Cookies() {
  return (
    <LegalPage title="Политика использования cookie" updated="08.10.2026">
      <p>
        Cookie — небольшие файлы, которые сайт сохраняет в браузере. Вместе с IP-адресом и сведениями
        о браузере они могут относиться к персональным данным, поэтому аналитические cookie мы используем
        только с вашего согласия.
      </p>
      <h2>Какие cookie и хранилища используются</h2>
      <table>
        <thead><tr><th>Название</th><th>Тип</th><th>Назначение</th><th>Срок</th></tr></thead>
        <tbody>
          <tr>
            <td>elmio-cookie-consent (localStorage)</td>
            <td>Необходимые</td>
            <td>Запоминает ваш выбор в баннере cookie</td>
            <td>До очистки браузера</td>
          </tr>
          <tr>
            <td>_ym_uid, _ym_d, _ym_isad и др.</td>
            <td>Аналитические (Яндекс Метрика, ООО «Яндекс»)</td>
            <td>Обезличенная статистика посещений, чтобы улучшать сайт. Вебвизор не используется</td>
            <td>До 1 года</td>
          </tr>
        </tbody>
      </table>
      <p>
        Счётчик Яндекс Метрики загружается только после нажатия «Принять все». Если вы выбрали
        «Только нужные», аналитика не подключается. Сторонние виджеты и видеоплееры на сайт не встраиваются;
        шрифты загружаются с нашего сервера.
      </p>
      <h2>Как изменить выбор</h2>
      <p>
        Откройте <CookieSettingsLink /> внизу любой страницы или удалите cookie в настройках браузера.
        Подробнее об обработке данных — в <Link href="/privacy">политике обработки персональных данных</Link>.
      </p>
    </LegalPage>
  );
}
