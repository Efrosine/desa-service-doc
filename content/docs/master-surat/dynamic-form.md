---
title: "Dynamic Form"
weight: 33
---

# Dynamic Form

Dynamic Form menentukan field tambahan pada Letter Request.

Field dapat memiliki `name`, `label`, `type`, `required`, `help_text`, `options`, dan `fields` untuk list.

## Tipe

| Type | Fungsi |
|---|---|
| `text` | Teks |
| `number` | Angka |
| `day` | Hari/tanggal |
| `date` | Tanggal |
| `time` | Waktu |
| `radio` | Pilihan |
| `list` | Data berulang |

Dynamic field menggunakan nama langsung, misalnya `nama_usaha`. Jangan memakai `form.nama_usaha`.

`list` memiliki child field dan dapat diisi beberapa item. Child date/time mendukung mulai dan selesai.