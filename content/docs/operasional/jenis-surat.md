---
title: "Jenis Surat"
weight: 26
---

# Jenis Surat

Menu **Master Surat → Jenis Surat** digunakan untuk mengelola jenis surat yang dapat dibuat oleh operator.

Jenis surat menentukan nama dan kode surat, jumlah penduduk tambahan yang diperlukan, sumber data yang digunakan, serta status aktif. Setiap jenis surat dapat memiliki beberapa versi template.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik jenis surat |
| `code` | ✗ | Kode unik jenis surat |
| `name` | ✗ | Nama jenis surat |
| `description` | ✓ | Deskripsi jenis surat |
| `additional_residents` | ✗ | Jumlah resident tambahan yang diperlukan selain resident utama |
| `data_sources` | ✓ | Daftar sumber data yang digunakan oleh jenis surat, misalnya `institution` |
| `is_active` | ✗ | Menentukan apakah jenis surat dapat digunakan |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

### JSON `data_sources`

Field `data_sources` disimpan sebagai array JSON. Kode aplikasi menggunakannya untuk menentukan apakah sumber data tertentu diperlukan ketika membuat permintaan surat.

Contoh:

```json
[
  "institution"
]
```

Jika jenis surat tidak menggunakan sumber data tambahan, array dapat kosong.

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.
