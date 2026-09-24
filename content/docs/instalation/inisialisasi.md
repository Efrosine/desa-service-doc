---
title: "Inisialisasi Laravel"
weight: 14
---

# Inisialisasi Laravel

Jalankan sekali setelah container hidup.

~~~bash
docker exec -it laravel-sistem-desa mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs storage/app/public
docker exec -it laravel-sistem-desa chown -R www-data:www-data storage
docker exec -it laravel-sistem-desa php artisan storage:link
docker exec -it laravel-sistem-desa php artisan key:generate
docker exec -it laravel-sistem-desa php artisan migrate --force
~~~

Untuk database yang benar-benar kosong, `migrate:fresh --force` boleh digunakan. Jangan gunakan pada database berisi data karena seluruh tabel/data dihapus.

Buat akun admin:
~~~bash
docker exec -it laravel-sistem-desa php artisan make:filament-user
~~~