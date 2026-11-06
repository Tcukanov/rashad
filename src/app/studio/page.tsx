import type { Metadata } from "next";
import About from "@/components/sections/About";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import Principles from "@/components/sections/Principles";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "О студии дизайна интерьера и ремонта в Москве",
  description: "«Дизайн и Ремонт студия» — авторская студия дизайна интерьера и ремонта в Москве: подход, принципы и этапы работы.",
};

export default function StudioPage() {
  return (
    <>
      <PageHead eyebrow="Студия" h1="Студия дизайна интерьера и ремонта в Москве" title={<>Дизайн, который <em>доводим до ремонта</em></>} />
      <About />
      <Team />
      <Principles />
      <Process />
      <CtaBand />
    </>
  );
}
