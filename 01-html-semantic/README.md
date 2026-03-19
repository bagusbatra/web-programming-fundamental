# 🎯 HTML Semantic + SEO Basic + Accessibility

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami struktur HTML modern (HTML5 semantic)
- ✅ Bisa membedakan fungsi tiap tag (bukan asal pakai div)
- ✅ Mampu membuat halaman HTML yang rapi & terstruktur
- ✅ Memahami dasar SEO (meta tag)
- ✅ Memahami dasar accessibility (alt & label)
- ✅ Siap lanjut ke styling (CSS)

---

## 📖 Penjelasan Materi

### 🧠 1. HTML = Struktur, Bukan Tampilan

HTML itu bukan untuk desain.

HTML adalah:
> **Kerangka / struktur dari sebuah website**

Ibarat rumah:
- HTML = rangka bangunan
- CSS = cat & dekorasi
- JavaScript = listrik & interaksi

Kalau struktur HTML kamu bagus → ngoding selanjutnya jadi jauh lebih mudah.

---

### 🧱 2. Struktur Dasar HTML (WAJIB HAFAL)

Setiap halaman HTML harus punya struktur ini:
```html
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Judul</title>
    </head>
    <body>

    </body>
    </html>
```

Penjelasan:
- `<!DOCTYPE html>` → memberi tahu browser ini HTML5
- `<html>` → root dari semua elemen
- `<head>` → konfigurasi (tidak tampil di layar)
- `<body>` → isi website yang terlihat

---

### 🧩 3. Semantic HTML (INI YANG PALING PENTING)

Dulu orang sering pakai `<div>` untuk semua hal ❌  
Sekarang kita pakai **semantic HTML** ✅

Kenapa?
- Lebih rapi
- Lebih mudah dibaca
- Lebih SEO friendly

#### 🔑 Tag Semantic Utama

| Tag | Fungsi |
|-----|--------|
| `<header>` | Bagian atas (judul/logo) |
| `<nav>` | Navigasi/menu |
| `<main>` | Konten utama |
| `<section>` | Bagian konten |
| `<article>` | Konten mandiri |
| `<footer>` | Bagian bawah |

#### ✅ Contoh Struktur Benar
```html
    <header>
        <h1>Belajar Web</h1>
    </header>

    <nav>
        <a href="#">Home</a>
    </nav>

    <main>
        <section>
            <h2>Materi</h2>

            <article>
                <h3>HTML</h3>
                <p>Belajar dasar HTML</p>
            </article>

        </section>
    </main>

    <footer>
        <p>© 2026</p>
    </footer>
```

---

### 🔍 4. SEO Basic (Biar Website Kamu “Terlihat”)

SEO = Search Engine Optimization  
Tujuannya supaya website kamu bisa ditemukan di Google.

Minimal wajib:

    <meta name="description" content="Belajar web programming modern">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

Penjelasan:
- `description` → ringkasan website
- `viewport` → agar responsive di HP

---

### ♿ 5. Accessibility (Sering Diremehkan, Padahal Penting)

Accessibility = website bisa diakses semua orang (termasuk disabilitas)

#### 🔑 Contoh Penting

**Gambar wajib pakai alt**
```html    
    <img src="foto.jpg" alt="Siswa sedang belajar coding">
```

**Form wajib pakai label**
```html    
    <label for="email">Email</label>
    <input type="email" id="email">
```

Kenapa penting?
- Membantu screen reader
- Lebih SEO friendly
- Lebih profesional

---

### 🧼 6. Clean Code HTML

Biasakan dari awal:

❌ Jelek:
```html    
    <div><div><div>Isi</div></div></div>
```

✅ Bagus:
```html    
    <section>
        <p>Isi</p>
    </section>
```
---

## 💻 Contoh Kode (Sederhana Tapi Benar)
```html
    <header>
        <h1>Website Saya</h1>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>

    <main>
        <section>
            <h2>Konten</h2>
            <p>Belajar HTML itu mudah!</p>
        </section>
    </main>

    <footer>
        <p>© 2026</p>
    </footer>
```

---

## ⚠️ Kesalahan Umum

Ini yang paling sering dilakukan pemula:

- ❌ Semua pakai `<div>`
- ❌ Tidak pakai `alt` pada gambar
- ❌ Tidak pakai `label` pada form
- ❌ Struktur tidak jelas
- ❌ Tidak pakai meta viewport
- ❌ Penulisan tidak rapi (indentasi berantakan)

---

## 🚀 Insight Penting

Kalau kamu menguasai HTML dengan benar:

- CSS jadi lebih mudah
- JavaScript jadi lebih jelas
- Project kamu terlihat profesional

---

🔥 **Next Step:** lanjut ke CSS Flexbox