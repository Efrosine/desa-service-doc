---
title: "Template Surat"
weight: 28
---

# Template Surat

Template Surat menentukan **bagaimana dokumen untuk suatu jenis surat dibuat**.

Template dikelola dari halaman **Jenis Surat** melalui relasi **Template Surat**. Satu jenis surat dapat memiliki beberapa template untuk mendukung versioning tanpa mengubah definisi jenis surat.

{{< image src="letter-template-list.png" >}}

Secara konseptual:

```text
Jenis Surat
    │
    ├── Template v1
    ├── Template v2
    └── Template v3
          │
          ├── File DOCX
          └── Form Schema
```

## Fungsi

Template digunakan untuk:

- menyimpan file DOCX yang menjadi dasar dokumen;
- menyimpan nomor versi template;
- menentukan template mana yang aktif;
- mendefinisikan field form tambahan melalui `form_schema`;
- menghubungkan field form dengan dynamic placeholder pada DOCX.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik template |
| `letter_type_id` | ✗ | ID jenis surat yang menggunakan template |
| `name` | ✗ | Nama template |
| `version` | ✗ | Nomor versi template |
| `file_path` | ✗ | Lokasi file template DOCX |
| `form_schema` | ✓ | Definisi field form tambahan |
| `is_active` | ✗ | Menentukan apakah template aktif |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.

## Versioning

Setiap template memiliki nomor `version`. Ketika template baru dibuat, versi berikutnya ditentukan berdasarkan versi template yang sudah ada.

Contoh:

```text
Surat Keterangan Usaha
├── v1
├── v2
└── v3
```

Versioning memungkinkan template lama tetap tersimpan ketika format dokumen diperbarui.

## Template Aktif

Satu jenis surat hanya memiliki satu template aktif pada satu waktu.

Saat template baru diaktifkan:

1. Template tersebut menjadi template aktif.
2. Template aktif sebelumnya dinonaktifkan.
3. Permintaan surat berikutnya menggunakan template yang aktif.

Template pertama yang dibuat untuk suatu jenis surat akan menjadi aktif apabila belum ada template aktif.

### Menghapus Template Aktif

Jika template aktif dihapus, sistem memilih template dengan versi tertinggi yang masih tersedia sebagai pengganti.

Jika tidak ada template lain, jenis surat dibiarkan tanpa template aktif.

Template aktif terakhir juga tidak dapat dinonaktifkan secara langsung tanpa mengaktifkan template lain terlebih dahulu.

## File DOCX

Setiap template memiliki satu file DOCX sebagai sumber dokumen.

File tersebut berisi placeholder yang akan diganti ketika surat dibuat.

Placeholder dibagi menjadi:

- **System placeholder**, seperti data resident, family, institution, dan system.
- **Dynamic placeholder**, yang berasal dari `form_schema`.

Detail placeholder dijelaskan pada [Panduan Template DOCX](../template-docx/).

## Dynamic Form

`form_schema` mendefinisikan field tambahan yang ditampilkan kepada operator ketika membuat atau mengedit permintaan surat.

{{< image src="letter-template-form.png" >}}

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

Setiap field memiliki konfigurasi dasar:

| Properti | Fungsi |
| --- | --- |
| `name` | Nama field yang digunakan sebagai key pada `form_data` dan placeholder DOCX |
| `label` | Label yang ditampilkan kepada operator |
| `type` | Menentukan tipe input |
| `required` | Menentukan apakah field wajib diisi |
| `help_text` | Keterangan tambahan untuk operator |

Field dengan pilihan seperti `radio` dapat memiliki konfigurasi `options`. Field `list` dapat memiliki `fields` untuk mendefinisikan field di dalam setiap item.

## Hubungan `form_schema` dan `form_data`

Alurnya:

```text
form_schema
    ↓
Form Permintaan Surat
    ↓
form_data
    ↓
DOCX dynamic placeholder
```

Misalnya `form_schema` mendefinisikan:

```json
{
  "name": "keperluan",
  "type": "text"
}
```

maka nilai permintaan disimpan dengan key yang sama:

```json
{
  "keperluan": "Pengajuan administrasi"
}
```

Pada permintaan surat, data tersebut menjadi bagian dari `form_data`.

Saat data permintaan diedit, sistem hanya mempertahankan field yang masih terdaftar pada `form_schema` template.

## Aturan Nama Field

Nama field dynamic harus:

- dimulai dengan huruf kecil;
- hanya menggunakan huruf kecil, angka, dan underscore;
- tidak menggunakan prefix `resident.` atau `family.`;
- unik di dalam satu `form_schema`.

Contoh valid:

```text
keperluan
nama_usaha
tanggal_berlaku
jumlah_peserta
```

Nama tersebut digunakan tanpa prefix tambahan pada placeholder:

```text
${keperluan}
${nama_usaha}
${tanggal_berlaku}
```

Detail tipe field dan penggunaan placeholder dibahas pada [Dynamic Placeholder](../template-docx/dynamic-placeholder/).

## Alur Pembuatan Surat

Ketika operator membuat permintaan surat:

```text
Jenis Surat
    ↓
Template aktif
    ↓
form_schema
    ↓
Form Permintaan Surat
    ↓
form_data
    ↓
Template DOCX
    ↓
Generated Document
```

Dengan demikian, **Jenis Surat menentukan surat apa yang tersedia**, sedangkan **Template Surat menentukan dokumen dan form apa yang digunakan untuk menghasilkan surat tersebut**.
