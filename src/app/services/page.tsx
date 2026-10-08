import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Дизайн-проект, ремонт под ключ, комплектация и авторский надзор. Стоимость рассчитывается после замера.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Услуги"
        title={<>От идеи <em>до ключей</em></>}
        lead="Можно заказать только дизайн-проект или доверить нам весь путь. Стоимость рассчитываем индивидуально после замера: она зависит от площади, состава работ и материалов."
      />
      <Services head={false} />
      <Process />
      <CtaBand title="Рассчитаем стоимость" text="Пришлите площадь и пару слов о задаче, назовём ориентир по бюджету и срокам." />
    </>
  );
}
