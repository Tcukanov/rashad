import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

// .tsx, а не .ts: статическая сборка для Majordomo собирает только .tsx (см. next.config.ts).
export const dynamic = "force-static";

// Адреса со слешем на конце — так их отдаёт статическая сборка (trailingSlash).
const url = (path: string) => new URL(path.endsWith("/") ? path : `${path}/`, site.url).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["/", 1],
    ["/services", 0.9],
    ["/services/design", 0.9],
    ["/services/renovation", 0.9],
    ["/services/novostroyka", 0.8],
    ["/projects", 0.9],
    ["/studio", 0.7],
    ["/contacts", 0.8],
  ];
  return [
    ...pages.map(([path, priority]) => ({ url: url(path), changeFrequency: "monthly" as const, priority })),
    ...projects.map((p) => ({ url: url(`/projects/${p.slug}`), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...["/privacy", "/cookies"].map((path) => ({ url: url(path), changeFrequency: "yearly" as const, priority: 0.1 })),
  ];
}
