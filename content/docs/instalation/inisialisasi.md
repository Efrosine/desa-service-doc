---
title: "Inisialisasi Laravel"
weight: 14
---

# Inisialisasi Laravel

Jalankan langkah ini sekali setelah container web hidup.

## 1. Siapkan storage

```bash
docker exec -it laravel-sistem-desa mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs storage/app/public
docker exec -it laravel-sistem-desa chown -R www-data:www-data storage
```

## 2. Buat storage link

```bash
docker exec -it laravel-sistem-desa php artisan storage:link
```

## 3. Generate application key

```bash
docker exec -it laravel-sistem-desa php artisan key:generate
```

Karena `.env` di-mount dari host, `APP_KEY` akan tersimpan pada file `.env` di PC desa.

## 4. Jalankan migration

```bash
docker exec -it laravel-sistem-desa php artisan migrate --force
```

Untuk database yang benar-benar kosong, `migrate:fresh --force` dapat digunakan.

**Jangan gunakan `migrate:fresh --force` pada database yang berisi data. Perintah ini menghapus tabel dan data.**

## 5. Buat akun admin

```bash
docker exec -it laravel-sistem-desa php artisan make:filament-user
```

## Hasil yang diharapkan

Setelah selesai:

- `APP_KEY` terisi.
- Migration selesai tanpa error.
- Storage link tersedia.
- Akun admin dapat digunakan.
