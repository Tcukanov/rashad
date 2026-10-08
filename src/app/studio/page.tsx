import type { Metadata } from "next";
import About from "@/components/sections/About";
import CtaBand from "@/components/sections/CtaBand";
import PageHead from "@/components/sections/PageHead";
import Principles from "@/components/sections/Principles";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "О студии",
  description: "Элмио Дизайн — авторская студия дизайна интерьера и ремонта в Москве: подход, принципы и этапы работы.",
};

export default function StudioPage() {
  return (
    <>
      <PageHead eyebrow="Студия" title={<>Дизайн, который <em>доводим до ремонта</em></>} />
      <About />
      <Principles />
      <Process />
      <CtaBand />
    </>
  );
}
