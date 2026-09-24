---
title: "Template dan Generate"
weight: 64
---

# Template dan Generate

Dynamic field harus menggunakan `${nama_field}`, bukan `${form.nama_field}`.

System data menggunakan `${resident.name}` dan `${family.kk_number}`.

Jika template aktif tidak ada, jenis surat tidak dapat digunakan untuk request baru sampai template tersedia.

Jika generated file hilang tetapi template masih ada, generate ulang dapat dilakukan. Jika template juga hilang, generate ulang tidak dapat dilakukan.