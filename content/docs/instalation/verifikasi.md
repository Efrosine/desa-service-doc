---
title: "Verifikasi Instalasi"
weight: 15
---

# Verifikasi Instalasi

Lakukan verifikasi sebelum aplikasi dianggap siap digunakan.

## 1. Cek container

```bash
docker compose ps
```

Expected result:

- `laravel-sistem-desa` berstatus `Up`.
- `laravel-sistem-desa-queue` berstatus `Up`.

Jika salah satu container tidak `Up`, lanjutkan ke [Troubleshooting Container](../troubleshooting/container-real/).

## 2. Cek worker

```bash
docker logs laravel-sistem-desa-queue
```

Log tidak harus berisi pesan tertentu ketika worker sedang idle. Yang penting container tetap berjalan dan tidak terus-menerus restart.

## 3. Buka aplikasi

```text
http://localhost:8000/admin
```

## Checklist

- [ ] Web container `Up`
- [ ] Queue container `Up`
- [ ] `APP_KEY` terisi
- [ ] Migration berhasil
- [ ] Storage link tersedia
- [ ] Akun admin tersedia
- [ ] Panel `/admin` dapat dibuka
