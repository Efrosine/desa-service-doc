---
title: "Permintaan Surat"
weight: 29
---

# Permintaan Surat

Menu **Permohonan Surat** menyimpan permintaan pembuatan surat berdasarkan jenis surat dan template yang aktif.

{{< image src="images/operasional/letter-request-list.png" >}}

Saat membuat permintaan, sistem:

1. Memilih template aktif berdasarkan jenis surat.
2. Menentukan jumlah resident yang dibutuhkan dari `additional_residents`.
3. Memvalidasi resident yang dipilih dan memastikan tidak ada resident yang sama dipilih dua kali.
4. Menyimpan ID resident dan family yang terkait.
5. Menyimpan snapshot data resident, family, dan institution jika sumber data tersebut digunakan.
6. Menyimpan data form tambahan dari template.
7. Menyimpan pengguna yang membuat permintaan.

Form permintaan surat:

{{< image src="images/operasional/letter-request-form.png" >}}

Saat mengedit permintaan, sistem kembali memvalidasi resident dan template, menyaring `form_data` berdasarkan `form_schema`, memperbarui snapshot, lalu menghasilkan ulang dokumen.

## Struktur Data

| Nama field | Nullable | Deskripsi |
| --- | :---: | --- |
| `id` | S | ID unik permintaan surat |
| `letter_type_id` | ✓ | ID jenis surat |
| `letter_template_id` | ✓ | ID template surat yang digunakan |
| `family_id` | ✗ | Array ID family yang terkait dengan resident yang dipilih |
| `resident_id` | ✗ | Array ID resident yang dipilih |
| `resident_snapshot` | ✓ | Snapshot data resident saat permintaan dibuat atau diperbarui |
| `family_snapshot` | ✓ | Snapshot data family saat permintaan dibuat atau diperbarui |
| `institution_snapshot` | ✓ | Snapshot data institution jika jenis surat menggunakan sumber data institution |
| `form_data` | ✓ | Data tambahan yang diisi pada form dinamis template |
| `generated_file_path` | ✓ | Lokasi file surat yang telah dihasilkan |
| `generated_content_hash` | ✓ | Hash isi dokumen yang dihasilkan untuk mendeteksi perubahan isi |
| `created_by` | ✗ | ID user yang membuat permintaan |
| `created_at` | ✗ | Waktu data dibuat |
| `updated_at` | ✗ | Waktu data terakhir diperbarui |

> **Keterangan:**
> - ✓ = field dapat bernilai `NULL`.
> - ✗ = field tidak dapat bernilai `NULL`.
> - S = field dikelola oleh system dan diisi secara otomatis.

## Struktur JSON

### `resident_id` dan `family_id`

Kedua field disimpan sebagai array ID. Urutan resident menentukan posisi snapshot dan placeholder resident pada dokumen.

Contoh:

```json
{
  "resident_id": [12, 27],
  "family_id": [4, 4]
}
```

Resident pertama menjadi `resident_1`, resident kedua menjadi `resident_2`.

### `resident_snapshot`

Snapshot menyimpan data resident berdasarkan posisi resident ketika permintaan diproses.

```json
{
  "resident_1": {
    "id": 12,
    "name": "Budi Santoso"
  },
  "resident_2": {
    "id": 27,
    "name": "Siti Aminah"
  }
}
```

### `family_snapshot`

Strukturnya mengikuti posisi resident sehingga setiap resident dapat memiliki snapshot family masing-masing.

```json
{
  "resident_1": {
    "id": 4,
    "kk_number": "1234567890123456"
  },
  "resident_2": {
    "id": 4,
    "kk_number": "1234567890123456"
  }
}
```

### `institution_snapshot`

Jika jenis surat menggunakan data source `institution`, data institution yang dipilih disalin ke snapshot.

```json
{
  "id": 3,
  "name": "SMA Negeri 1 Contoh",
  "npsn": "12345678"
}
```

Jika jenis surat tidak menggunakan institution, nilai snapshot tidak diisi.

### `form_data`

`form_data` berisi nilai field dinamis yang didefinisikan oleh `form_schema` pada template.

```json
{
  "keperluan": "Pengajuan administrasi",
  "tanggal_berlaku": "2026-09-25"
}
```

Saat edit, sistem mengambil nama field dari `form_schema` dan hanya mempertahankan field tersebut di `form_data`.

Detail permintaan surat:

{{< image src="images/operasional/letter-request-view.png" >}}
