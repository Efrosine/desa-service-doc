---
title: "Template dan Generate"
weight: 64
---

# Template dan Generate

Gunakan halaman ini ketika permintaan surat gagal menghasilkan dokumen atau hasil dokumen tidak sesuai.

## Placeholder Tidak Terisi

Pastikan nama placeholder sesuai dengan data yang disediakan oleh sistem.

### System Placeholder

Resident menggunakan nomor posisi:

```text
${resident_1.name}
${resident_1.nik}
${resident_2.name}
${resident_2.nik}
```

Family juga mengikuti posisi resident:

```text
${family_1.kk_number}
${family_2.kk_number}
```

Untuk data institution, placeholder hanya tersedia jika jenis surat menggunakan data source `institution`:

```text
${institution.name}
${institution.npsn}
```

Daftar lengkap tersedia pada [System Placeholder](../template-docx/system-placeholder/).

### Dynamic Placeholder

Field dari `form_schema` tidak menggunakan prefix `form.`.

Contoh:

```text
${keperluan}
${tanggal_berlaku}
```

Nama placeholder harus sama persis dengan nilai `name` pada field dynamic form.

Lihat [Dynamic Placeholder](../template-docx/dynamic-placeholder/) untuk aturan lengkap.

## Template Tidak Dapat Digunakan

Periksa:

1. Jenis surat berstatus aktif.
2. Jenis surat memiliki template aktif.
3. Template aktif memiliki file DOCX.
4. Placeholder pada DOCX sesuai dengan schema dan data yang tersedia.

Satu jenis surat hanya menggunakan satu template aktif pada satu waktu.

## Generated File Tidak Tersedia

Jika file hasil generate hilang tetapi template DOCX masih tersedia, dokumen dapat dibuat ulang dari permintaan surat.

Jika file template juga hilang, dokumen tidak dapat dibuat ulang sebelum template tersedia kembali.

Periksa [Storage dan File](../troubleshooting/storage/) jika file tidak ditemukan atau tidak dapat dibaca.

## Generate Menghasilkan Data Kosong

Jika placeholder tetap kosong:

1. Pastikan field atau data sumber memang tersedia pada permintaan.
2. Untuk resident dan family, periksa urutan resident karena nomor placeholder mengikuti posisi resident.
3. Untuk institution, pastikan jenis surat menggunakan data source `institution`.
4. Untuk dynamic field, pastikan nama field masih terdapat pada `form_schema`.
5. Periksa data hasil snapshot pada permintaan surat.

## Checklist

```text
Template aktif?
    ↓
File DOCX tersedia?
    ↓
Placeholder benar?
    ↓
Data source tersedia?
    ↓
Snapshot / form_data tersedia?
    ↓
Generated file tersedia?
```
