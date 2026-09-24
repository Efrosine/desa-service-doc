---
title: "List dan Block"
weight: 54
---

# List dan Block

Misalkan list bernama `dokumen` memiliki child `jenis`, `nomor`, dan `tanggal`.

~~~text
${dokumen}
Jenis: ${jenis}
Nomor: ${nomor}
Tanggal: ${tanggal}
${/dokumen}
~~~

Generator melakukan cloning block sesuai jumlah item. Field tanggal/waktu diformat sebelum dimasukkan ke dokumen.