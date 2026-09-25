---
title: "System Placeholder"
weight: 51
---

---

title: "System Placeholder"
weight: 51
----------

# System Placeholder

Placeholder berikut disediakan otomatis oleh **LetterGenerator** ketika template DOCX diproses.

Gunakan format:

```text
${nama_placeholder}
```

## System

```text
${system.date}
${system.age}
```

* `system.date`: tanggal saat surat dibuat, dengan format tanggal Indonesia.
* `system.age`: usia resident utama berdasarkan tanggal lahir.

## Resident

Resident pertama menggunakan prefix `resident_1`. Resident berikutnya mengikuti urutan snapshot, misalnya `resident_2`, `resident_3`, dan seterusnya.

```text
${resident_1.name}
${resident_1.nik}
${resident_1.birth_place}
${resident_1.birth_date}
${resident_1.age}
${resident_1.gender}
${resident_1.religion}
${resident_1.marital_status}
${resident_1.occupation}
${resident_1.education}
${resident_1.relationship}
```

## Family

Family menggunakan prefix yang mengikuti resident. Resident `resident_1` menggunakan family `family_1`, resident `resident_2` menggunakan `family_2`, dan seterusnya.

```text
${family_1.kk_number}
${family_1.address}
${family_1.rt}
${family_1.rw}
${family_1.dusun}
${family_1.village}
${family_1.district}
${family_1.regency}
${family_1.province}
${family_1.postal_code}
${family_1.full_address}
```

`family_n.full_address` merupakan gabungan alamat, RT, dan RW.

## Institution

Placeholder institution hanya tersedia jika jenis surat menggunakan data source `institution`.

```text
${institution.name}
${institution.npsn}
${institution.npwp}
${institution.address}
```

## Catatan

* Placeholder resident dan family mengikuti data snapshot pada `LetterRequest`.
* `resident_n` dan `family_n` mengikuti urutan data, sehingga template dapat menggunakan resident tambahan sesuai jumlah yang diperlukan oleh jenis surat.
* Nilai yang tidak tersedia akan menghasilkan string kosong.
* Array biasa akan dinormalisasi menjadi teks yang dipisahkan koma.
* Nilai boolean akan ditampilkan sebagai "Ya" atau "Tidak".
