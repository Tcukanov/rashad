import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectIndex from "@/components/ProjectIndex";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Портфолио студии Элмио Дизайн: дизайн-проекты квартир в жилых комплексах Москвы.",
};

export default function ProjectsPage() {
  const mosaic = [
    { pr: projects[4], src: "/works/foriver-2/31.jpg", w: 1036, h: 1280 },
    { pr: projects[2], src: "/works/dream-towers/07.jpg", w: 1280, h: 937 },
    { pr: projects[3], src: "/works/arhitektor/19.jpg", w: 1024, h: 1280 },
    { pr: projects[6], src: "/works/beregovoy/12.jpg", w: 951, h: 1280 },
  ];
  return (
    <>
      <PageHead
        eyebrow="Портфолио"
        title={<>Наши <em>проекты</em></>}
        lead="Квартиры в московских жилых комплексах. Откройте проект, чтобы увидеть все визуализации."
      />
      <section className="wrap" style={{ paddingBottom: "clamp(80px, 10vw, 140px)" }}>
        <ProjectIndex projects={projects} />
        <div className="mosaic">
          {mosaic.map((m) => (
            <Link key={m.src} href={`/projects/${m.pr.slug}`}>
              <Image src={m.src} alt={m.pr.title} width={m.w} height={m.h} sizes="(max-width: 700px) 100vw, 50vw" />
              <span className="mosaic__cap">{m.pr.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand title="Хотите так же?" />
    </>
  );
}
