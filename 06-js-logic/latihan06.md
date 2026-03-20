# 📝 Latihan

## 🎯 Tujuan

- Mengelola data menggunakan Array & Object
- Menampilkan data secara dinamis ke HTML
- Menghubungkan 2 halaman dengan data yang sama
- Memahami konsep sederhana "state" (data pusat)
- Mulai berpikir seperti membuat aplikasi nyata

---

## 📌 Instruksi

Gunakan hasil dari **Latihan 05 (Website Interaktif)**, lalu upgrade menjadi:

👉 **Mini App dengan 2 halaman**

---

## 🧱 STRUKTUR TAMBAHAN

Tambahkan 1 halaman baru:

- `index.html` → halaman utama (sudah ada)
- `data.html` → halaman baru (WAJIB dibuat)

---

## 🧩 1. Data Utama (WAJIB)

Buat array of object:

Contoh:
```js
    const data = [
        { nama: "Laptop", harga: 7000000 },
        { nama: "HP", harga: 3000000 }
    ];
```

👉 Data ini harus:
- Ditampilkan di `index.html`
- Ditampilkan juga di `data.html`

---

## 🖥️ 2. Halaman Index

Di halaman utama:

- Tampilkan data dalam bentuk:
  - Card / list
- Tambahkan:
  - Button "Tambah Data"
  - Button "Lihat Semua Data" → menuju `data.html`

---

## 📄 3. Halaman Data (data.html)

Halaman ini berisi:

- Semua data ditampilkan
- Tampilan lebih fokus ke list

Tambahkan:
- Tombol kembali ke index

---

## 🔄 4. Sinkronisasi Data (PENTING)

Data harus:

- Sama di kedua halaman
- Update otomatis jika:
  - Tambah data
  - Hapus data

👉 Hint:
Gunakan:
- `localStorage`

---

## 💾 5. Simpan Data (WAJIB)

Gunakan:

    localStorage.setItem()
    localStorage.getItem()

Tujuan:
👉 Data tidak hilang saat pindah halaman

---

## ⚙️ 6. Fitur Wajib

Minimal harus ada:

### a. Tambah Data
- Input nama & harga
- Data masuk ke array
- Tersimpan di localStorage

---

### b. Tampilkan Data
- Data muncul di:
  - index.html
  - data.html

---

### c. Hapus Data
- Bisa hapus item
- Update otomatis

---

## ⭐ Challenge

🔥 Level Up (Real App Thinking):

### 1. Edit Data (Advanced)
- Bisa mengubah nama / harga

---

### 2. Validasi Lebih Ketat
- Nama tidak boleh kosong
- Harga harus angka > 0

---

### 3. Format Harga
Tampilkan:

    Rp 7.000.000

---

### 4. Empty State
Jika tidak ada data:

👉 Tampilkan:
    "Data masih kosong"

---

### 5. Navigasi Lebih Baik
Tambahkan:
- Navbar sederhana antar halaman

---

## 💡 Tips

- Gunakan JSON:

    JSON.stringify()
    JSON.parse()

- Jangan simpan object langsung ke localStorage
- Pisahkan:
  - Data
  - Render
  - Event

---

## 🚀 Insight

Di tahap ini kamu naik level besar:

Dari:
👉 "Website interaktif"

Menjadi:
👉 "Mini aplikasi dengan data persistence"

---

## 🧠 Mindset Penting

> "Aplikasi bukan hanya UI, tapi bagaimana data disimpan, diambil, dan ditampilkan secara konsisten."

---

## 📂 **PENGUMPULAN TUGAS**

- Simpan file tugas yang telah dikerjakan pada folder penugasan sebagai berikut:
    - Masukkan kedalam folder nama kamu 
    - Jika belum ada folder nama kamu silahkan dibuat sendiri
    ```text
    penugasan/nama_kamu/
    ```
    - Lalu buat folder lagi dengan nama persis dengan materi penugasan
    ```text
    penugasan/nama_kamu/01-html-semantic/
    ```
    - Letakkan semua file yang telah anda buat sesuai pada instruksi penugasan pada folder tersebut

---

🔥 Next Level:
👉 Fetch API (Ambil data dari internet)