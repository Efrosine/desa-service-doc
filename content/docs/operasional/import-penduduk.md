---
title: "Import Data Penduduk"
weight: 24
---

# Import Data Penduduk

Import menggunakan file CSV dan diproses asynchronous melalui database queue.

## Kolom template

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

## Alur

1. Klik **Import Data Penduduk**.
2. Pilih CSV.
3. Sistem membuat record import.
4. Job masuk queue.
5. Worker memproses file.
6. Periksa **Detail Hasil Import**.

Status yang digunakan: `pending`, `processing`, `completed`, `completed_with_errors`, `failed`.

Jika import pending/processing terlalu lama, periksa container queue.