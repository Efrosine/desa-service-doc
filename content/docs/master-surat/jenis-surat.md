---
title: "Jenis Surat"
weight: 31
---

# Jenis Surat

Jenis surat menentukan layanan surat yang tersedia.

Pilihan ditampilkan sebagai `CODE - Nama`. Hanya jenis surat aktif yang dapat dipilih pada Letter Request.

## Additional residents

Jumlah resident wajib: `1 + additional_residents`. Jika `additional_residents = 2`, request membutuhkan 3 resident dan semuanya harus unik.

## Penghapusan

Letter Request lama tetap ada. Jika jenis surat dihapus, `letter_type_id` dapat menjadi `NULL` dan daftar request menampilkan **Jenis surat tidak tersedia**.