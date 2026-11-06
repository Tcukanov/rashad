// h1 — короткая строка с поисковыми словами над крупным заголовком; сам крупный заголовок тогда просто текст.
export default function PageHead({ eyebrow, h1, title, lead }: { eyebrow: string; h1?: string; title: React.ReactNode; lead?: string }) {
  return (
    <section className="wrap phero">
      {h1 ? <h1 className="eyebrow">{h1}</h1> : <span className="eyebrow">{eyebrow}</span>}
      {h1 ? <p className="h-display">{title}</p> : <h1 className="h-display">{title}</h1>}
      {lead && <p className="phero__lead">{lead}</p>}
    </section>
  );
}
