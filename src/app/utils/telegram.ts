/**
 * Telegram Bot — отправка заявок с сайта
 *
 * Как настроить (5 минут):
 *
 * 1. Откройте @BotFather в Telegram → /newbot → введите имя и username бота
 *    → скопируйте токен вида  123456789:AABBccDDeeFFggHH  → вставьте в BOT_TOKEN
 *
 * 2. Добавьте бота в вашу группу/канал как администратора
 *
 * 3. Получите CHAT_ID группы:
 *    а) Отправьте любое сообщение в группу
 *    б) Откройте в браузере:
 *       https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
 *    в) Найдите поле "chat": { "id": -100xxxxxxxxxx }
 *       (для групп/каналов число отрицательное)
 *    → вставьте в CHAT_ID (со знаком минус!)
 */

export const BOT_TOKEN = '8674671116:AAE-hGPgTi6fYBocMVhkrF3QuiRuQCyCQjs';
export const CHAT_ID   = '-5132833926';

export interface FormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

const isConfigured =
  !BOT_TOKEN.startsWith('YOUR_') &&
  !CHAT_ID.startsWith('YOUR_');

export async function sendToTelegram(data: FormData): Promise<void> {
  if (!isConfigured) {
    throw new Error('NOT_CONFIGURED');
  }

  const text =
    `📩 <b>Новая заявка — LEX BUSINESS HUB</b>\n\n` +
    `👤 <b>Имя:</b> ${esc(data.name)}\n` +
    `📞 <b>Телефон:</b> ${esc(data.phone)}\n` +
    `📌 <b>Тема:</b> ${esc(data.subject)}\n\n` +
    `💬 <b>Сообщение:</b>\n${esc(data.message)}`;

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id:    CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    },
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.description ?? `Telegram error ${res.status}`);
  }
}

/** Экранирует спецсимволы HTML для Telegram HTML-режима */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}