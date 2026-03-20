# 🎯 JavaScript DOM & Event (Interaktif Website)

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami apa itu DOM (Document Object Model)
- ✅ Mampu memilih elemen HTML menggunakan JavaScript
- ✅ Mampu memanipulasi isi & style HTML
- ✅ Memahami event (klik, input, dll)
- ✅ Membuat website yang interaktif (tidak statis)

---

## 📖 Penjelasan Materi

### 🧠 1. Dari UI ke Interaksi

Di pertemuan sebelumnya:
- Kamu sudah bisa bikin UI (HTML + CSS) ✅

Sekarang:
> Kita buat UI tersebut **bisa “hidup”** menggunakan JavaScript

Contoh:
- Klik button → muncul pesan
- Klik card → berubah warna
- Input → tampil di layar

---

### 🌐 2. Apa itu DOM?

DOM = cara JavaScript membaca HTML

HTML kamu:
```html
    <h1>Hello</h1>
```

Di JavaScript dianggap sebagai object:
```
    document
```
Jadi:
> JavaScript bisa **mengakses & mengubah HTML**

---

### 🔍 3. Cara Mengambil Elemen

#### 1. Berdasarkan ID
```js
    const title = document.getElementById("title");
```

#### 2. Berdasarkan Class
```js
    const cards = document.getElementsByClassName("card");
```

#### 3. Modern (WAJIB)
```js
    const btn = document.querySelector(".btn");
```

Kenapa `querySelector`?
- Lebih fleksibel
- Standar modern

---

### ✏️ 4. Mengubah Isi (Manipulasi DOM)

#### Mengubah teks
```js
    const title = document.querySelector("h1");
    title.textContent = "Belajar JavaScript";
```

#### Mengubah HTML
```js
    title.innerHTML = "<span>Belajar JS</span>";
```
---

### 🎨 5. Mengubah Style
```js
    const card = document.querySelector(".card");
    card.style.backgroundColor = "lightblue";
```

---

### 🧩 6. Menambah Class
```js
    card.classList.add("active");
```

Menghapus:
```js
    card.classList.remove("active");
```

---

### ⚡ 7. Event (INTI INTERAKSI)

Event = aksi dari user

Contoh:
- klik
- hover
- input

---

### 🖱️ Event Click
```ja
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function() {
        alert("Button diklik!");
    });
```

Penjelasan:
- `addEventListener` → mendeteksi event
- `"click"` → jenis event
- function → aksi yang dijalankan

---

### 💻 8. Contoh Nyata (Dari Materi Sebelumnya)

#### HTML
```html
    <button class="btn">Klik Saya</button>
    <p id="text"></p>
```

#### JavaScript
```js
    const btn = document.querySelector(".btn");
    const text = document.querySelector("#text");

    btn.addEventListener("click", function() {
        text.textContent = "Halo! Kamu berhasil klik button 🚀";
    });
```

---

### 🔁 9. Loop + DOM (Preview Materi Selanjutnya)
```js
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            card.style.backgroundColor = "yellow";
        });
    });
```

👉 Ini akan diperdalam di pertemuan berikutnya

---

## ⚠️ Kesalahan Umum

- ❌ Salah selector (tidak ketemu elemen)
- ❌ Script dijalankan sebelum HTML load
- ❌ Tidak pakai `addEventListener`
- ❌ Menggunakan cara lama (onclick di HTML)
- ❌ Tidak console.log untuk debug

---

## 🧪 Mini Practice

Coba buat:

👉 1 button:
- Saat diklik → ubah teks di halaman

👉 1 card:
- Saat diklik → berubah warna

---

## 🚀 Insight Penting

Sekarang kamu sudah bisa:

- Mengubah HTML dengan JavaScript
- Membuat interaksi sederhana

👉 Ini adalah dasar semua framework (React, dll)

---

## 💡 Mindset Penting

> "Frontend bukan cuma tampilan, tapi pengalaman user."

---

🔥 **Next Step:**
👉 JavaScript Logic (Array & Object - Real Case)