---
title: "Dynamic Placeholder"
weight: 52
---

# Dynamic Placeholder

Dynamic placeholder berasal dari field yang didefinisikan pada `form_schema` template surat.

Nama placeholder harus sama persis dengan nilai `name` pada field.

Misalnya:

```json
{
  "name": "nama_usaha",
  "label": "Nama Usaha",
  "type": "text"
}
```

Gunakan placeholder berikut pada DOCX:

```text
${nama_usaha}
```

Jangan menggunakan prefix seperti `${form.nama_usaha}`.

Sistem hanya menyimpan `form_data` untuk field yang namanya terdapat di `form_schema`.

## Tipe Field

Template surat mendukung tipe berikut:

| Tipe | Nilai `form_data` | Placeholder / Block |
| --- | --- | --- |
| `text` | String | Placeholder biasa |
| `number` | Angka | Placeholder biasa |
| `day` | Rentang tanggal | Placeholder biasa |
| `date` | Rentang tanggal | Placeholder biasa |
| `time` | Rentang waktu | Placeholder biasa |
| `radio` | Nilai pilihan | Placeholder biasa |
| `list` | Array item | DOCX block |

### Text

Tipe `text` menyimpan nilai teks biasa.

Contoh:

```json
{
  "name": "nama_usaha",
  "type": "text"
}
```

Data:

```json
{
  "nama_usaha": "Toko Maju Jaya"
}
```

Placeholder:

```text
${nama_usaha}
```

### Number

Tipe `number` menyimpan nilai numerik.

Contoh:

```json
{
  "name": "jumlah_karyawan",
  "type": "number"
}
```

Data:

```json
{
  "jumlah_karyawan": 12
}
```

Placeholder:

```text
${jumlah_karyawan}
```

Nilai akan dikonversi menjadi teks ketika dimasukkan ke DOCX.

### Day

Tipe `day` digunakan untuk hari atau rentang hari. Form menyimpan nilai dalam bentuk `start` dan `end`.

Contoh:

```json
{
  "hari_kegiatan": {
    "start": "2026-09-28",
    "end": "2026-09-30"
  }
}
```

Placeholder:

```text
${hari_kegiatan}
```

Hasilnya:

```text
Senin - Rabu
```

Jika hanya `start` yang diisi, hasilnya hanya menampilkan hari tersebut.

### Date

Tipe `date` memiliki struktur yang sama dengan `day`, tetapi hasilnya berupa tanggal dalam format Indonesia.

Contoh:

```json
{
  "tanggal_kegiatan": {
    "start": "2026-09-28",
    "end": "2026-09-30"
  }
}
```

Placeholder:

```text
${tanggal_kegiatan}
```

Hasil:

```text
28 - 30 September 2026
```

Jika rentang melewati bulan atau tahun, generator akan menampilkan bulan atau tahun yang diperlukan.

### Time

Tipe `time` digunakan untuk waktu atau rentang waktu.

Contoh:

```json
{
  "waktu_kegiatan": {
    "start": "08:00",
    "end": "12:30"
  }
}
```

Placeholder:

```text
${waktu_kegiatan}
```

Hasil:

```text
08:00 Wib - 12:30 Wib
```

Jika hanya `start` yang diisi, hanya waktu mulai yang ditampilkan.

### Radio

Tipe `radio` digunakan untuk pilihan tunggal.

Contoh schema:

```json
{
  "name": "jenis_kelamin",
  "label": "Jenis Kelamin",
  "type": "radio",
  "options": {
    "L": "Laki-laki",
    "P": "Perempuan"
  }
}
```

Data yang disimpan menggunakan nilai pilihan:

```json
{
  "jenis_kelamin": "L"
}
```

Placeholder:

```text
${jenis_kelamin}
```

Placeholder menerima nilai pilihan, bukan label pilihan.

## List

Tipe `list` digunakan untuk data berulang. Nilainya disimpan sebagai array object di dalam `form_data`.

Misalnya schema:

```json
{
  "name": "dokumen",
  "label": "Dokumen",
  "type": "list",
  "fields": [
    {
      "name": "jenis",
      "label": "Jenis Dokumen",
      "type": "text"
    },
    {
      "name": "nomor",
      "label": "Nomor",
      "type": "number"
    },
    {
      "name": "tanggal",
      "label": "Tanggal",
      "type": "date"
    }
  ]
}
```

Data:

```json
{
  "dokumen": [
    {
      "jenis": "KTP",
      "nomor": 12345,
      "tanggal": {
        "start": "2026-09-20"
      }
    },
    {
      "jenis": "KK",
      "nomor": 67890,
      "tanggal": {
        "start": "2026-09-21"
      }
    }
  ]
}
```

Field `list` tidak digunakan sebagai placeholder biasa seperti `${dokumen}`. Generator menggunakan DOCX block untuk melakukan cloning berdasarkan jumlah item.

Gunakan block:

```text
${dokumen}
Jenis: ${jenis}
Nomor: ${nomor}
Tanggal: ${tanggal}
${/dokumen}
```

Generator akan melakukan clone block untuk setiap item.

### Tipe Field di Dalam List

Field di dalam `list` mendukung:

- `text`
- `number`
- `day`
- `date`
- `time`
- `radio`

Placeholder child menggunakan nama field child secara langsung.

Contoh:

```text
${jenis}
${nomor}
${tanggal}
```

Untuk `day`, `date`, dan `time`, nilai akan diformat terlebih dahulu sebelum dimasukkan ke setiap item block.

## Aturan Placeholder

- Placeholder dynamic menggunakan format `${name}`.
- Nilai `name` harus sama persis dengan nama field pada `form_schema`.
- Jangan menggunakan prefix `form.`.
- Nama field menggunakan huruf kecil, angka, dan underscore.
- Field tidak boleh menggunakan nama yang diawali dengan `resident.` atau `family.`.
- Tipe `list` menggunakan DOCX block, bukan placeholder biasa.
- Nilai `null` akan menjadi string kosong.
- Nilai boolean akan ditampilkan sebagai `Ya` atau `Tidak`.
- Array biasa akan dinormalisasi menjadi teks yang dipisahkan koma.
