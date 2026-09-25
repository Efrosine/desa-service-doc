---
title: "Instalasi"
weight: 10
---

# Instalasi

Production menggunakan Docker. PC desa tidak perlu build source code.

## Alur

```text
Persiapan PC
→ Environment
→ Pull image dan Compose
→ Inisialisasi Laravel
→ Verifikasi
→ Operasional dan update
```

- [Persiapan PC](persiapan/)
- [Environment](environment/)
- [Pull image dan Compose](docker/)
- [Inisialisasi](inisialisasi/)
- [Verifikasi](verifikasi/)
- [Operasional dan update](operasional/)

> **Catatan versi:** untuk production yang membutuhkan reproducibility, lebih aman menggunakan image release yang memiliki tag versi daripada selalu menggunakan `latest`.
