"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/projects";

export default function Gallery({ photos, title }: { photos: Photo[]; title: string }) {
  const [idx, setIdx] = useState<number | null>(null);
  const n = photos.length;
  const go = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, go]);

  return (
    <>
      <div className="gallery">
        {photos.map((p, i) => (
          <button key={p.src} onClick={() => setIdx(i)} aria-label={`Открыть фото ${i + 1} из ${n}`}>
            <Image
              src={p.src}
              alt={`${title}, визуализация ${i + 1}`}
              width={p.w}
              height={p.h}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              loading={i < 3 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>
      {idx !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={() => setIdx(null)}>
          <Image
            src={photos[idx].src}
            alt={`${title}, визуализация ${idx + 1}`}
            width={photos[idx].w}
            height={photos[idx].h}
            sizes="92vw"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__btn lightbox__prev" aria-label="Предыдущее" onClick={(e) => { e.stopPropagation(); go(-1); }}>←</button>
          <button className="lightbox__btn lightbox__next" aria-label="Следующее" onClick={(e) => { e.stopPropagation(); go(1); }}>→</button>
          <button className="lightbox__close" onClick={() => setIdx(null)}>Закрыть ✕</button>
          <span className="lightbox__count">{idx + 1} / {n}</span>
        </div>
      )}
    </>
  );
}
