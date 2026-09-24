---
title: "Queue dan Import"
weight: 62
---

# Queue dan Import

Import menggunakan database queue.

Cek: `docker compose ps` dan `docker logs laravel-sistem-desa-queue`.

Pastikan `QUEUE_CONNECTION=database`. Worker: `php artisan queue:work database --sleep=3 --tries=3 --timeout=300`.

Restart worker: `docker compose restart queue`.