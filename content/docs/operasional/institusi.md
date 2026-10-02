---
title: "Institusi"
weight: 25
---

# Institusi

Menu **Institusi** digunakan untuk mengelola data institusi yang dapat menjadi sumber data saat membuat surat.

{{< image src="images/operasional/institution-list.png" >}}

Data institusi yang tersimpan dapat digunakan oleh jenis surat yang membutuhkan data source `institution`.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik institusi |
| `name` | ✗ | Nama institusi |
| `npsn` | ✓ | Nomor Pokok Sekolah Nasional (NPSN) |
| `npwp` | ✓ | Nomor Pokok Wajib Pajak (NPWP) |
| `address` | ✓ | Alamat institusi |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.

Form institusi:

{{< image src="images/operasional/institution-form.png" >}}

Institusi hanya dapat dibuat jika belum ada data institusi. Setelah satu institusi tersimpan, data tersebut dikelola sebagai satu-satunya institusi.

Detail institusi:

{{< image src="images/operasional/institution-view.png" >}}
