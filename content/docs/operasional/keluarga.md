---
title: "Keluarga"
weight: 22
---

# Keluarga

Menu Keluarga mengelola unit family.

Informasi utama: Nomor KK, Kepala Keluarga, Jumlah Anggota, Alamat, RT, RW, Dusun, Desa/Kelurahan, Kecamatan, Kabupaten/Kota, Provinsi, Kode Pos.

Nomor KK dipakai sebagai identitas keluarga dalam proses surat. Jumlah anggota berasal dari resident yang terhubung.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` |  | ID unik keluarga |
| `kk_number` |  | Nomor Kartu Keluarga (KK) |
| `head_resident_id` | ✓ | ID resident yang menjadi kepala keluarga |
| `address` | ✓ | Alamat keluarga |
| `rt` | ✓ | Nomor Rukun Tetangga (RT) |
| `rw` | ✓ | Nomor Rukun Warga (RW) |
| `dusun` | ✓ | Nama dusun |
| `postal_code` | ✓ | Kode pos |
| `village` | ✓ | Desa atau kelurahan |
| `district` | ✓ | Kecamatan |
| `regency` | ✓ | Kabupaten atau kota |
| `province` | ✓ | Provinsi |
| `created_at` |  | Waktu data dibuat |
| `updated_at` |  | Waktu data terakhir diperbarui |

> **Nullable:** kolom bertanda ✓ dapat bernilai `NULL`.
