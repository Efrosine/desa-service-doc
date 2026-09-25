---
title: "Riwayat dan Penghapusan Master"
weight: 44
---

# Riwayat dan Penghapusan Master

Letter Request dipertahankan sebagai riwayat. Data request tidak ikut dihapus ketika master surat yang digunakan pada saat pembuatan request dihapus.

## Letter Type Dihapus

Request tetap tersedia.

Relasi `letter_type_id` menjadi `NULL`, sehingga daftar riwayat menampilkan:

> **Jenis surat tidak tersedia**

Informasi jenis surat yang dibutuhkan untuk membaca riwayat tetap berasal dari snapshot yang disimpan pada request.

## Template Dihapus

Request juga tetap tersedia.

Relasi `letter_template_id` menjadi `NULL`, sehingga daftar riwayat menampilkan:

> **Template tidak tersedia**

Template lama tidak perlu tetap ada hanya agar riwayat request dapat dipertahankan.

## Snapshot Data Penduduk

Saat request dibuat, data resident dan family yang diperlukan disimpan sebagai snapshot.

Tujuannya adalah mempertahankan isi data yang digunakan ketika surat dibuat, meskipun data master penduduk kemudian berubah.

Contohnya, perubahan nama atau data keluarga pada master tidak seharusnya mengubah informasi resident yang tercatat pada request lama.

Dengan demikian, riwayat request bergantung pada data snapshot untuk konteks historis, bukan pada kondisi master penduduk saat ini.

## Prinsip

```text
Master saat ini
    ↓
Letter Request dibuat
    ↓
Snapshot disimpan
    ↓
Master boleh berubah / dihapus
    ↓
Riwayat request tetap dapat dibaca
```
