import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ProjectIndex from "@/components/ProjectIndex";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const services = [
  {
    t: "Дизайн-проект",
    p: "Планировка, 3D-визуализация каждой комнаты и полный комплект рабочих чертежей, по которым строители работают без догадок.",
    li: ["Обмерный план и планировочные решения", "Фотореалистичные визуализации", "Рабочие чертежи и ведомости"],
  },
  {
    t: "Ремонт под ключ",
    p: "Реализуем собственный проект: от демонтажа до клининга. Смета и график фиксируются в договоре.",
    li: ["Черновые и чистовые работы", "Инженерные системы", "Еженедельные фотоотчёты"],
  },
  {
    t: "Комплектация",
    p: "Подбираем и заказываем отделку, мебель, свет и сантехнику. Контролируем поставки и сроки.",
    li: ["Спецификация с ценами", "Работа с поставщиками", "Приёмка и проверка"],
  },
  {
    t: "Авторский надзор",
    p: "Дизайнер на объекте: следим, чтобы интерьер в жизни совпал с визуализацией до миллиметра.",
    li: ["Выезды по графику", "Ответы на вопросы бригады", "Корректировки на месте"],
  },
];

const steps = [
  { k: "Шаг 01", t: "Знакомство и замер", p: "Обсуждаем задачу, образ жизни семьи и бюджет. Выезжаем на объект." },
  { k: "Шаг 02", t: "Планировка", p: "Несколько вариантов зонирования, выбираем лучший вместе." },
  { k: "Шаг 03", t: "Визуализация", p: "Показываем будущий интерьер в деталях: материалы, свет, мебель." },
  { k: "Шаг 04", t: "Чертежи и смета", p: "Рабочая документация и прозрачная смета до начала стройки." },
  { k: "Шаг 05", t: "Ремонт и сдача", p: "Строим, комплектуем, контролируем. Передаём ключи от готового дома." },
];

const principles = [
  { t: "Одна ответственность", p: "Проект и ремонт ведёт одна команда: никто не перекладывает ошибки друг на друга." },
  { t: "Тёплый минимализм", p: "Натуральное дерево, камень, мягкий свет и выверенные пропорции вместо случайного декора." },
  { t: "Прозрачный бюджет", p: "Смета до начала работ, фиксированные этапы оплаты, отчёты по каждому этапу." },
];

export default function Home() {
  const hero = projects[0];
  const p1 = projects[1];
  const mosaic = [
    { pr: projects[4], src: "/works/foriver-2/31.jpg", w: 1036, h: 1280 },
    { pr: projects[2], src: "/works/dream-towers/07.jpg", w: 1280, h: 937 },
    { pr: projects[3], src: "/works/arhitektor/19.jpg", w: 1024, h: 1280 },
    { pr: projects[6], src: "/works/beregovoy/12.jpg", w: 951, h: 1280 },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <span className="hero__mark" aria-hidden>ЭЛМИО</span>
        <div className="wrap hero__grid">
          <div className="hero__text">
            <span className="eyebrow">Студия дизайна и ремонта · {site.city}</span>
            <h1 className="h-display hero__title">
              <span><i>Интерьеры,</i></span>
              <span><i>в которых</i></span>
              <span><i><em>тихо и тепло</em></i></span>
            </h1>
            <p className="hero__lead">
              Проектируем и ремонтируем квартиры под ключ. Дерево, камень, свет и ничего лишнего:
              дом, в который хочется возвращаться.
            </p>
            <div className="hero__actions">
              <Link href="/#contact" className="btn btn--solid">Рассчитать проект <span className="arr">→</span></Link>
              <Link href="/#projects" className="btn">Смотреть работы</Link>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__frame" aria-hidden />
            <div className="hero__img">
              <Image src={hero.cover.src} alt={`Гостиная, ${hero.title}`} width={hero.cover.w} height={hero.cover.h} priority sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
            <span className="hero__caption">{hero.title}</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {[...Array(2)].flatMap((_, k) =>
            ["Дизайн-проект", "Ремонт под ключ", "Комплектация", "Авторский надзор", "Визуализация", "Рабочие чертежи"].map((w) => (
              <span key={w + k}>{w}</span>
            )),
          )}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap about">
          <Reveal className="about__media">
            <Image src={p1.cover.src} alt={`Интерьер, ${p1.title}`} width={p1.cover.w} height={p1.cover.h} sizes="(max-width: 900px) 80vw, 38vw" />
            <div className="about__small">
              <Image src="/works/foriver/30.jpg" alt="Деталь интерьера: смеситель и раковина" width={1024} height={1280} sizes="20vw" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">О студии</span>
            <p className="about__quote">
              «Хороший интерьер не кричит. Он спокойно работает на вас каждый день: свет, хранение, фактуры
              и ни одного лишнего предмета».
            </p>
            <div className="about__body">
              <p>
                Элмио Дизайн (ELMIO DESIGN) — авторская студия дизайнера {site.designer}а. Мы создаём интерьеры в
                тёплой природной гамме и сами доводим их до реального ремонта, поэтому квартира выглядит так же,
                как на визуализации.
              </p>
              <p>
                Ведём проект от первого замера до расстановки декора: один договор, одна команда,
                понятные сроки и бюджет.
              </p>
            </div>
            <div className="facts">
              <div><b>{projects.length}</b><span>проектов в портфолио</span></div>
              <div><b>4</b><span>услуги под ключ</span></div>
              <div><b>5</b><span>этапов работы</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--umber" id="services">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Услуги</span>
              <h2 className="h-section">От идеи до <em>ключей</em></h2>
            </div>
            <p>
              Можно заказать только дизайн-проект или доверить нам весь путь. Стоимость рассчитываем
              индивидуально после замера: зависит от площади, состава работ и материалов.
            </p>
          </Reveal>
          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.t} className="service" delay={i * 90}>
                <span className="service__n">0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
                <ul>{s.li.map((l) => <li key={l}>{l}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Портфолио</span>
              <h2 className="h-section">Избранные <em>проекты</em></h2>
            </div>
            <p>Квартиры в московских жилых комплексах. Откройте проект, чтобы увидеть все визуализации.</p>
          </Reveal>
          <ProjectIndex projects={projects} />
          <div className="mosaic">
            {mosaic.map((m) => (
              <Link key={m.src} href={`/projects/${m.pr.slug}`}>
                <Image src={m.src} alt={m.pr.title} width={m.w} height={m.h} sizes="(max-width: 700px) 100vw, 50vw" />
                <span className="mosaic__cap">{m.pr.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--umber" id="process">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Как мы работаем</span>
              <h2 className="h-section">Пять шагов <em>без сюрпризов</em></h2>
            </div>
            <p>На каждом этапе вы видите результат и согласовываете его прежде, чем мы двинемся дальше.</p>
          </Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.k} className="step" delay={i * 90}>
                <div className="step__dot" />
                <span className="step__k">{s.k}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <div>
              <span className="eyebrow">Принципы</span>
              <h2 className="h-section">Почему <em>Элмио</em></h2>
            </div>
            <p>Мы берём немного проектов одновременно, чтобы каждому уделить внимание дизайнера.</p>
          </Reveal>
          <div className="principles">
            {principles.map((p, i) => (
              <Reveal key={p.t} className="principle" delay={i * 90}>
                <span className="principle__n">0{i + 1}</span>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--umber" id="contact">
        <div className="wrap lead">
          <Reveal className="lead__aside">
            <span className="eyebrow">Заявка</span>
            <h2 className="h-section">Расскажите о <em>вашем доме</em></h2>
            <p>
              Оставьте контакты: перезвоним, зададим пару вопросов и назовём ориентировочную стоимость
              и сроки. Консультация ни к чему не обязывает.
            </p>
            <div className="lead__contacts">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.socials.telegram} target="_blank" rel="noopener noreferrer">Телеграм-канал →</a>
              <a href={site.socials.vk} target="_blank" rel="noopener noreferrer">ВКонтакте →</a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
