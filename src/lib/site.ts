// Все контакты и реквизиты в одном месте.
// Значения с пометкой TODO нужно уточнить у студии до запуска сайта.

export const site = {
  name: "ELMIO DESIGN",
  nameRu: "Элмио Дизайн",
  tagline: "Студия дизайна интерьера и ремонта",
  url: "https://elmiodesign.com",
  city: "Москва",
  designer: "Руслан",
  hours: "пн–пт 10:00–19:00, сб по записи", // TODO: уточнить

  phone: "+7 (926) 417-24-22",
  phoneHref: "tel:+79264172422",
  // TODO: реальная почта студии (на российском сервисе: Яндекс 360 / Mail.ru)
  email: "hello@elmiodesign.com",

  socials: {
    telegram: "https://t.me/elmiodesign", // TODO: проверить ссылку на канал
    vk: "https://vk.ru/elmiodesigncom",
    youtube: "https://youtube.com/@elmiodesign",
    dzen: "https://dzen.ru/elmiodesign",
  },

  // Оператор персональных данных и исполнитель услуг
  legal: {
    entity: "Индивидуальный предприниматель Абдель-Керим Алян Рашад",
    short: "ИП Абдель-Керим А. Р.",
    inn: "771524920018",
    regAuthority: "", // TODO: какая ИФНС зарегистрировала ИП (из листа записи ЕГРИП)
    ogrnip: "", // TODO: ОГРНИП (обязателен к размещению по ст. 9 Закона о защите прав потребителей)
    // Юридический адрес ИП — это адрес регистрации. Публиковать квартиру не обязательно;
    // для сайта достаточно города или адреса офиса/шоурума, если он есть.
    address: "г. Москва",
    privacyEmail: "hello@elmiodesign.com", // TODO: адрес для запросов субъектов ПДн
  },

  metrikaId: process.env.NEXT_PUBLIC_YM_ID ?? "",
} as const;
