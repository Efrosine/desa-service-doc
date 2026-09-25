---
layout: landing
---


# Desa Service
{{< image src="landingpage.png" >}}

**Sistem administrasi desa untuk mengelola data penduduk dan membuat surat secara terstruktur.**

Desa Service membantu operator desa mengelola data penduduk, keluarga, jenis surat, template DOCX, dan proses pembuatan surat dari satu aplikasi.

[Mulai Instalasi](docs/instalation/) · [Lihat Dokumentasi](docs/)

## Untuk Operator Desa

Kelola kebutuhan administrasi sehari-hari tanpa harus berurusan dengan source code.

- Kelola data penduduk dan keluarga
- Import data penduduk
- Kelola jenis surat
- Gunakan template DOCX
- Buat dan generate surat

[Mulai dari Dokumentasi Operasional](docs/operasional/)

## Untuk Administrator

Instalasi production menggunakan Docker sehingga PC desa tidak perlu melakukan build aplikasi.

```text
Docker Desktop
      ↓
Docker Compose
      ↓
Laravel + Filament
      ↓
Database + Storage + Queue
```

[Pelajari Instalasi](docs/instalation/) · [Lihat Arsitektur](docs/overview/)

## Template DOCX

Surat dapat menggunakan template DOCX dengan placeholder data penduduk, keluarga, dan data tambahan dari form.

Contoh:

```text
${resident_1.name}
${resident_1.nik}
${family_1.address}
```

Resident tambahan dapat digunakan dengan pola `resident_n`, sampai `resident_5`.

[Lihat Referensi Placeholder](docs/template-docx/placeholder-resident-family/)

## Dokumentasi

| Bagian | Isi |
| --- | --- |
| [Overview](docs/overview/) | Gambaran aplikasi dan arsitektur deployment |
| [Instalasi](docs/instalation/) | Persiapan, Docker, konfigurasi, dan inisialisasi |
| [Operasional](docs/operasional/) | Pengelolaan data penduduk dan penggunaan aplikasi |
| [Template DOCX](docs/template-docx/) | Template dan placeholder surat |
| [Troubleshooting](docs/troubleshooting/) | Diagnosis dan penanganan masalah |

## Versi Dokumentasi

Dokumentasi deployment mengikuti implementasi aplikasi pada branch `dev`. Untuk instalasi production, gunakan image release yang sesuai dengan versi aplikasi yang sedang dipasang.

Jika dokumentasi dan perilaku aplikasi berbeda, verifikasi versi image yang digunakan sebelum mengikuti langkah migrasi atau konfigurasi.
