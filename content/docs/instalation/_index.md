---
title: "Instalasi"
weight: 10
---

# Instalasi

Production menggunakan Docker image `efrosine/desa-service:latest`. PC desa tidak perlu build source code.

Alur:
`Docker Desktop → docker compose pull → docker compose up -d → inisialisasi Laravel → migration → akun admin`.

- [Persiapan PC](persiapan/)
- [Environment](environment/)
- [Pull image dan Compose](docker/)
- [Inisialisasi](inisialisasi/)
- [Verifikasi](verifikasi/)
- [Operasional dan update](operasional/)