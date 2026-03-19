# 📄 HTML Cheat Sheet (Modern 2026)

Panduan cepat HTML untuk pemula sampai siap bikin project real 🚀

---

## 🧱 Struktur Dasar HTML
```html
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Judul Halaman</title>
    </head>
    <body>

    </body>
    </html>
```
---

## 🧠 Semantic HTML (WAJIB DIPAKAI)

| Tag        | Fungsi |
|------------|--------|
| `<header>` | Bagian atas (logo, judul) |
| `<nav>`    | Navigasi/menu |
| `<main>`   | Konten utama |
| `<section>`| Bagian konten |
| `<article>`| Konten mandiri (blog, post) |
| `<aside>`  | Sidebar |
| `<footer>` | Bagian bawah |

### ✅ Contoh
```html
    <header>
        <h1>My Website</h1>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>

    <main>
        <section>
            <h2>Welcome</h2>
            <p>Ini konten utama</p>
        </section>
    </main>

    <footer>
        <p>© 2026</p>
    </footer>
```
---

## 🔤 Text & Heading
```html
    <h1>Judul</h1>
    <h2>Sub Judul</h2>
    <p>Paragraf</p>
    <strong>Tebal</strong>
    <em>Italic</em>
```
---

## 🔗 Link & Navigasi
```html
    <a href="https://google.com">Ke Google</a>
    <a href="#section1">Scroll ke Section</a>
```
---

## 🖼️ Image
```html
    <img src="assets/images/foto.jpg" alt="Deskripsi gambar">
```
⚠️ **Wajib pakai alt** untuk SEO & aksesibilitas

---

## 📋 List

### Unordered List
```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
```
### Ordered List
```html
    <ol>
        <li>Step 1</li>
        <li>Step 2</li>
    </ol>
```
---

## 🧾 Form (Input User)
```html
    <form>
        <label for="nama">Nama:</label>
        <input type="text" id="nama" placeholder="Masukkan nama">

        <button type="submit">Kirim</button>
    </form>
```
### Input Penting
```html
    <input type="text">
    <input type="email">
    <input type="password">
    <input type="number">
    <input type="checkbox">
    <input type="radio">
```
---

## 🧩 Atribut Penting

| Atribut | Fungsi |
|--------|-------|
| `class` | Untuk styling (CSS) |
| `id` | Identifier unik |
| `href` | Link tujuan |
| `src` | Sumber file |
| `alt` | Deskripsi gambar |
| `placeholder` | Hint input |
| `required` | Wajib diisi |

---

## ♿ Accessibility Basic
```html
    <img src="foto.jpg" alt="Foto siswa belajar">

    <label for="email">Email</label>
    <input type="email" id="email">

    <button aria-label="Tombol kirim">Kirim</button>
```
---

## 🔍 SEO Basic (WAJIB)
```html
    <meta name="description" content="Website belajar web programming modern">
    <meta name="keywords" content="html, css, javascript">
    <meta name="author" content="Nama Kamu">
```
---

## 📱 Responsive Meta
```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
⚠️ Wajib untuk tampilan mobile

---

## 🚫 Kesalahan Umum

❌ Semua pakai `<div>`  
❌ Tidak pakai `alt` pada gambar  
❌ Tidak pakai `<label>` pada form  
❌ Struktur tidak rapi  
❌ Tidak pakai semantic HTML  

---

## 💡 Tips Cepat

- Gunakan semantic HTML (bukan div semua)
- Selalu rapikan indentasi
- Gunakan nama file yang jelas
- Biasakan clean code dari awal
- Anggap HTML = struktur, bukan desain

---

## 🔥 Shortcut Emmet (VS Code)

| Shortcut | Hasil |
|----------|------|
| `!` | Struktur HTML cepat |
| `ul>li*3` | List 3 item |
| `div.container` | `<div class="container">` |
| `img` | Tag image |

---

## 🎯 Kesimpulan

HTML adalah:
- 🧱 Struktur website
- 🔑 Dasar semua web
- 🚪 Gerbang ke CSS & JavaScript

Kalau HTML kamu rapi → project kamu bakal jauh lebih mudah dikembangkan.

---

🔥 **Next Step:** lanjut ke CSS Flexbox