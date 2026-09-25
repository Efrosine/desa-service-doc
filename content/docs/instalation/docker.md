---
title: "Pull Image dan Docker Compose"
weight: 13
---

# Pull Image dan Docker Compose

## Image

Untuk instalasi production, gunakan image release yang sesuai dengan versi aplikasi.

Contoh:

```text
efrosine/desa-service:v1.0.0
```

Jika deployment Anda memang menggunakan `latest`, dokumentasikan versi image yang sedang terpasang sebelum melakukan update.

## Compose

Gunakan Compose berikut:

```yaml
services:
    aplikasi-desa:
        image: efrosine/desa-service:latest
        container_name: laravel-sistem-desa
        ports:
            - "8000:80"
        volumes:
            - ./storage:/var/www/html/storage
            - ./database/database.sqlite:/var/www/html/database/database.sqlite
            - ./.env:/var/www/html/.env
        restart: unless-stopped

    queue:
        image: efrosine/desa-service:latest
        container_name: laravel-sistem-desa-queue
        command: >-
            sh -c "mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs storage/app/public && php artisan queue:work database --sleep=3 --tries=3 --timeout=300"
        volumes:
            - ./storage:/var/www/html/storage
            - ./database/database.sqlite:/var/www/html/database/database.sqlite
            - ./.env:/var/www/html/.env
        restart: unless-stopped
```

Pull dan start:

```bash
docker compose pull
docker compose up -d
docker compose ps
```

Container `laravel-sistem-desa` adalah web app. Container `laravel-sistem-desa-queue` adalah worker.

**Jangan `docker compose build` pada instalasi production.**

## Jika container tidak Up

Jangan langsung menjalankan ulang seluruh instalasi. Cari penyebabnya:

```bash
docker compose ps
docker logs laravel-sistem-desa
docker logs laravel-sistem-desa-queue
```

Gunakan error terakhir pada log untuk menentukan langkah perbaikan. Setelah perubahan dilakukan, jalankan:

```bash
docker compose up -d
docker compose ps
```
