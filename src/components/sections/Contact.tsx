import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import SocialIcons from "@/components/SocialIcons";
import { site } from "@/lib/site";

export default function Contact({ asPage = false }: { asPage?: boolean }) {
  const Title = asPage ? "h1" : "h2";
  // на отдельной странице блок виден сразу, без анимации появления
  const Wrap = asPage ? Plain : Reveal;
  return (
    <section className={`section ${asPage ? "section--page" : "section--umber"}`}>
      <div className="wrap lead">
        <Wrap className="lead__aside">
          <span className="eyebrow">{asPage ? "Контакты" : "Заявка"}</span>
          <Title className={asPage ? "h-display" : "h-section"}>Расскажите о <em>вашем доме</em></Title>
          <p>
            Оставьте контакты: перезвоним, зададим пару вопросов и назовём ориентировочную стоимость
            и сроки. Консультация ни к чему не обязывает.
          </p>
          <div className="lead__contacts">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span className="muted">{site.city} · {site.hours}</span>
            <SocialIcons className="socials--lg" />
          </div>
        </Wrap>
        <Wrap delay={120}>
          <LeadForm />
        </Wrap>
      </div>
    </section>
  );
}

function Plain({ className, children }: { className?: string; delay?: number; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}
