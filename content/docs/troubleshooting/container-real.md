---
title: "Container"
weight: 51
---

# Troubleshooting Container

Gunakan halaman ini ketika web app atau queue worker tidak berjalan normal.

## 1. Cek status

```bash
docker compose ps
```

Jika container berstatus `Up`, lanjutkan ke pengecekan aplikasi. Jika `Exited` atau terus restart, lanjutkan ke log.

## 2. Baca log container

Web app:

```bash
docker logs laravel-sistem-desa
```

Queue worker:

```bash
docker logs laravel-sistem-desa-queue
```

Cari error terakhir yang muncul sebelum container berhenti.

## 3. Container berhenti setelah start

Periksa:

- File `.env` tersedia dan dapat dibaca container.
- `database/database.sqlite` tersedia.
- Directory `storage/` tersedia dan writable.
- Image yang digunakan sesuai dengan release aplikasi.
- Tidak ada error Laravel pada log.

Setelah memperbaiki penyebab:

```bash
docker compose up -d
docker compose ps
```

## 4. Queue worker tidak berjalan

Pastikan container queue berstatus `Up`:

```bash
docker compose ps
```

Kemudian cek:

```bash
docker logs laravel-sistem-desa-queue
```

Jika worker berhenti karena error aplikasi, perbaiki error tersebut terlebih dahulu. Jangan menjalankan worker manual sebagai pengganti container secara permanen.

## 5. Aplikasi tidak dapat dibuka

Periksa urutan berikut:

```text
Container Up?
  └─ Tidak → cek docker logs
  └─ Ya
      ↓
Port 8000 dapat diakses?
  └─ Tidak → cek port mapping dan Docker Desktop
  └─ Ya
      ↓
Laravel error?
  └─ Ya → cek log aplikasi
  └─ Tidak → lanjutkan pemeriksaan halaman/admin
```
