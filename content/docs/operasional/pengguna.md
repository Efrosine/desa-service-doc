---
title: "Pengguna"
weight: 26
---

# Pengguna

Menu **Pengguna** mengelola akun yang dapat mengakses panel administrasi aplikasi.

Pengguna memiliki nama, email, dan password. Password disimpan dalam bentuk hash dan tidak ditampilkan sebagai data biasa.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik pengguna |
| `name` | ✗ | Nama pengguna |
| `email` | ✗ | Alamat email pengguna |
| `email_verified_at` | ✓ | Waktu email pengguna diverifikasi |
| `password` | ✗ | Password pengguna yang disimpan dalam bentuk hash |
| `remember_token` | ✓ | Token yang digunakan untuk fitur remember me |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.

## Tampilan

Daftar pengguna:

{{< image src="user-list.png" >}}

Form tambah atau ubah pengguna:

{{< image src="user-form.png" >}}

Detail pengguna:

{{< image src="user-view.png" >}}
