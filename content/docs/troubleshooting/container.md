---
title: "Container"
weight: 51
---

# Troubleshooting Container

Gunakan halaman ini ketika container web atau queue worker tidak berjalan normal.

## Cek Status Container

\`\`\`bash
docker compose ps
\`\`\`

Container yang digunakan:

| Container | Fungsi |
| --- | --- |
| \`laravel-sistem-desa\` | Menjalankan aplikasi Laravel dan web server. |
| \`laravel-sistem-desa-queue\` | Menjalankan queue worker untuk job asynchronous. |

Status normal adalah \`Up\`. Jika status \`Exited\` atau container terus restart, periksa log.

## Cek Log

Web:

\`\`\`bash
docker logs laravel-sistem-desa
\`\`\`

Queue:

\`\`\`bash
docker logs laravel-sistem-desa-queue
\`\`\`

Fokus pada error terakhir sebelum container berhenti atau restart.

## Container Tidak Bisa Start

Periksa:

1. File \`.env\` tersedia dan dapat dibaca container.
2. File \`database/database.sqlite\` tersedia.
3. Directory \`storage/\` tersedia dan dapat ditulis.
4. Image pada \`docker-compose.yml\` adalah release yang benar.
5. Tidak ada error Laravel pada log container.

Setelah penyebab diperbaiki:

\`\`\`bash
docker compose up -d
docker compose ps
\`\`\`

Jangan menghapus database atau storage sebagai langkah troubleshooting awal.

## Queue Worker Tidak Berjalan

Pastikan queue container tetap \`Up\`:

\`\`\`bash
docker compose ps
docker logs laravel-sistem-desa-queue
\`\`\`

Jika queue worker berhenti karena error aplikasi, perbaiki error tersebut terlebih dahulu.

Untuk import penduduk atau job asynchronous lain, worker harus tetap berjalan. Menjalankan \`php artisan queue:work\` secara manual di terminal bukan pengganti permanen untuk queue container.

Lihat [Troubleshooting Queue](../troubleshooting/queue/) untuk masalah job atau import.

## Aplikasi Tidak Dapat Dibuka

Periksa secara berurutan:

\`\`\`text
Container Up?
  └─ Tidak → cek docker logs
  └─ Ya
      ↓
Port 8000 dapat diakses?
  └─ Tidak → cek port mapping dan Docker Desktop
  └─ Ya
      ↓
Laravel error?
  └─ Ya → cek log aplikasi
  └─ Tidak → periksa route atau halaman yang bermasalah
\`\`\`

### Port 8000 Tidak Dapat Digunakan

Periksa mapping pada \`docker-compose.yml\`:

\`\`\`yaml
ports:
  - "8000:80"
\`\`\`

Jika port 8000 pada host digunakan aplikasi lain, ubah port host, misalnya:

\`\`\`yaml
ports:
  - "8080:80"
\`\`\`

Kemudian akses:

\`\`\`text
http://localhost:8080/admin
\`\`\`

Perubahan port host tidak mengubah port \`80\` di dalam container.

## Container Terus Restart

Jika status container berubah berulang kali antara \`Restarting\` dan \`Up\`:

1. Ambil log:
   \`\`\`bash
   docker logs laravel-sistem-desa
   \`\`\`
2. Periksa error terakhir.
3. Periksa \`.env\`, database, storage, dan image.
4. Perbaiki penyebab.
5. Jalankan kembali:
   \`\`\`bash
   docker compose up -d
   \`\`\`

Jangan hanya melakukan restart berulang tanpa membaca log. Docker tidak memiliki kemampuan membaca pikiran, sayangnya.
