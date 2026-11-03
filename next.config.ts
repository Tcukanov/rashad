import type { NextConfig } from "next";

// STATIC_EXPORT=1 — чистый HTML/CSS/JS для обычного хостинга (Majordomo): заявки принимает hosting/api/lead.php.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
      // route.ts не собирается: в статике API нет
      pageExtensions: ["tsx"],
      poweredByHeader: false,
    }
  : {
      // Сборка для собственного сервера в РФ (Timeweb Cloud, Selectel, Yandex Cloud и т. п.)
      output: "standalone",
      poweredByHeader: false,
    };

export default nextConfig;
