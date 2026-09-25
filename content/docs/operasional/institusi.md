---
title: "Institusi"
weight: 24
---

# Institusi

Menu **Institusi** digunakan untuk mengelola data institusi yang dapat menjadi sumber data saat membuat surat.

Data institusi yang tersimpan dapat digunakan oleh jenis surat yang membutuhkan data source `institution`.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` |  | ID unik institusi |
| `name` |  | Nama institusi |
| `npsn` | ✓ | Nomor Pokok Sekolah Nasional (NPSN) |
| `npwp` | ✓ | Nomor Pokok Wajib Pajak (NPWP) |
| `address` | ✓ | Alamat institusi |
| `created_at` |  | Waktu data dibuat |
| `updated_at` |  | Waktu data terakhir diperbarui |

> **Nullable:** kolom bertanda ✓ dapat bernilai `NULL`.
