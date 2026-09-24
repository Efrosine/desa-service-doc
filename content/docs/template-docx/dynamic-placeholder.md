---
title: "Dynamic Placeholder"
weight: 52
---

# Dynamic Placeholder

Jika Dynamic Form memiliki `name = nama_usaha`, DOCX harus menggunakan:

~~~text
${nama_usaha}
~~~

Bukan `${form.nama_usaha}`.

Perubahan `name` pada Dynamic Form harus diikuti perubahan placeholder. Sistem tidak scanning DOCX secara otomatis untuk menemukan dynamic field.