---
title: "Operasional dan Update"
weight: 16
---

# Operasional dan Update

## Restart PC

Restart PC tidak memerlukan instalasi ulang. Docker menggunakan:

```yaml
restart: unless-stopped
```

Setelah Docker Desktop kembali berjalan, cek:

```bash
docker compose ps
```

## Stop dan start

Untuk menghentikan sementara:

```bash
docker compose stop
```

Untuk menjalankan kembali:

```bash
docker compose start
```

`docker compose down` menghapus container dan network Compose. Bind mount seperti `storage/` dan `database/database.sqlite` tetap berada di host, tetapi gunakan perintah ini hanya jika memang ingin membuat ulang container.

## Update image

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

## Jika update bermasalah

Jangan menghapus database atau storage untuk mencoba memperbaiki deployment.

Simpan log terlebih dahulu:

```bash
docker logs laravel-sistem-desa
docker logs laravel-sistem-desa-queue
```

Kemudian gunakan image release sebelumnya yang sudah diketahui bekerja dan jalankan kembali Compose. Jika migration database sudah dijalankan oleh release baru, rollback migration harus mengikuti prosedur release aplikasi tersebut.

## Backup minimum

Simpan:

- `database/database.sqlite`
- `storage/`
- `.env`
- `docker-compose.yml`

Backup sebaiknya dibuat sebelum update yang mengubah image atau database.
