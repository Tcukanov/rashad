import type { Metadata } from "next";
import About from "@/components/sections/About";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import Principles from "@/components/sections/Principles";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Студия дизайна интерьера в Москве: дизайнер и команда ремонта",
  description: "«Дизайн и Ремонт студия» — дизайнер интерьера и команда ремонта в Москве: подход, принципы, этапы работы и наша команда.",
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
