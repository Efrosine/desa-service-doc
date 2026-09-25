---
title: "Storage dan File"
weight: 63
---

# Storage dan File

Aplikasi menggunakan directory `storage/` pada host sebagai bind mount ke storage Laravel di dalam container:

```yaml
volumes:
  - ./storage:/var/www/html/storage
```

Artinya file pada:

```text
./storage/
```

di PC desa adalah data storage yang digunakan aplikasi.

## Struktur Storage

Beberapa directory penting:

```text
storage/
├── app/
│   └── public/
├── framework/
│   ├── cache/
│   ├── sessions/
│   └── views/
└── logs/
```

File hasil generate atau file aplikasi lainnya dapat berada di dalam directory tersebut sesuai implementasi aplikasi.

Jangan menghapus seluruh `storage/` untuk memperbaiki masalah file. Directory ini merupakan bagian dari data dan runtime aplikasi.

## Storage Link

Jika file pada `storage/app/public` harus dapat diakses melalui web, pastikan storage link tersedia:

```bash
docker exec -it laravel-sistem-desa php artisan storage:link
```

Periksa link dari dalam container jika diperlukan:

```bash
docker exec -it laravel-sistem-desa ls -la public/storage
```

Jika storage link rusak atau belum ada, buat ulang dengan perintah tersebut.

## File Tidak Ditemukan

Periksa dari host terlebih dahulu:

```text
storage/
```

Kemudian periksa dari dalam container:

```bash
docker exec -it laravel-sistem-desa ls -la storage
```

Jika file ada di host tetapi tidak terlihat di container, periksa bind mount pada `docker-compose.yml`.

Jika file tidak ada di host maupun container, periksa log aplikasi dan proses yang menghasilkan file tersebut.

## Permission

Jika Laravel tidak dapat membuat atau membaca file, periksa permission storage:

```bash
docker exec -it laravel-sistem-desa chown -R www-data:www-data storage
```

Gunakan perintah ini jika container berjalan menggunakan user `www-data`.

Jangan mengubah permission database atau directory lain secara membabi buta. Permission yang salah hanya menambah satu masalah baru untuk menemani masalah lama.

## File Hasil Generate Hilang

Jika file DOCX hasil generate tidak tersedia:

1. Pastikan proses generate berhasil.
2. Periksa directory `storage/`.
3. Periksa log aplikasi:
   ```bash
   docker logs laravel-sistem-desa
   ```
4. Jika proses generate menggunakan queue, periksa:
   ```bash
   docker logs laravel-sistem-desa-queue
   ```

Lihat [Template dan Generate](../troubleshooting/template/) untuk masalah placeholder atau proses generate.
