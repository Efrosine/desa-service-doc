---
title: "Jenis Surat"
weight: 27
---

# Jenis Surat

Menu **Master Surat → Jenis Surat** digunakan untuk mendefinisikan surat yang dapat dibuat oleh operator.

{{< image src="images/operasional/letter-type-list.png" >}}

Jenis surat menentukan identitas dan aturan dasar surat. Template yang digunakan untuk menghasilkan dokumen dikelola sebagai bagian dari jenis surat.

Secara konseptual:

```text
Jenis Surat
├── Identitas surat
├── Sumber data
├── Kebutuhan resident
└── Template Surat
    ├── Versi 1
    ├── Versi 2
    └── ...
```

## Fungsi

Jenis surat digunakan untuk:

- menentukan kode dan nama surat;
- menentukan data yang diperlukan oleh surat;
- menentukan jumlah resident yang dapat digunakan;
- menentukan apakah sumber data tambahan seperti `institution` digunakan;
- mengelola beberapa versi template untuk satu jenis surat;
- mengaktifkan atau menonaktifkan surat agar dapat digunakan dalam permintaan.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik jenis surat |
| `code` | ✗ | Kode unik jenis surat |
| `name` | ✗ | Nama jenis surat |
| `description` | ✓ | Deskripsi jenis surat |
| `additional_residents` | ✗ | Jumlah resident tambahan yang diperlukan selain resident utama |
| `data_sources` | ✓ | Daftar sumber data yang digunakan oleh jenis surat |
| `is_active` | ✗ | Menentukan apakah jenis surat dapat digunakan |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.

Form tambah atau ubah jenis surat:

{{< image src="images/operasional/letter-type-form.png" >}}

## Konfigurasi Resident

Resident utama selalu menjadi resident pertama dalam permintaan surat.

Field `additional_residents` menentukan jumlah resident tambahan yang diperlukan.

Contoh:

```json
{
  "additional_residents": 2
}
```

Konfigurasi tersebut berarti satu resident utama ditambah dua resident tambahan, sehingga permintaan membutuhkan tiga resident.

Untuk aturan penomoran dan penggunaan placeholder resident, lihat [Multiple Resident](../multiple-resident/).

## Sumber Data

Field `data_sources` menyimpan daftar sumber data yang diperlukan oleh jenis surat.

Contoh:

```json
[
  "institution"
]
```

Sumber data digunakan saat permintaan surat dibuat. Jika jenis surat menggunakan `institution`, sistem menyediakan snapshot institution dan placeholder `institution.*` untuk proses pembuatan dokumen.

Jika tidak ada sumber data tambahan, array dapat kosong.

Detail placeholder institution dijelaskan pada [System Placeholder](../system-placeholder/).

## Template Surat

Satu jenis surat dapat memiliki beberapa template.

```text
Jenis Surat
    │
    ├── Template v1
    ├── Template v2
    └── Template v3
```

Template menyimpan file DOCX, versi, status aktif, dan konfigurasi dynamic form.

Lihat [Template Surat](../template-surat/) untuk detail pengelolaan template.

## Status Aktif

Jenis surat hanya dapat digunakan ketika `is_active` bernilai aktif.

Status ini berbeda dengan status template:

- **Jenis Surat aktif** menentukan apakah jenis surat tersedia untuk digunakan.
- **Template aktif** menentukan template yang digunakan untuk menghasilkan dokumen.

Sebuah jenis surat dapat tetap ada tanpa template aktif, misalnya setelah seluruh template dihapus.

Detail jenis surat:

{{< image src="images/operasional/letter-type-view.png" >}}

## Hubungan dengan Permintaan Surat

Ketika operator membuat permintaan:

```text
Jenis Surat
    ↓
Template aktif
    ↓
Konfigurasi resident + data source
    ↓
Form permintaan
    ↓
Permintaan Surat
```

Jenis surat menyediakan aturan dasar, sedangkan template menentukan struktur dokumen dan field form tambahan.

## Catatan

- `code` digunakan sebagai identitas kode surat dan harus unik.
- `additional_residents` tidak termasuk resident utama.
- Resident tambahan mengikuti urutan resident dalam permintaan.
- `data_sources` menggunakan array JSON.
- Satu jenis surat dapat memiliki beberapa template dan hanya satu template yang aktif pada satu waktu.
