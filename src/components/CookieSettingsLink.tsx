"use client";

export default function CookieSettingsLink() {
  return (
    <button
      style={{ fontSize: 12, color: "inherit", textAlign: "left" }}
      onClick={() => window.dispatchEvent(new Event("elmio:cookie-settings"))}
    >
      Настройки cookie
    </button>
  );
}
