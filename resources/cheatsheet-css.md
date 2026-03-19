# 🎨 CSS Cheat Sheet (Modern 2026)

Panduan cepat CSS untuk bikin tampilan website modern, rapi, dan responsive 🚀

---

## 🧱 Cara Menggunakan CSS

### 1. Inline (tidak direkomendasikan)
```css
    <h1 style="color: red;">Hello</h1>
```
### 2. Internal
```html
    <head>
        ...
        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
```
### 3. External (WAJIB DIPAKAI)
```html
    <head>
        ...
        <link rel="stylesheet" href="style.css">
    </head>
```
---

## 🎯 Selector Dasar
```css
    h1 {
        color: blue;
    }

    .class {
        color: green;
    }

    #id {
        color: red;
    }

    * { 
        margin: 0;
        padding: 0;
    }
```
---

## 📦 Box Model

Setiap element punya struktur:

- Content
- Padding
- Border
- Margin
```css
    div {
        width: 200px;
        padding: 20px;
        border: 2px solid black;
        margin: 10px;
    }
```
---

## 🎨 Warna
```css
    color: red;
    color: #ff0000;
    color: rgb(255, 0, 0);
```
---

## 🔤 Text Styling
```css
    h1 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        line-height: 1.5;
    }
```
---

## 📏 Unit Modern

| Unit | Kegunaan |
|------|---------|
| px   | Ukuran tetap |
| %    | Relatif parent |
| rem  | Relatif root |
| vh   | Tinggi layar |
| vw   | Lebar layar |

```css
    body {
        font-size: 16px;
    }

    h1 {
        font-size: 2rem;
    }
```
---

## 📐 Flexbox (WAJIB KUASAI)

### Container
```css
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
```

### Properti Penting

| Properti | Fungsi |
|----------|--------|
| justify-content | Horizontal |
| align-items | Vertical |
| gap | Jarak antar item |
| flex-direction | Arah (row / column) |

---

### Contoh Layout
```css
    .container {
        display: flex;
        gap: 20px;
    }

    .card {
        background: #eee;
        padding: 20px;
        flex: 1;
    }
```
---

## 📱 Responsive Design

### Media Query
```css
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }
    }
```
---

## 🧩 Reusable Component
```css
    .btn {
        padding: 10px 20px;
        border: none;
        background: blue;
        color: white;
        border-radius: 8px;
    }

    .card {
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
```
---

## 🎯 Position
```css
    .box {
        position: relative;
    }

    .child {
        position: absolute;
        top: 10px;
        left: 10px;
    }
```
---

## 🧼 Reset CSS (WAJIB)
```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
```
---

## ⚠️ Kesalahan Umum

❌ Tidak pakai reset  
❌ Pakai px semua (tidak responsive)  
❌ Tidak pakai flexbox  
❌ CSS berantakan & tidak reusable  
❌ Tidak konsisten penamaan class  

---

## 💡 Tips Cepat

- Gunakan class, jangan id untuk styling
- Gunakan flexbox untuk layout
- Gunakan rem untuk font
- Gunakan gap daripada margin antar item
- Buat class reusable (btn, card, dll)

---

## 🔥 Shortcut Emmet

| Shortcut | Hasil |
|----------|------|
| m10 | margin: 10px |
| p20 | padding: 20px |
| df | display: flex |
| jc | justify-content |
| ai | align-items |

---

## 🎯 Kesimpulan

CSS adalah:
- 🎨 Tampilan website
- 📐 Layout & positioning
- 📱 Kunci responsive design

Kalau CSS kamu rapi → UI kamu terlihat profesional.

---

🔥 **Next Step:** lanjut ke JavaScript