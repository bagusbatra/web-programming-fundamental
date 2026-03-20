# 🎯 Responsive Design (Mobile First)

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami konsep Responsive Design
- ✅ Memahami Mobile First approach
- ✅ Mampu menggunakan media query
- ✅ Menggunakan unit modern (%, rem, vh, vw)
- ✅ Membuat website yang optimal di HP & desktop

---

## 📖 Penjelasan Materi

### 📱 1. Apa itu Responsive Design?

Responsive Design adalah teknik agar website:

> **Bisa menyesuaikan tampilan di berbagai ukuran layar**

Contoh:
- 📱 HP → layout ke bawah
- 💻 Laptop → layout ke samping

Tanpa responsive:
- Website berantakan di HP ❌
- Harus zoom manual ❌

Dengan responsive:
- Rapi di semua device ✅

---

### 🔥 2. Kenapa Mobile First?

Mobile First = desain dari HP dulu, baru ke desktop.

Kenapa?
- Mayoritas user sekarang pakai HP
- Lebih simpel
- Lebih mudah scale ke besar

---

### 🧠 Cara berpikir Mobile First

❌ Salah:
- Buat desktop dulu
- Dipaksa jadi mobile

✅ Benar:
- Buat mobile dulu
- Tambahkan fitur untuk layar besar

---

### 📐 3. Media Query (INTI RESPONSIVE)

Media Query digunakan untuk mengubah style berdasarkan ukuran layar.

Contoh:
```css
    @media (max-width: 768px) {
        body {
            background: lightblue;
        }
    }
```

Artinya:
- Jika layar ≤ 768px → jalankan CSS ini

---

### 🔑 4. Breakpoint Umum

| Device | Ukuran |
|--------|--------|
| HP | ≤ 768px |
| Tablet | 768px – 1024px |
| Desktop | ≥ 1024px |

---

### 📱 5. Contoh Flexbox Responsive

Default (mobile):
```css
    .container {
        display: flex;
        flex-direction: column; /* ke bawah */
    }
```

Desktop:
```css
    @media (min-width: 768px) {
        .container {
            flex-direction: row; /* ke samping */
        }
    }
```

---

### 📏 6. Unit Modern (WAJIB)

Jangan terlalu bergantung pada px ❌

Gunakan:

| Unit | Fungsi |
|------|--------|
| % | Relatif parent |
| rem | Relatif root (font) |
| vh | Tinggi layar |
| vw | Lebar layar |

Contoh:
```css
    h1 {
        font-size: 2rem;
    }
```

---

### 🧼 7. Layout Responsive yang Baik

Gunakan kombinasi:

- Flexbox
- Media Query
- Unit modern

Contoh:
```css
    .card {
        width: 100%; /* mobile full */
    }

    @media (min-width: 768px) {
        .card {
            width: 30%; /* desktop jadi 3 kolom */
        }
    }
```

---

### ⚠️ 8. Kesalahan Umum

- ❌ Pakai px semua
- ❌ Tidak pakai viewport
- ❌ Tidak test di HP
- ❌ Layout pecah di layar kecil
- ❌ Tidak pakai mobile-first

---

## 💻 Contoh Kode

### HTML
```html
    <div class="container">
        <div class="card">1</div>
        <div class="card">2</div>
        <div class="card">3</div>
    </div>
```

### CSS
```css
    .container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (min-width: 768px) {
        .container {
            flex-direction: row;
        }
    }
```

---

## 🚀 Insight Penting

Kalau kamu menguasai responsive design:

- Website kamu terlihat profesional
- Bisa digunakan di semua device
- Siap masuk dunia kerja frontend

---

## 💡 Mindset Penting

> "Bukan cuma bisa bikin website, tapi bikin website yang nyaman dipakai di semua device."

---

🔥 **Next Step:** CSS Component & Reusable UI