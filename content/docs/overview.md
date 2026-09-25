---
title: "Overview"
weight: 5
---

# Overview

Desa Service adalah aplikasi Laravel yang digunakan untuk operasional data penduduk dan pembuatan surat.

## Arsitektur deployment

Pada instalasi production, komponen utama berjalan sebagai container Docker:

```text
PC Desa
  │
  └── Docker Compose
       ├── Web App
       │    └── Laravel + Filament
       └── Queue Worker
            └── Laravel Queue
       
Data persisten di host:
  ├── database/database.sqlite
  ├── storage/
  └── .env
```

Web app menangani akses aplikasi melalui port `8000`. Queue worker menjalankan pekerjaan asynchronous dari database queue.

## Prinsip instalasi

PC desa tidak perlu melakukan build source code. Instalasi production menggunakan Docker image yang sudah dibangun.

Alur umumnya:

```text
Docker Desktop
    ↓
docker compose pull
    ↓
docker compose up -d
    ↓
Inisialisasi Laravel
    ↓
Migration + akun admin
    ↓
Verifikasi
```

## Data yang harus dijaga

Data berikut berada di host dan perlu dipertahankan saat container dibuat ulang:

- `database/database.sqlite`
- `storage/`
- `.env`

Jangan menghapus data tersebut saat melakukan maintenance kecuali memang memahami dampaknya.
