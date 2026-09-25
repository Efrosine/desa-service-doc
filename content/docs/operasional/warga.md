---
title: "Warga"
weight: 23
---

# Warga

Menu **Data Penduduk → Semua Warga** mengelola resident.

Resident terhubung ke family dan menjadi sumber data otomatis surat.

Saat membuat request, sistem memvalidasi jumlah resident, keunikan resident, dan ketersediaan resident.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` |  | ID unik resident |
| `family_id` |  | ID keluarga yang menaungi resident |
| `nik` |  | Nomor Induk Kependudukan (NIK) |
| `name` |  | Nama lengkap resident |
| `relationship` | ✓ | Hubungan resident dengan keluarga |
| `birth_place` | ✓ | Tempat lahir |
| `birth_date` | ✓ | Tanggal lahir |
| `gender` | ✓ | Jenis kelamin |
| `religion` | ✓ | Agama |
| `marital_status` | ✓ | Status perkawinan |
| `occupation` | ✓ | Pekerjaan |
| `education` | ✓ | Pendidikan |
| `created_at` |  | Waktu data dibuat |
| `updated_at` |  | Waktu data terakhir diperbarui |

> **Nullable:** kolom bertanda ✓ dapat bernilai `NULL`.
