---
title: "Queue dan Import"
weight: 62
---

# Queue dan Import

Import Data Penduduk diproses secara asynchronous melalui database queue.

Alur singkat:

`text
Upload CSV
    ↓
PopulationImport
    ↓
Database Queue
    ↓
Queue Worker
    ↓
PopulationImportService
    ↓
Validasi CSV
    ↓
Commit ke master data
`

## Memeriksa Queue

Pastikan konfigurasi berikut digunakan:

`env
QUEUE_CONNECTION=database
`

Worker yang digunakan pada deployment saat ini:

`bash
php artisan queue:work database --sleep=3 --tries=3 --timeout=300
`

Untuk Docker:

`bash
docker compose ps
docker logs laravel-sistem-desa-queue
`

Jika worker berhenti, restart dengan:

`bash
docker compose restart queue
`

## Import `pending` Terlalu Lama

Status `pending` berarti job belum selesai diproses oleh worker.

Periksa:

1. Container queue sedang berjalan.
2. `QUEUE_CONNECTION` menggunakan `database`.
3. Worker menjalankan queue `database`.
4. Log worker tidak menunjukkan error.

## Import `processing` Terlalu Lama

Status `processing` berarti worker sudah mengambil import dan proses sedang berjalan.

Periksa log worker untuk mengetahui tahap terakhir yang berhasil.

`PopulationImportService` mencatat tahap seperti:

- membuka CSV;
- membaca dan memvalidasi header;
- staging row;
- validasi lintas-row;
- menyimpan family;
- menyimpan resident;
- menentukan kepala keluarga;
- menyelesaikan import.

## Penyebab Import Gagal dari Data CSV

| Penyebab | Dampak |
| --- | --- |
| Header wajib tidak tersedia | Import gagal sebelum membaca data |
| Field wajib kosong | Row ditandai error |
| Jumlah kolom row berbeda dari header | Row ditandai error |
| NIK muncul lebih dari sekali | Row terkait ditandai error |
| Satu KK tidak memiliki tepat satu kepala keluarga | Row pada KK tersebut ditandai error |
| Data keluarga dalam satu KK tidak konsisten | Row pada KK tersebut ditandai error |
| Format tanggal lahir tidak valid | Processing gagal saat data resident disimpan |

Jika terdapat validation error, sistem **tidak mengubah master data**. Perbaiki CSV berdasarkan error yang ditampilkan pada **Detail Hasil Import**, kemudian lakukan import ulang.

Aturan lengkap format dan isi CSV dijelaskan pada [Import Data Penduduk](../operasional/import-penduduk/).

## Penyebab Import Gagal Saat Processing

Tidak semua `failed` disebabkan oleh isi CSV. Error juga dapat terjadi ketika sistem memproses file atau menyimpan data.

Contohnya:

- file CSV tidak dapat dibuka;
- header CSV tidak dapat dibaca;
- family yang seharusnya dibuat tidak ditemukan saat commit;
- kepala keluarga tidak ditemukan saat commit;
- exception database atau storage;
- worker berhenti atau mengalami exception.

Untuk error processing, periksa **Detail Hasil Import** dan log worker.

## Setelah Memperbaiki CSV

Gunakan pesan error sebagai acuan, perbaiki data sumber, lalu unggah kembali CSV.

Jangan hanya menghapus row yang error tanpa memahami penyebabnya. Error lintas-row seperti duplicate NIK, kepala keluarga, dan konsistensi data KK dapat melibatkan beberapa row sekaligus.

## Ringkasan Diagnosis

`text
Import pending
    → cek queue worker

Import processing terlalu lama
    → cek log worker

Import failed + error validasi
    → perbaiki CSV

Import failed + exception
    → cek Detail Hasil Import + log worker
`