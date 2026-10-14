import { site } from "@/lib/site";

const icons = {
  vk: {
    label: "ВКонтакте",
    path: "M13.07 18.5c-6.15 0-9.66-4.22-9.8-11.23h3.08c.1 5.15 2.37 7.33 4.17 7.78V7.27h2.9v4.44c1.78-.19 3.65-2.22 4.28-4.44h2.9a8.58 8.58 0 0 1-3.95 5.6 8.9 8.9 0 0 1 4.63 5.63h-3.19c-.69-2.14-2.4-3.8-4.67-4.02v4.02h-.35z",
  },
  dzen: {
    label: "Дзен",
    // круг с четырёхлучевой звездой, вырезанной через evenodd
    path: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 3.2c.1 4.9 3.9 8.7 8.8 8.8-4.9.1-8.7 3.9-8.8 8.8-.1-4.9-3.9-8.7-8.8-8.8 4.9-.1 8.7-3.9 8.8-8.8z",
  },
} as const;

type Key = keyof typeof icons;
const order: Key[] = ["vk", "dzen"];

export default function SocialIcons({ className = "", tabIndex }: { className?: string; tabIndex?: number }) {
  return (
    <ul className={`socials ${className}`}>
      {order.map((k) => (
        <li key={k}>
          <a href={site.socials[k]} target="_blank" rel="noopener noreferrer" aria-label={icons[k].label} title={icons[k].label} tabIndex={tabIndex}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fillRule="evenodd">
              <path d={icons[k].path} fill="currentColor" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
