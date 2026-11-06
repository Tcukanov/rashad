import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// .tsx, а не .ts: статическая сборка для Majordomo собирает только .tsx (см. next.config.ts).
export const dynamic = "force-static";

// Копия на *.vercel.app дублирует основной сайт — закрываем её от поисковиков целиком.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/consent/", "/api/"] },
    sitemap: new URL("/sitemap.xml", site.url).href,
  };
}
