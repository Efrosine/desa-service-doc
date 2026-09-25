---
title: "Operasional dan Update"
weight: 16
---

# Operasional dan Update

Halaman ini menjelaskan operasi dasar deployment setelah instalasi awal selesai.

## Restart PC

Restart PC tidak memerlukan instalasi ulang. Docker menggunakan:

```yaml
restart: unless-stopped
```

Setelah Docker Desktop kembali berjalan, cek:

```bash
docker compose ps
```

Pastikan web dan queue container kembali berstatus `Up`.

## Stop dan Start

Untuk menghentikan sementara:

```bash
docker compose stop
```

Untuk menjalankan kembali:

```bash
docker compose start
```

`docker compose down` menghapus container dan network Compose. Bind mount seperti `storage/` dan `database/database.sqlite` tetap berada di host, tetapi gunakan perintah ini hanya jika memang ingin membuat ulang container.

## Update Image

Sebelum update:

1. Backup `database/database.sqlite`.
2. Backup `storage/`.
3. Simpan salinan `.env` dan `docker-compose.yml`.
4. Catat versi image yang sedang digunakan.

Kemudian:

```bash
docker compose pull
docker compose up -d
docker compose ps
```

Jika release membutuhkan migration:

```bash
docker exec -it laravel-sistem-desa php artisan migrate --force
```

Setelah update, lakukan [Verifikasi Instalasi](../verifikasi/) untuk memastikan web dan queue container berjalan normal.

## Jika Update Bermasalah

Jangan menghapus database atau storage untuk mencoba memperbaiki deployment.

Simpan log terlebih dahulu:

```bash
docker logs laravel-sistem-desa
docker logs laravel-sistem-desa-queue
```

Periksa versi image yang digunakan dan pastikan image tersebut memang release yang dimaksud.

Jika perlu kembali ke release sebelumnya, ubah tag image pada `docker-compose.yml` ke versi yang sebelumnya diketahui bekerja, lalu jalankan:

```bash
docker compose pull
docker compose up -d
docker compose ps
```

Jika migration database sudah dijalankan oleh release baru, jangan melakukan rollback database secara sembarangan. Rollback migration harus mengikuti prosedur release aplikasi tersebut.

## Backup Minimum

Simpan:

- `database/database.sqlite`
- `storage/`
- `.env`
- `docker-compose.yml`

Backup sebaiknya dibuat sebelum update yang mengubah image atau database.
