---
title: "Storage dan File"
weight: 63
---

# Storage dan File

Mount: `./storage:/var/www/html/storage`. File host berada pada folder `storage`.

Jika file tidak ditemukan: pastikan storage ada, cek file host, cek mount, dan cek log.

Permission: `docker exec -it laravel-sistem-desa chown -R www-data:www-data storage`.