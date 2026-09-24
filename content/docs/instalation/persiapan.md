---
title: "Persiapan PC"
weight: 11
---

# Persiapan PC

Prasyarat: Docker Desktop, koneksi internet saat instalasi/update, PowerShell atau Command Prompt, dan ruang penyimpanan.

Contoh folder:
~~~text
E:\desa-service
├── storage\
├── database\
│   └── database.sqlite
├── docker-compose.yml
└── .env
~~~

Buat `database.sqlite` sebagai file kosong. Pastikan bukan `database.sqlite.txt`.

Bind mount membuat database dan storage tetap berada di PC desa: `database/database.sqlite`, `storage/`, dan `.env`.