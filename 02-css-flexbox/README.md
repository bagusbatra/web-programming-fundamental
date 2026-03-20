# 🎯 CSS Fundamental + Flexbox (Modern Layout)

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami cara kerja CSS (styling dasar)
- ✅ Memahami konsep Box Model
- ✅ Menguasai Flexbox untuk layout modern
- ✅ Mampu membuat layout sederhana (navbar + content)
- ✅ Mulai berpikir seperti frontend developer

---

## 📖 Penjelasan Materi

### 🎨 1. CSS = Tampilan Website

Kalau HTML adalah struktur, maka CSS adalah:

> **Yang membuat website terlihat bagus**

Contoh tanpa CSS:
- Tulisan polos
- Tidak ada layout
- Tidak menarik

Dengan CSS:
- Ada warna 🎨
- Ada jarak 📏
- Ada layout rapi 📐

---

### 🔗 2. Cara Menghubungkan CSS

Gunakan external CSS (WAJIB):
```html
    <link rel="stylesheet" href="style.css">
```

Kenapa?
- Lebih rapi
- Mudah diatur
- Standar industri

---

### 🎯 3. Selector Dasar

Selector digunakan untuk memilih elemen HTML.
```css
    h1 { /* tag */
        color: blue;
    }

    .card { /* class */
        background: #eee;
    }

    #judul { /* ID */
        color: red;
    }
```

Penjelasan:
- `h1` → semua tag h1
- `.class` → berdasarkan class
- `#id` → berdasarkan id

---

### 📦 4. Box Model (WAJIB PAHAM)

Setiap elemen HTML itu punya “kotak”:

- Content → isi
- Padding → jarak dalam
- Border → garis
- Margin → jarak luar

Contoh:
```css
    .box {
        width: 200px;
        padding: 20px;
        border: 2px solid black;
        margin: 10px;
    }
```

💡 Kalau layout berantakan, biasanya karena ini.

---

### 📐 5. Flexbox (INI YANG PALING PENTING)

Flexbox digunakan untuk mengatur layout secara modern.

👉 Hampir semua website modern pakai ini.

---

### 🧠 Konsep Dasar Flexbox

Ada 2 bagian:
- Container (parent)
- Item (child)

Aktifkan flex:
```css
    .container {
        display: flex;
    }
```

---

### 🔑 Properti Penting Flexbox

#### 1. justify-content (horizontal)
```css
    justify-content: center;
```

Pilihan:
- flex-start
- center
- space-between
- space-around

---

#### 2. align-items (vertical)
```css
    align-items: center;
```

---

#### 3. gap (jarak antar item)
```css
    gap: 20px;
```

---

#### 4. flex-direction (arah)
```css
    flex-direction: row;    /* default */
    flex-direction: column; /* vertikal */
```

---

### 💻 Contoh Flexbox Sederhana
```css
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .item {
        background: #eee;
        padding: 20px;
    }
```

---

### 🧭 6. Layout Navbar Sederhana
```css
    nav {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
```

---

### 📱 7. Sedikit Intro Responsive

Flexbox membantu responsive tanpa ribet.

Contoh:
```css
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }
    }
```

---

### 🧼 8. Reset CSS (WAJIB)

Supaya tampilan konsisten:
```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
```

---

## 💻 Contoh Kode

### HTML
```html
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
```

### CSS
```css
    .container {
        display: flex;
        gap: 10px;
    }

    .item {
        background: lightblue;
        padding: 20px;
    }
```

---

## ⚠️ Kesalahan Umum

- ❌ Tidak pakai flexbox
- ❌ Masih pakai float
- ❌ Tidak pakai reset CSS
- ❌ Layout berantakan karena margin
- ❌ Tidak memahami parent-child

---

## 🚀 Insight Penting

Kalau kamu menguasai Flexbox:

- Layout jadi mudah
- Tidak perlu trik aneh
- Kode lebih clean
- Siap ke responsive design

---

🔥 **Next Step:** Responsive Design (Mobile First)