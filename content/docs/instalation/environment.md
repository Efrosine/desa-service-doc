---
title: "Konfigurasi Environment"
weight: 12
---

# Konfigurasi Environment

Buat file:

```text
E:\desa-service\.env
```

Gunakan konfigurasi dasar berikut:

```env
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
```

## Environment yang Dipertahankan

File `.env` berada di PC desa dan di-mount ke container. Karena itu, konfigurasi dan `APP_KEY` tetap tersedia ketika container dibuat ulang.

Jangan memasukkan `.env` ke image Docker atau menggantinya dengan file baru setiap kali container dibuat ulang.

## Application Key

Biarkan `APP_KEY` kosong pada tahap persiapan awal.

Setelah container web berjalan, generate key:

```bash
docker exec -it laravel-sistem-desa php artisan key:generate
```

Karena file `.env` berasal dari host, nilai `APP_KEY` akan tersimpan pada:

```text
E:\desa-service\.env
```

**Jangan generate ulang `APP_KEY` pada instalasi yang sudah digunakan.**

## Queue

Production menggunakan:

```env
QUEUE_CONNECTION=database
```

Import data penduduk dan proses asynchronous lainnya membutuhkan queue worker yang berjalan pada container queue.

## Nilai yang Perlu Disesuaikan

Untuk deployment pada PC desa, sesuaikan setidaknya:

- `APP_URL` jika aplikasi diakses melalui alamat host yang berbeda.
- konfigurasi lain yang memang berubah sesuai environment.

Jangan mengubah `DB_CONNECTION=sqlite`, `FILESYSTEM_DISK=local`, atau `QUEUE_CONNECTION=database` tanpa memahami dampaknya terhadap deployment yang digunakan.
