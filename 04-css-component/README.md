# 🎯 CSS Component & Reusable UI

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami konsep reusable CSS
- ✅ Mampu membuat component (card, button, section)
- ✅ Menghindari penulisan CSS berulang
- ✅ Memahami dasar design system sederhana
- ✅ Membuat UI yang lebih rapi & konsisten

---

## 📖 Penjelasan Materi

### 🧠 1. Masalah Umum Pemula

Biasanya pemula menulis CSS seperti ini:

❌ Tidak efisien:
```css    
    .card1 {
        background: white;
        padding: 20px;
    }

    .card2 {
        background: white;
        padding: 20px;
    }

    .card3 {
        background: white;
        padding: 20px;
    }
```

Masalah:
- Kode berulang
- Sulit di-maintain
- Tidak scalable

---

### 🔥 2. Konsep Reusable UI

Solusinya adalah:

> **Buat class yang bisa dipakai berulang (reusable)**

✅ Lebih baik:
```css
    .card {
        background: white;
        padding: 20px;
    }
```

Digunakan di HTML:
```html
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
```

---

### 🧩 3. Apa itu Component?

Component = bagian UI yang bisa dipakai ulang

Contoh:
- Button
- Card
- Section
- Navbar

👉 Ini adalah konsep penting sebelum masuk React

---

### 🎨 4. Membuat Component Card
```css
    .card {
        background: #ffffff;
        padding: 20px;
        border-radius: 10px;
    }
```

---

### 🔘 5. Membuat Component Button
```css
    .btn {
        padding: 10px 20px;
        border: none;
        background: blue;
        color: white;
        border-radius: 8px;
        cursor: pointer;
    }
```

---

### 🧱 6. Utility Class (Optional Tapi Powerful)

Utility class = class kecil untuk fungsi tertentu
```css
    .text-center {
        text-align: center;
    }

    .mt-20 {
        margin-top: 20px;
    }
```

---

### 📐 7. Spacing & Hierarchy (BIAR UI BAGUS)

UI yang bagus itu bukan warna doang.

Tapi:
- Jarak rapi
- Hirarki jelas
- Mudah dibaca

Contoh:
```css
    .section {
        padding: 40px 20px;
    }
```

---

### 🎯 8. Konsistensi (INI KUNCI)

Jangan:
- Card beda-beda padding ❌
- Button beda ukuran ❌

Harus:
- Konsisten ✅

---

### 📦 9. Struktur CSS yang Baik

Pisahkan:

- Layout (container, flex)
- Component (card, btn)
- Utility (spacing, text)

---

### 💻 Contoh Penggunaan

HTML:
```html
    <section class="section">
        <div class="card">
            <h3>Judul</h3>
            <p>Deskripsi</p>
            <button class="btn">Klik</button>
        </div>
    </section>
```

CSS:
```css
    .section {
        padding: 40px 20px;
    }

    .card {
        background: white;
        padding: 20px;
        border-radius: 10px;
    }

    .btn {
        padding: 10px 20px;
        background: blue;
        color: white;
    }
```

---

## ⚠️ Kesalahan Umum

- ❌ Tidak reusable (copy paste CSS)
- ❌ Class tidak jelas (nama aneh)
- ❌ Tidak konsisten spacing
- ❌ Semua digabung dalam 1 class besar
- ❌ Tidak memisahkan component

---

## 🚀 Insight Penting

Kalau kamu menguasai ini:

- Kode jadi lebih rapi
- Lebih cepat bikin UI
- Siap masuk React

---

## 💡 Mindset Penting

> "Frontend bukan cuma bikin tampil, tapi bikin sistem UI yang bisa dipakai ulang."

---

🔥 **Next Step:** JavaScript DOM & Event