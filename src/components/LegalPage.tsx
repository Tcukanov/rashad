export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="wrap legal">
      <div className="legal__body">
        <span className="eyebrow">Правовая информация</span>
        <h1>{title}</h1>
        <p className="legal__date">Редакция от {updated}</p>
        {children}
      </div>
    </section>
  );
}
