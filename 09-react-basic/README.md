# 🎯 React Basic (Component, Props, State)

---

## 📌 Tujuan Pembelajaran

Setelah materi ini, kamu diharapkan:

- ✅ Memahami kenapa framework digunakan
- ✅ Memahami konsep component
- ✅ Menggunakan props untuk kirim data
- ✅ Menggunakan state untuk interaksi
- ✅ Membuat UI sederhana dengan React

---

## 📖 Penjelasan Materi

### 🧠 1. Kenapa Perlu React?

Di materi sebelumnya (Vanilla JS):

- Manipulasi DOM manual ❌
- Render ulang manual ❌
- Kode mulai berantakan saat besar ❌

💡 Masalah utama:
Semakin besar aplikasi, semakin banyak:
- event
- function
- manipulasi DOM

👉 Akhirnya:
- sulit dibaca
- sulit di-maintain
- rawan bug

---

### 🚀 Solusi: React

React adalah:
> Library JavaScript untuk membangun UI berbasis component

💡 Penjelasan:
React membantu kita:
- memecah UI menjadi bagian kecil
- mengelola perubahan data secara otomatis
- menghindari manipulasi DOM manual

👉 Analogi:
- Vanilla JS = rakit semuanya manual
- React = pakai lego (component siap pakai)

---

### 🧩 2. Apa itu Component?

Component = potongan UI yang bisa digunakan ulang

Contoh:
- Navbar
- Card produk
- Button
- Form

💡 Penjelasan:
Daripada menulis HTML panjang:
- kita pecah jadi bagian kecil
- tiap bagian punya fungsi sendiri

👉 Keuntungan:
- kode lebih rapi
- mudah dipakai ulang
- mudah dikembangkan

---

### 💻 Contoh Component

```jsx
function Card() {
    return <h1>Hello React</h1>;
}
```

💡 Penjelasan:
- `function Card()` = membuat component
- `return` = isi tampilan (UI)
- `<h1>` = JSX

👉 Artinya:
Component ini akan menampilkan teks “Hello React”

---

### 🧠 3. JSX (Sintaks React)

JSX = HTML di dalam JavaScript

```jsx
const element = <h1>Hello</h1>;
```

💡 Penjelasan:
JSX memungkinkan kita:
- menulis UI seperti HTML
- tapi tetap di dalam JavaScript

👉 Kenapa penting?
Karena:
- lebih mudah dibaca
- lebih cepat ditulis
- lebih natural untuk UI

👉 Catatan:
JSX bukan HTML asli, tapi akan diubah oleh React

---

### 🔗 4. Props (Kirim Data)

Props digunakan untuk:
> Mengirim data ke component

---

### 💻 Contoh Props

```jsx
function Card(props) {
    return <h2>{props.nama}</h2>;
}
```

Pemakaian:

```jsx
<Card nama="Laptop" />
<Card nama="HP" />
```

💡 Penjelasan:
- `props` = parameter dalam component
- `props.nama` = data yang dikirim

👉 Alur:
1. Kirim data dari luar (`nama="Laptop"`)
2. Terima di dalam component (`props.nama`)
3. Tampilkan ke UI

👉 Keuntungan:
- Component jadi dinamis
- Bisa dipakai berulang dengan data berbeda

---

### ⚙️ 5. State (Data Dinamis)

State = data yang bisa berubah dan mempengaruhi UI

---

### 💻 Contoh State

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
}
```

💡 Penjelasan:

- `useState(0)` → nilai awal = 0
- `count` → nilai sekarang
- `setCount` → fungsi untuk mengubah nilai

👉 Saat tombol diklik:
- `setCount()` dijalankan
- state berubah
- UI otomatis update

👉 Ini bedanya dengan JS biasa:
- Tidak perlu `document.getElementById`
- Tidak perlu update manual

---

### 🔁 6. Rendering List (Array)

```jsx
const produk = ["Laptop", "HP", "Keyboard"];

function App() {
    return (
        <div>
            {produk.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}
```

💡 Penjelasan:

- `map()` → looping data
- `{}` → masuk ke JavaScript
- `key` → identitas unik tiap item

👉 Kenapa pakai key?
Agar React:
- tahu mana data yang berubah
- update UI lebih efisien

---

### 🧠 7. Event di React

```jsx
<button onClick={handleClick}>Klik</button>
```

💡 Penjelasan:

- `onClick` = event
- `handleClick` = function yang dijalankan

👉 Perbedaan dengan JS:
- React pakai camelCase (`onClick`)
- Tidak pakai addEventListener

---

### 🏗️ 8. Struktur Project React

```
src/
├── App.js
├── components/
│   └── Card.js
```

💡 Penjelasan:

- `App.js` = root utama
- `components/` = tempat komponen

👉 Tujuan:
- kode tidak menumpuk
- lebih rapi
- mudah dikembangkan

---

### 🚀 9. Cara Menjalankan React

Gunakan:

```
npx create-react-app project
cd project
npm start
```

Atau modern:

```
npm create vite@latest
```

💡 Penjelasan:

React tidak bisa langsung jalan seperti HTML biasa karena:
- butuh bundler
- butuh compiler (JSX)

👉 Tools ini yang menyiapkan semuanya

---

### 🔗 10. Hubungan dengan Materi Sebelumnya

Vanilla JS:

- Manipulasi DOM manual
- Update UI manual

React:

- UI otomatis update
- Lebih clean

💡 Insight penting:
> React bukan mengganti JS, tapi menyederhanakan cara kerja JS

---

## ⚠️ Kesalahan Umum

- ❌ Lupa return di component → tidak tampil
- ❌ Tidak pakai key → warning/error
- ❌ Salah JSX → error
- ❌ Bingung props vs state

---

## 🧪 Mini Practice

Coba buat:

👉 Component Card:
- Menampilkan nama produk
- Gunakan props

👉 Bonus:
- Tambahkan state untuk toggle

---

## 🚀 Insight Penting

Sekarang kamu sudah:

- Masuk dunia framework
- Menggunakan cara kerja modern frontend
- Siap ke level lebih tinggi

---

## 💡 Mindset Penting

> "Framework bukan untuk menggantikan JavaScript, tapi untuk mempermudah mengelola aplikasi."

---

## 🏁 Output

Setelah materi ini:

👉 Kamu bisa membuat UI sederhana dengan React  
👉 Kamu siap masuk ke konsep aplikasi modern

---

🔥 **Next Step:**
👉 Fullstack Mindset (Frontend + API + Deploy)