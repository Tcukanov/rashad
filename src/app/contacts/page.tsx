import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с «Дизайн и Ремонт студия»: телефон, соцсети и форма заявки на расчёт проекта.",
};

export default function ContactsPage() {
  return (
    <>
      <Contact asPage />
      <Location />
    </>
  );
}
