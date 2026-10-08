export default function PageHead({ eyebrow, title, lead }: { eyebrow: string; title: React.ReactNode; lead?: string }) {
  return (
    <section className="wrap phero">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="h-display">{title}</h1>
      {lead && <p className="phero__lead">{lead}</p>}
    </section>
  );
}
