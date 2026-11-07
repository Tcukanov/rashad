import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import { getProject, projects, type Project } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `Дизайн интерьера квартиры в ${p.title}`, description: p.lead, openGraph: { images: [p.cover.src] } };
}

// Хлебные крошки для поисковиков: Яндекс показывает их в сниппете вместо адреса.
const crumbUrl = (path: string) => new URL(path, site.url).href;
function breadcrumbs(p: Project) {
  const items: [string, string][] = [["Главная", "/"], ["Проекты", "/projects/"], [p.title, `/projects/${p.slug}/`]];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: crumbUrl(path) })),
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <section className="wrap phero">
        <nav className="phero__back crumbs" aria-label="Навигационная цепочка">
          <Link href="/">Главная</Link> / <Link href="/projects">Проекты</Link> / <span className="as-is">{p.title}</span>
        </nav>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs(p)) }} />
        <h1 className="h-display as-is">{p.title}</h1>
        <p className="phero__lead">{p.lead}</p>
        <div className="phero__meta">
          <span>Дизайн-проект</span>
          {p.rooms.map((r) => <span key={r}>{r}</span>)}
          <span>{p.photos.length} визуализаций</span>
        </div>
      </section>
      <div className="wrap">
        <Gallery photos={p.photos} title={p.title} />
        <div className="pnext">
          <div>
            <span className="eyebrow">Следующий проект</span>
            <Link href={`/projects/${next.slug}`} className="pnext__t">{next.title} →</Link>
          </div>
          <Link href="/contacts" className="btn btn--solid">Хочу похожий интерьер <span className="arr">→</span></Link>
        </div>
      </div>
    </>
  );
}
