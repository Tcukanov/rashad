import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

// Заявка с сайта.
// 1) Сначала записывается в файл на нашем сервере (сервер должен стоять в РФ — ч. 5 ст. 18 152-ФЗ).
// 2) Затем отправляется письмом через SMTP российского почтового сервиса (Яндекс 360 / Mail.ru).
// Никаких иностранных сервисов (Telegram-боты, Gmail, Google Sheets) в цепочке нет.

export const runtime = "nodejs";

const CONSENT_VERSION = "consent-2026-10-08";
const DATA_DIR = process.env.LEADS_DIR ?? path.join(process.cwd(), "data");

const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 5;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  // honeypot: боты заполняют скрытое поле
  if (clean(body.company, 100)) return Response.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
  if (limited(ip)) return Response.json({ error: "Слишком много заявок. Попробуйте позже или позвоните нам." }, { status: 429 });

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 20);
  const digits = phone.replace(/\D/g, "");
  if (body.consent !== true) {
    return Response.json({ error: "Без согласия на обработку персональных данных мы не можем принять заявку." }, { status: 400 });
  }
  if (name.length < 2 || digits.length < 10 || digits.length > 15) {
    return Response.json({ error: "Проверьте имя и номер телефона." }, { status: 400 });
  }

  const lead = {
    at: new Date().toISOString(),
    name,
    phone,
    service: clean(body.service, 60),
    area: clean(body.area, 6),
    message: clean(body.message, 1500),
    consent: { given: true, version: CONSENT_VERSION, ip, userAgent: clean(req.headers.get("user-agent"), 300) },
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(path.join(DATA_DIR, "leads.jsonl"), JSON.stringify(lead) + "\n", "utf8");
  } catch (e) {
    console.error("lead: не удалось сохранить заявку", e);
    return Response.json({ error: "Не удалось отправить заявку. Позвоните нам, пожалуйста." }, { status: 500 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEADS_TO } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT ?? 465),
        secure: Number(SMTP_PORT ?? 465) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await transport.sendMail({
        from: `"Сайт ${site.nameRu}" <${SMTP_USER}>`,
        to: LEADS_TO || SMTP_USER,
        subject: `Новая заявка: ${lead.service || "консультация"}`,
        text: [
          `Имя: ${lead.name}`,
          `Телефон: ${lead.phone}`,
          `Услуга: ${lead.service}`,
          `Площадь: ${lead.area || "—"}`,
          `Сообщение: ${lead.message || "—"}`,
          "",
          `Согласие на обработку ПДн: да (${CONSENT_VERSION}), ${lead.at}, IP ${ip}`,
        ].join("\n"),
      });
    } catch (e) {
      // заявка уже сохранена — письмо можно переотправить вручную
      console.error("lead: письмо не отправлено", e);
    }
  }

  return Response.json({ ok: true });
}
