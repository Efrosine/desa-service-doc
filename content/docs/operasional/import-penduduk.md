---
title: "Import Data Penduduk"
weight: 24
---

# Import Data Penduduk

Import menggunakan file CSV dan diproses asynchronous melalui database queue.

## Kolom Template

File CSV menggunakan satu baris header dan satu baris untuk setiap resident.

Kolom yang didukung:

1. No. KK
2. NIK
3. Nama
4. Jenis Kelamin
5. Tempat Lahir
6. Tanggal Lahir
7. Golongan Darah
8. Agama
9. Status Perkawinan
10. Status Hubungan Dalam Keluarga
11. Pendidikan
12. Pekerjaan
13. Nama Ibu
14. Nama Ayah
15. Alamat Jalan
16. RT
17. RW
18. Dusun
19. Desa/Kelurahan
20. Kecamatan
21. Kabupaten/Kota
22. Provinsi
23. Kode Pos
24. No. Telepon

Sistem melakukan normalisasi nama header, sehingga beberapa nama alternatif yang setara dapat digunakan. Namun, empat kolom berikut wajib tersedia:

- `No. KK`
`text
YYYY-MM-DD
DD/MM/YYYY
DD-MM-YYYY
YYYY/MM/DD
`

## Aturan Data CSV

### Field Wajib

Setiap baris data harus memiliki:

- Nomor KK.
- NIK.
- Nama.
- Status Hubungan Dalam Keluarga.

Baris kosong akan dilewati.

### Format Tanggal Lahir

`Tanggal Lahir` dapat menggunakan salah satu format berikut:

`
YYYY-MM-DD
DD/MM/YYYY
DD-MM-YYYY
YYYY/MM/DD
`bt

Nilai tanggal yang tidak dapat diparse akan menyebabkan import gagal.

### Aturan NIK

NIK tidak boleh muncul lebih dari satu kali dalam file CSV.

Jika satu NIK ditemukan pada beberapa baris, seluruh import dibatalkan dan baris terkait ditandai sebagai error.

### Aturan Kepala Keluarga

Setiap nomor KK harus memiliki tepat satu anggota dengan status hubungan:

`Kepala Keluarga`

atau:

`Kepala Keluarga (KK)`

KK tanpa kepala keluarga atau dengan lebih dari satu kepala keluarga akan menyebabkan validasi gagal.

### Konsistensi Data Keluarga

Semua baris dengan nomor KK yang sama harus memiliki data keluarga yang konsisten.

Data yang dibandingkan meliputi:

- Alamat Jalan
- RT
- RW
- Dusun
- Desa/Kelurahan
- Kecamatan
- Kabupaten/Kota
- Provinsi
- Kode Pos

Perbedaan data keluarga pada KK yang sama menyebabkan validasi gagal.

### Struktur CSV

Setiap baris harus memiliki jumlah kolom yang sama dengan header CSV.

Jika jumlah kolom berbeda, baris tersebut ditandai sebagai error.

Gunakan file CSV dengan delimiter koma (`,`). Pastikan nilai yang mengandung koma atau karakter khusus tetap dibungkus dengan format CSV yang valid.

## Alur

1. Klik **Import Data Penduduk**.
2. Pilih CSV.
3. Sistem membuat record import.
4. Job masuk queue.
5. Worker memproses file.
6. Periksa **Detail Hasil Import**.

Selama proses:

- `pending` berarti import menunggu diproses worker.
- `processing` berarti worker sedang memproses import.
- `completed` berarti seluruh data berhasil divalidasi dan disimpan.

Import yang gagal karena validasi CSV tidak mengubah master data. Error disimpan pada hasil import agar dapat diperbaiki sebelum file diunggah kembali.

Untuk masalah queue, worker, dan penyebab import gagal, lihat [Troubleshooting Queue dan Import](../troubleshooting/queue/).

## Status dan Troubleshooting

Jika import berstatus `pending` atau `processing` terlalu lama, periksa container queue dan worker.

Jika import berstatus `failed`, buka **Detail Hasil Import** terlebih dahulu untuk melihat pesan error. Untuk diagnosis queue atau error saat processing, lihat [Troubleshooting Queue dan Import](../troubleshooting/queue/).