// Ролики из канала в Дзене. Обложки скачаны в public/dzen, чтобы страница не грузила картинки с серверов Яндекса.
// Новый ролик: положить обложку в public/dzen/<id>.jpg и добавить строку сюда.

export type DzenVideo = { id: string; title: string };

export const dzenVideos: DzenVideo[] = [
  { id: "65cc989cfda6df2ef7fe1f76", title: "Обзор санузла за 850 000 ₽" },
  { id: "660167794518f16949429001", title: "81 м² в ЖК «Метрополия»" },
  { id: "65e9a65ef0624d1b18fc55a1", title: "Как визуально поднять потолок" },
  { id: "65df43fb78cfba76e1e41bfe", title: "За что платят дизайнерам" },
  { id: "65cdf83eb88df568a17e067c", title: "Почему важен декоративный свет" },
  { id: "67051a9337bc38198a920366", title: "Плитка на потолке" },
  { id: "6613cbd1ffcf6052506d9b0a", title: "Детская мечты" },
  { id: "65e82d1a18fc0a21b241401d", title: "Как мы делаем 3D-визуализацию" },
];

export const dzenUrl = (id: string) => `https://dzen.ru/shorts/${id}`;
