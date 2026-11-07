import { site } from "@/lib/site";

// Разметка schema.org: Яндекс и Google связывают сайт с организацией, адресом и карточкой на Картах.
// Часы работы не указываем, пока в site.ts стоит заглушка.
export default function OrgSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.nameRu,
    alternateName: "Дизайн и Ремонт МСК",
    description: "Дизайн интерьера и ремонт квартир под ключ в Москве: дизайн-проект, ремонт, комплектация, авторский надзор.",
    url: new URL("/", site.url).href,
    logo: new URL("/icon.png", site.url).href,
    image: new URL("/hero.jpg", site.url).href,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.emailHref.replace("mailto:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.replace(/^Москва,\s*/, ""),
      addressLocality: "Москва",
      addressCountry: "RU",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.coords.lat, longitude: site.coords.lon },
    areaServed: { "@type": "City", name: "Москва" },
    sameAs: [`https://yandex.ru/maps/org/${site.yandexOrgId}/`, site.socials.vk, site.socials.dzen],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
