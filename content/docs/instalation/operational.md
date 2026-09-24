---
title: "Operasional dan Update"
weight: 16
---

# Operasional dan Update

Restart PC tidak memerlukan instalasi ulang. Docker memakai `restart: unless-stopped`.

Perintah:
~~~bash
docker compose stop
docker compose start
docker compose down
~~~

Update image production:
~~~bash
docker compose pull
docker compose up -d
docker compose ps
~~~

Jika release membutuhkan migration: `docker exec -it laravel-sistem-desa php artisan migrate --force`.

Backup sebelum update besar: `database/database.sqlite`, `storage/`, `.env`, dan `docker-compose.yml`.