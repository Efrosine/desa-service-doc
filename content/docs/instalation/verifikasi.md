---
title: "Verifikasi Instalasi"
weight: 15
---

# Verifikasi Instalasi

Cek container:
~~~bash
docker compose ps
~~~

Cek worker:
~~~bash
docker logs laravel-sistem-desa-queue
~~~

Buka aplikasi:
~~~text
http://localhost:8000/admin
~~~

Checklist: web container Up, queue container Up, APP_KEY terisi, migration berhasil, akun admin tersedia, dan panel `/admin` dapat dibuka.