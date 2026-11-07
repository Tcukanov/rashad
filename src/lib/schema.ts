import { designPricePerM2 } from "@/lib/content";
import { site } from "@/lib/site";

// Разметка schema.org для страниц услуг. Цена указывается, только если она известна.
export function serviceSchema(name: string, serviceType: string, pricePerM2?: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    areaServed: { "@type": "City", name: "Москва" },
    provider: { "@type": "HomeAndConstructionBusiness", name: site.nameRu, url: new URL("/", site.url).href },
    ...(pricePerM2 && {
      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        priceSpecification: { "@type": "UnitPriceSpecification", price: pricePerM2, priceCurrency: "RUB", unitText: "м²" },
      },
    }),
  };
}

export const designServiceSchema = () => serviceSchema("Дизайн-проект квартиры", "Дизайн интерьера", designPricePerM2);

// Хлебные крошки: Яндекс показывает их в сниппете вместо адреса.
export function breadcrumbSchema(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: new URL(path, site.url).href })),
  };
}
