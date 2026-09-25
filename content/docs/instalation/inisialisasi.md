---
title: "Inisialisasi Laravel"
weight: 14
---

# Inisialisasi Laravel

Jalankan langkah ini **sekali saat instalasi awal**, setelah container web hidup.

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

**Jangan generate ulang `APP_KEY` pada instalasi yang sudah digunakan.** Mengganti key dapat membuat data yang sebelumnya dienkripsi dengan key lama tidak dapat dibaca.

## 4. Jalankan migration

```bash
docker exec -it laravel-sistem-desa php artisan migrate --force
```

Migration digunakan untuk membuat atau memperbarui struktur database.

**Jangan gunakan `migrate:fresh --force` pada database production. Perintah tersebut menghapus tabel dan data.**

## 5. Buat akun admin

```bash
docker exec -it laravel-sistem-desa php artisan make:filament-user
```

Langkah ini dilakukan ketika akun admin awal belum tersedia.

## Setelah Inisialisasi

Setelah langkah di atas selesai:

- `APP_KEY` terisi.
- Migration selesai tanpa error.
- Storage link tersedia.
- Akun admin dapat digunakan.

Setelah itu lanjutkan ke [Verifikasi Instalasi](../verifikasi/).
