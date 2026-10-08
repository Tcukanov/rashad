import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сборка для собственного сервера в РФ (Timeweb Cloud, Selectel, Yandex Cloud и т. п.)
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
