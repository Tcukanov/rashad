import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { site } from "@/lib/site";

// next/font скачивает шрифты при сборке и раздаёт их с нашего домена:
// браузер посетителя не обращается к серверам Google.
// Референс (inkbureau.ru) использует Gilroy — шрифт платный. Manrope — близкий бесплатный аналог с кириллицей.
// Если студия купит лицензию Gilroy: положить woff2 в src/fonts и заменить на next/font/local с той же переменной --font-main.
const main = Manrope({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"], variable: "--font-main", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Элмио Дизайн (ELMIO DESIGN): дизайн интерьера и ремонт под ключ в Москве",
    template: "%s | Элмио Дизайн",
  },
  description:
    "Студия дизайна интерьера и ремонта. Дизайн-проект, ремонт под ключ, комплектация и авторский надзор квартир в Москве.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Элмио Дизайн",
    images: ["/works/serdce-stolicy-2/18.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#121212" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={main.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner metrikaId={site.metrikaId} />
      </body>
    </html>
  );
}
