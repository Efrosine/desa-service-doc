---
title: "Pull Image dan Docker Compose"
weight: 13
---

# Pull Image dan Docker Compose

Image production: `efrosine/desa-service:latest`.

Gunakan Compose berikut:
~~~yaml
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
~~~

Pull dan start:
~~~bash
docker compose pull
docker compose up -d
docker compose ps
~~~

Container `laravel-sistem-desa` adalah web app. `laravel-sistem-desa-queue` adalah worker. Keduanya harus `Up`.

**Jangan `docker compose build` pada instalasi production.**