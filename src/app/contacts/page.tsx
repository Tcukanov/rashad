import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь со студией Элмио Дизайн: телефон, соцсети и форма заявки на расчёт проекта.",
};

export default function ContactsPage() {
  return <Contact asPage />;
}
