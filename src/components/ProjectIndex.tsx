"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  // при прокрутке курсор «уезжает» со строки: прячем превью, чтобы оно не висело над другими секциями
  useEffect(() => {
    const hide = () => setActive(null);
    window.addEventListener("scroll", hide, { passive: true });
    return () => window.removeEventListener("scroll", hide);
  }, []);

  const move = (e: React.MouseEvent) => {
    const el = preview.current;
    if (el) el.style.transform = `translate(${e.clientX + 32}px, ${e.clientY - 190}px)`;
  };

  return (
    <div className="pindex" onMouseMove={move} onMouseLeave={() => setActive(null)}>
      {projects.map((p, i) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className="pindex__row" onMouseEnter={() => setActive(i)} onMouseMove={() => setActive(i)}>
          <span className="pindex__thumb">
            <Image src={p.cover.src} alt="" width={p.cover.w} height={p.cover.h} sizes="96px" />
          </span>
          <span className="pindex__n">{String(i + 1).padStart(2, "0")}</span>
          <span className="pindex__t">{p.title}</span>
          <span className="pindex__rooms">{p.rooms.join(" · ")}</span>
          <span className="pindex__arr" aria-hidden>→</span>
        </Link>
      ))}
      <div ref={preview} className={`pindex__preview ${active !== null ? "is-on" : ""}`} aria-hidden>
        {projects.map((p, i) => (
          <Image
            key={p.slug}
            src={p.cover.src}
            alt=""
            width={p.cover.w}
            height={p.cover.h}
            sizes="300px"
            style={{ position: "absolute", inset: 0, opacity: active === i ? 1 : 0, transition: "opacity .35s" }}
          />
        ))}
      </div>
    </div>
  );
}
