---
title: "Template Surat"
weight: 27
---

# Template Surat

Menu **Master Surat → Jenis Surat** juga mengelola template yang digunakan untuk menghasilkan dokumen surat.

Satu jenis surat dapat memiliki beberapa template berdasarkan versi. Template aktif dengan versi terbaru digunakan ketika permintaan surat dibuat jika tidak ada template lain yang dipilih secara eksplisit.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik template |
| `letter_type_id` | ✗ | ID jenis surat yang menggunakan template |
| `name` | ✗ | Nama template |
| `version` | ✗ | Nomor versi template |
| `file_path` | ✗ | Lokasi file template DOCX |
| `form_schema` | ✓ | Definisi field form tambahan yang digunakan saat membuat surat |
| `is_active` | ✗ | Menentukan apakah template aktif |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

## JSON `form_schema`

`form_schema` disimpan sebagai array. Setiap item mendefinisikan satu field form yang akan ditampilkan ketika membuat atau mengedit permintaan surat.

Contoh:

```json
[
  {
    "name": "keperluan",
    "label": "Keperluan",
    "type": "text",
    "required": true,
    "help_text": "Keperluan surat."
  },
  {
    "name": "tanggal_berlaku",
    "label": "Tanggal Berlaku",
    "type": "date",
    "required": true,
    "help_text": "Tanggal berlaku surat."
  }
]
```

Nilai `name` menjadi nama field yang digunakan di `form_data` pada permintaan surat. Saat menyimpan perubahan, sistem hanya mempertahankan `form_data` yang memiliki nama field yang terdaftar pada `form_schema`.

Template juga dapat mendefinisikan field bertipe list yang memiliki `fields` sendiri.

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.
