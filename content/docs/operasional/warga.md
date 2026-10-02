---
title: "Warga"
weight: 23
---

# Warga

Menu **Data Penduduk → Semua Warga** mengelola resident.

{{< image src="images/operasional/resident-list.png" >}}

Resident terhubung ke family dan menjadi sumber data otomatis surat.

Saat membuat request, sistem memvalidasi jumlah resident, keunikan resident, dan ketersediaan resident.

Form tambah atau ubah warga:

{{< image src="images/operasional/resident-form.png" >}}

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik resident |
| `family_id` | ✗ | ID keluarga yang menaungi resident |
| `nik` | ✗ | Nomor Induk Kependudukan (NIK) |
| `name` | ✗ | Nama lengkap resident |
| `relationship` | ✓ | Hubungan resident dengan keluarga |
| `birth_place` | ✓ | Tempat lahir |
| `birth_date` | ✓ | Tanggal lahir |
| `gender` | ✓ | Jenis kelamin |
| `religion` | ✓ | Agama |
| `marital_status` | ✓ | Status perkawinan |
| `occupation` | ✓ | Pekerjaan |
| `education` | ✓ | Pendidikan |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.

Detail warga:

{{< image src="images/operasional/resident-view.png" >}}
