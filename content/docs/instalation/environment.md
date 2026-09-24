---
title: "Konfigurasi Environment"
weight: 12
---

# Konfigurasi Environment

Buat `E:\desa-service\.env`:
~~~env
APP_NAME="Desa Service"
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=http://localhost:8000
APP_LOCALE=id
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US
LOG_CHANNEL=stack
LOG_STACK=single
LOG_LEVEL=warning
DB_CONNECTION=sqlite
SESSION_DRIVER=file
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database
CACHE_STORE=file
MAIL_MAILER=log
~~~

Jangan isi `APP_KEY` manual. Jalankan `docker exec -it laravel-sistem-desa php artisan key:generate`. Karena `.env` dimount dari host, key tersimpan di PC desa.

Production menggunakan `QUEUE_CONNECTION=database`.