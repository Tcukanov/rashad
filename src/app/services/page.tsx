import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Дизайн-проект и ремонт квартир под ключ в Москве",
  description: "Услуги студии в Москве: дизайн-проект квартиры, ремонт под ключ, комплектация и авторский надзор. Стоимость рассчитываем после замера.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Услуги"
        h1="Дизайн-проект и ремонт квартир под ключ в Москве"
        title={<>От идеи <em>до ключей</em></>}
        lead="Можно заказать только дизайн-проект или доверить нам весь путь. Стоимость рассчитываем индивидуально после замера: она зависит от площади, состава работ и материалов."
      />
      <Services head={false} />
      <Process />
      <CtaBand title="Рассчитаем стоимость" text="Пришлите площадь и пару слов о задаче, назовём ориентир по бюджету и срокам." />
    </>
  );
}
