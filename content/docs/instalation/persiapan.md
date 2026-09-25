---
title: "Persiapan PC"
weight: 11
---

# Persiapan PC

Sebelum melakukan instalasi, siapkan PC desa dan pastikan kebutuhan berikut tersedia.

## Persyaratan

- **Docker Desktop** sudah terpasang dan dapat menjalankan container.
- **Koneksi internet** untuk mengunduh image Docker dan melakukan instalasi atau update.
- **PowerShell** atau **Command Prompt** untuk menjalankan perintah Docker.
- **Ruang penyimpanan** yang cukup untuk image Docker, database, storage aplikasi, dan file pendukung lainnya.

## Struktur Folder

Gunakan satu folder khusus untuk menyimpan file deployment aplikasi.

Contoh:

~~~text
E:\desa-service
├── storage\
├── database\
│   └── database.sqlite
├── docker-compose.yml
└── .env
~~~

Pastikan file database dibuat sebagai file kosong dengan nama:

`database/database.sqlite`

Perhatikan ekstensi file. File harus bernama `database.sqlite`, bukan `database.sqlite.txt`.

## Data yang Dipertahankan

Deployment menggunakan bind mount agar beberapa data tetap berada di PC desa dan tidak hilang ketika container dibuat ulang.

Data yang dipertahankan:

- `database/database.sqlite` untuk database aplikasi.
- `storage/` untuk file dan data aplikasi.
- `.env` untuk konfigurasi environment.

Struktur folder dan file tersebut perlu disiapkan sebelum menjalankan Docker Compose.
