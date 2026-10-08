import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import { getProject, projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.lead, openGraph: { images: [p.cover.src] } };
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
        <Link href="/#projects" className="phero__back">← Все проекты</Link>
        <h1 className="h-display">{p.title}</h1>
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
          <Link href="/#contact" className="btn btn--solid">Хочу похожий интерьер <span className="arr">→</span></Link>
        </div>
      </div>
    </>
  );
}
