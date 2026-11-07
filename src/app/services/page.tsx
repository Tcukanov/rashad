import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import Link from "next/link";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Дизайн-проект и ремонт квартир под ключ в Москве",
  description: "Услуги студии в Москве: дизайн-проект квартиры от 3 000 ₽ за м², ремонт под ключ, комплектация и авторский надзор по договору.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Услуги"
        h1="Дизайн-проект и ремонт квартир под ключ в Москве"
        title={<>От идеи <em>до ключей</em></>}
        lead="Можно заказать только дизайн-проект или доверить нам весь путь. Дизайн-проект стоит от 3 000 ₽ за м². Ремонт, комплектацию и авторский надзор считаем после замера и фиксируем в договоре: цена зависит от площади, состава работ и материалов."
      />
      <Services head={false}>
        <div className="more">
          <Link href="/services/novostroyka" className="btn">Дизайн и ремонт в новостройке <span className="arr">→</span></Link>
        </div>
      </Services>
      <Process />
      <CtaBand title="Рассчитаем стоимость" text="Пришлите площадь и пару слов о задаче, назовём ориентир по бюджету и срокам." />
    </>
  );
}
