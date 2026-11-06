import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import OrgSchema from "@/components/OrgSchema";
import { site } from "@/lib/site";

// next/font скачивает шрифты при сборке и раздаёт их с нашего домена:
// браузер посетителя не обращается к серверам Google.
// Референс (inkbureau.ru) использует Gilroy — шрифт платный. Manrope — близкий бесплатный аналог с кириллицей.
// Если студия купит лицензию Gilroy: положить woff2 в src/fonts и заменить на next/font/local с той же переменной --font-main.
const main = Manrope({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"], variable: "--font-main", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Дизайн интерьера и ремонт квартир под ключ в Москве | Дизайн и Ремонт студия",
    template: "%s | Дизайн и Ремонт студия",
  },
  description:
    "Дизайн интерьера и ремонт квартир под ключ в Москве: дизайн-проект с 3D-визуализацией, ремонт, комплектация и авторский надзор. Офис на Огородном проезде.",
  // каждая страница ссылается на свой адрес на основном домене
  alternates: { canonical: "./" },
  // копия на *.vercel.app не должна попадать в поиск
  robots: process.env.VERCEL ? { index: false, follow: false } : undefined,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Дизайн и Ремонт студия",
    images: ["/works/serdce-stolicy-2/18.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#F6F3EE" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={main.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner metrikaId={site.metrikaId} />
        <OrgSchema />
      </body>
    </html>
  );
}
