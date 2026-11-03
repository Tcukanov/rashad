#!/bin/sh
# Статическая сборка для Majordomo: out/ + site.zip (распаковать в папку www сайта).
set -e
cd "$(dirname "$0")"
rm -rf out site.zip
STATIC_EXPORT=1 NEXT_PUBLIC_LEAD_ENDPOINT=/api/lead.php npx next build
cp -R hosting/. out/
(cd out && zip -qr ../site.zip .)
echo "site.zip готов"
