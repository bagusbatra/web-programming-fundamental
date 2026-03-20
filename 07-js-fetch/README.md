# 🎯 JavaScript Fetch API (Ambil Data dari Internet)

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami apa itu API
- ✅ Menggunakan Fetch API untuk mengambil data
- ✅ Memahami JSON
- ✅ Menampilkan data dari API ke HTML
- ✅ Menggabungkan Fetch dengan DOM

---

## 📖 Penjelasan Materi

### 🧠 1. Dari Data Lokal ke Data Internet

Di pertemuan sebelumnya:
- Kamu menggunakan array & localStorage (data manual)

Sekarang:
> Kita ambil data langsung dari **server (internet)**

💡 Intinya:
- Data tidak lagi ditulis sendiri
- Data berasal dari luar (real case aplikasi)

Contoh:
- Instagram → ambil data user dari server
- Tokopedia → ambil data produk dari database

---

### 🌐 2. Apa itu API?

API = sumber data yang bisa diakses oleh aplikasi

💡 Intinya:
> API adalah “jembatan” antara frontend dan backend

Tanpa API:
- Website tidak punya data dinamis

Dengan API:
- Website bisa update data secara real-time

Contoh API:
- Data user
- Data produk
- Data berita

---

### 📦 3. Apa itu JSON?

JSON = format data dari API

Contoh:
```json
    {
        "nama": "Bagus",
        "umur": 17
    }
```

💡 Intinya:
- JSON mirip object di JavaScript
- Mudah dibaca oleh manusia & mesin

Kenapa penting?
👉 Karena hampir semua API menggunakan JSON

---

### ⚡ 4. Fetch API (INTI)

Digunakan untuk mengambil data dari internet
```js
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
```

💡 Penjelasan inti:

- `fetch()`  
  👉 Mengirim request ke server

- `response`  
  👉 Hasil dari server (belum bisa langsung dipakai)

- `.json()`  
  👉 Mengubah data menjadi JSON

- `.then(data)`  
  👉 Mengambil hasil akhirnya

---

### 💻 5. Menampilkan Data ke HTML

#### HTML
```html
    <div id="user-list"></div>
```

#### JavaScript
```js
    const container = document.getElementById("user-list");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {

            data.forEach(function(user) {
                container.innerHTML += `
                    <div class="card">
                        <h3>${user.name}</h3>
                        <p>${user.email}</p>
                    </div>
                `;
            });

        });
```

💡 Intinya:
- Data dari API → di-loop
- Setiap item → dibuat HTML
- Ditampilkan ke halaman

👉 Ini sama seperti materi array sebelumnya, hanya datanya dari internet

---

### 🔄 6. Async / Await (Modern)
```js
    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log(data);
    }

    getData();
```

💡 Intinya:
- Cara modern dari `.then()`
- Lebih mudah dibaca
- Terlihat seperti kode biasa (tidak berantai)

👉 Gunakan ini di project nyata

---

### ⚠️ 7. Error Handling (PENTING)
```js
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error:", error));
```

💡 Intinya:
- Internet bisa gagal
- API bisa error

👉 Jadi:
HARUS ada penanganan error

---

### ⏳ 8. Loading State (REAL UX)
```js
    container.innerHTML = "Loading...";
```

💡 Intinya:
- Data tidak langsung muncul
- Butuh waktu (delay)

👉 Tanpa loading:
User bingung

👉 Dengan loading:
User tahu sedang proses

---

### 🧠 9. Studi Kasus Nyata

API:

    https://jsonplaceholder.typicode.com/users

Ambil:
- Nama
- Email
- Kota

💡 Intinya:
- Ini simulasi data nyata
- Sama seperti aplikasi production

---

### 🔗 10. Hubungan dengan Materi Sebelumnya

Sebelumnya:

- Data manual (array) ❌
- Data localStorage ❌

Sekarang:

- Data dari API ✅

💡 Insight:
> Kamu sekarang sudah mendekati cara kerja aplikasi modern

---

## ⚠️ Kesalahan Umum

- ❌ Lupa `.json()` → data tidak bisa dibaca
- ❌ Tidak pakai `await` / `.then()`
- ❌ Tidak handle error
- ❌ Tidak clear container sebelum render
- ❌ Salah URL API

---

## 🧪 Mini Practice

Coba:

👉 Ambil data user dari API  
👉 Tampilkan:
- Nama
- Email

---

## 🚀 Insight Penting

Sekarang kamu sudah bisa:

- Mengambil data dari internet
- Mengolah data
- Menampilkan ke UI

👉 Ini skill WAJIB frontend modern

---

## 💡 Mindset Penting

> "Frontend modern tidak membuat data, tapi mengambil, mengelola, dan menampilkan data."

---

🔥 **Next Step:**
👉 Mini Project (Gabungan semua materi)