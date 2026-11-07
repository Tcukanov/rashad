<?php
// Заявка с сайта (статическая версия на Majordomo; аналог src/app/api/lead/route.ts).
// 1) Записывается в файл на сервере в РФ, вне папки сайта (ч. 5 ст. 18 152-ФЗ).
// 2) Отправляется письмом через mail() хостинга.

// Почта, куда приходят заявки: info@дизайниремонт.рф (ящик на Majordomo). Домен в punycode — так его понимает mail().
const LEADS_TO = 'info@xn--80ahegecg0agdkv4a.xn--p1ai';
const CONSENT_VERSION = 'consent-2026-10-08';

header('Content-Type: application/json; charset=utf-8');

function reply($code, $data) {
  http_response_code($code);
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
  exit;
}
function clean($v, $max) {
  return is_string($v) ? mb_substr(trim($v), 0, $max) : '';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, ['error' => 'Метод не поддерживается']);

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) reply(400, ['error' => 'Некорректный запрос']);

// honeypot: боты заполняют скрытое поле
if (clean($body['company'] ?? '', 100) !== '') reply(200, ['ok' => true]);

$dir = dirname(__DIR__, 2) . '/leads';
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// не больше 5 заявок с одного IP за 10 минут
$hitsFile = $dir . '/hits.json';
@mkdir($dir, 0700, true);
$hits = is_file($hitsFile) ? (json_decode(file_get_contents($hitsFile), true) ?: []) : [];
$now = time();
foreach ($hits as $k => $ts) {
  $hits[$k] = array_values(array_filter($ts, fn($t) => $now - $t < 600));
  if (!$hits[$k]) unset($hits[$k]);
}
$hits[$ip][] = $now;
@file_put_contents($hitsFile, json_encode($hits), LOCK_EX);
if (count($hits[$ip]) > 5) reply(429, ['error' => 'Слишком много заявок. Попробуйте позже или позвоните нам.']);

$name = clean($body['name'] ?? '', 80);
$phone = clean($body['phone'] ?? '', 20);
$digits = preg_replace('/\D/', '', $phone);
if (($body['consent'] ?? null) !== true) {
  reply(400, ['error' => 'Без согласия на обработку персональных данных мы не можем принять заявку.']);
}
if (mb_strlen($name) < 2 || strlen($digits) < 10 || strlen($digits) > 15) {
  reply(400, ['error' => 'Проверьте имя и номер телефона.']);
}

$lead = [
  'at' => gmdate('c'),
  'name' => $name,
  'phone' => $phone,
  'service' => clean($body['service'] ?? '', 60),
  'area' => clean($body['area'] ?? '', 6),
  'message' => clean($body['message'] ?? '', 1500),
  'consent' => ['given' => true, 'version' => CONSENT_VERSION, 'ip' => $ip, 'userAgent' => clean($_SERVER['HTTP_USER_AGENT'] ?? '', 300)],
];

$saved = @file_put_contents($dir . '/leads.jsonl', json_encode($lead, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX) !== false;

$mailed = false;
if (LEADS_TO !== '') {
  $host = preg_replace('/[^a-z0-9.\-]/i', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
  $text = implode("\n", [
    "Имя: {$lead['name']}",
    "Телефон: {$lead['phone']}",
    "Услуга: {$lead['service']}",
    'Площадь: ' . ($lead['area'] ?: '—'),
    'Сообщение: ' . ($lead['message'] ?: '—'),
    '',
    'Согласие на обработку ПДн: да (' . CONSENT_VERSION . "), {$lead['at']}, IP $ip",
  ]);
  $subject = '=?UTF-8?B?' . base64_encode('Новая заявка: ' . ($lead['service'] ?: 'консультация')) . '?=';
  $headers = "From: " . LEADS_TO . "\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit";
  $mailed = @mail(LEADS_TO, $subject, $text, $headers);
}

if (!$saved && !$mailed) reply(500, ['error' => 'Не удалось отправить заявку. Позвоните нам, пожалуйста.']);
reply(200, ['ok' => true]);
