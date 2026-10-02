---
title: "Keluarga"
weight: 22
---

# Keluarga

Menu Keluarga mengelola unit family.

{{< image src="images/operasional/family-list.png" >}}

Informasi utama: Nomor KK, Kepala Keluarga, Jumlah Anggota, Alamat, RT, RW, Dusun, Desa/Kelurahan, Kecamatan, Kabupaten/Kota, Provinsi, Kode Pos.

Nomor KK dipakai sebagai identitas keluarga dalam proses surat. Jumlah anggota berasal dari resident yang terhubung. Form tambah atau ubah keluarga:

{{< image src="images/operasional/family-form.png" >}}

{{< image src="images/operasional/family-residents.png" >}}

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik keluarga |
| `kk_number` | ✗ | Nomor Kartu Keluarga (KK) |
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
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.

Detail keluarga dan anggota warga:

{{< image src="images/operasional/family-view.png" >}}
