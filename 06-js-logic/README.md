# 🎯 JavaScript Logic (Array & Object - Real Use Case)

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami konsep Array & Object
- ✅ Mampu mengolah data (bukan hanya tampilan)
- ✅ Menggunakan loop modern (`forEach`, `map`)
- ✅ Melakukan filtering data
- ✅ Menampilkan data dinamis ke HTML

---

## 📖 Penjelasan Materi

### 🧠 1. Dari Interaksi ke Data

Di pertemuan sebelumnya:
- Kamu sudah bisa klik, ubah teks, toggle UI ✅

Sekarang:
> Kita mulai mengolah **data** seperti aplikasi nyata

Contoh:
- List produk
- Data siswa
- Daftar tugas

---

### 📦 2. Apa itu Array?

Array = kumpulan data
```js
    const buah = ["Apel", "Jeruk", "Mangga"];
```

Akses data:
```js
    console.log(buah[0]); // Apel
```

---

### 🧩 3. Apa itu Object?
```js
Object = data dengan struktur (key: value)

    const siswa = {
        nama: "Bagus",
        umur: 17,
        kelas: "12A"
    };
```

Akses:
```js
    console.log(siswa.nama);
```

---

### 🔥 4. Array of Object (REAL CASE)

Ini yang sering dipakai di dunia kerja:
```js
    const produk = [
        {
            nama: "Laptop",
            harga: 7000000
        },
        {
            nama: "HP",
            harga: 3000000
        }
    ];
```

👉 Ini seperti data dari database / API

---

### 🔁 5. Loop Modern (WAJIB)

#### forEach

Digunakan untuk looping:
```js
    produk.forEach(function(item) {
        console.log(item.nama);
    });
```

---

### 🎯 6. Menampilkan Data ke HTML

Contoh:

#### HTML
```html
    <div id="list"></div>
```

#### JS
```js
    const list = document.getElementById("list");

    produk.forEach(function(item) {
        list.innerHTML += "<p>" + item.nama + "</p>";
    });
```

---

### ⚡ 7. map() - Lebih Modern
```js
    const namaProduk = produk.map(function(item) {
        return item.nama;
    });
```
---

### 🔍 8. filter() - REAL USE CASE

Digunakan untuk mencari data:
```js
    const mahal = produk.filter(function(item) {
        return item.harga > 5000000;
    });
```
---

### 🧠 9. Studi Kasus Nyata

#### Data Siswa
```js
    const siswa = [
        { nama: "Andi", nilai: 80 },
        { nama: "Budi", nilai: 60 },
        { nama: "Citra", nilai: 90 }
    ];
```

#### Ambil yang lulus (nilai ≥ 75)
```js
    const lulus = siswa.filter(function(item) {
        return item.nilai >= 75;
    });
```

---

### 💻 10. Gabungkan dengan DOM
```js
    const container = document.querySelector(".container");

    produk.forEach(function(item) {
        container.innerHTML += `
            <div class="card">
                <h3>${item.nama}</h3>
                <p>Rp ${item.harga}</p>
            </div>
        `;
    });
```

👉 Ini sudah seperti aplikasi nyata

---

## ⚠️ Kesalahan Umum

- ❌ Tidak paham array vs object
- ❌ Tidak menggunakan loop
- ❌ Menulis HTML manual satu-satu
- ❌ Tidak memisahkan data & tampilan
- ❌ Tidak menggunakan template string

---

## 🧪 Mini Practice

Coba buat:

👉 Array berisi 3 data:
- namaProduk
- hargaProduk

Tampilkan ke HTML menggunakan loop

---

## 🚀 Insight Penting

Sekarang kamu sudah bisa:

- Mengelola data
- Menampilkan data ke UI

👉 Ini adalah dasar semua aplikasi modern

---

## 💡 Mindset Penting

> "Frontend bukan cuma tampilan, tapi bagaimana data ditampilkan dengan benar."

---

🔥 **Next Step:**
👉 Fetch API (Ambil data dari internet)