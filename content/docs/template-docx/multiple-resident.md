---
title: "Multiple Resident"
weight: 53
---

# Multiple Resident

Multiple resident digunakan ketika satu jenis surat membutuhkan data lebih dari satu resident.

Resident utama selalu menggunakan `resident_1`. Resident tambahan mengikuti urutan data yang dipilih, misalnya `resident_2`, `resident_3`, dan seterusnya.

## Kapan Menggunakan Multiple Resident

Gunakan konfigurasi ini ketika surat membutuhkan beberapa resident dalam satu permintaan.

Jumlah resident ditentukan oleh `additional_residents` pada jenis surat:

```json
{
  "additional_residents": 2
}
```

Nilai tersebut berarti satu resident utama ditambah dua resident tambahan, sehingga permintaan membutuhkan tiga resident.

> **Warning:** Sistem saat ini membatasi jumlah resident tambahan hingga **4 resident**. Dengan satu resident utama, jumlah maksimum dalam satu permintaan adalah **5 resident**, yaitu `resident_1` sampai `resident_5`.

## Cara Kerja

Alur data multiple resident:

```text
Jenis Surat
    ↓
additional_residents
    ↓
Permintaan Surat
    ↓
resident_id[]
    ↓
resident_snapshot
    ↓
LetterGenerator
    ↓
resident_1
resident_2
resident_3
...
```

`LetterGenerator` menggunakan urutan resident pada snapshot untuk menentukan nomor placeholder.

## Urutan Resident

Nomor resident mengikuti urutan resident pada permintaan, bukan ID database.

Contoh:

```json
{
  "resident_id": [12, 27, 31]
}
```

menghasilkan:

| Urutan | Placeholder | Resident ID |
| --- | --- | ---: |
| 1 | `resident_1` | 12 |
| 2 | `resident_2` | 27 |
| 3 | `resident_3` | 31 |

Karena itu, `\${resident_1.name}` selalu merujuk pada resident pertama dalam permintaan.

## Hubungan Resident dan Family

Setiap resident memiliki pasangan `family` berdasarkan posisi array. Family tidak harus unik.

Contoh:

```json
{
  "resident_id": [12, 27],
  "family_id": [4, 4]
}
```

Pemetaan menjadi:

```text
resident_1 → family_1 → family 4
resident_2 → family_2 → family 4
```

Artinya, dua resident dapat berasal dari family yang sama.

Nomor `family_n` mengikuti posisi resident, sehingga `resident_2` menggunakan `family_2` meskipun `family_2` dapat menunjuk ke family yang sama dengan `family_1`.

## Contoh

### Konfigurasi Jenis Surat

Misalnya jenis surat membutuhkan dua resident tambahan:

```json
{
  "additional_residents": 2
}
```

Total resident yang dapat dipilih untuk permintaan tersebut adalah tiga:

1. Resident utama
2. Resident tambahan pertama
3. Resident tambahan kedua

### Data Permintaan

Contoh data yang disimpan:

```json
{
  "resident_id": [12, 27, 31],
  "family_id": [4, 4, 8]
}
```

Pemetaan:

```text
resident_1 → family_1 → family 4
resident_2 → family_2 → family 4
resident_3 → family_3 → family 8
```

### Placeholder DOCX

Gunakan placeholder sesuai urutan resident:

```text
${resident_1.name}
${resident_2.name}
${resident_3.name}

${family_1.kk_number}
${family_2.kk_number}
${family_3.kk_number}
```

Daftar field yang tersedia untuk setiap resident dan family dijelaskan pada [System Placeholder](../system-placeholder/).

## Validasi

Sistem memvalidasi resident yang dipilih sebelum permintaan disimpan.

Resident yang sama tidak dapat dipilih lebih dari satu kali dalam satu permintaan.

## Catatan

- `resident_1` adalah resident utama.
- Resident tambahan dimulai dari `resident_2`.
- Penomoran mengikuti urutan resident pada permintaan.
- `family_n` mengikuti posisi resident, bukan keunikan family.
- Placeholder resident dan family menggunakan snapshot yang disimpan pada permintaan surat.
