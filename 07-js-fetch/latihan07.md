# 📝 Latihan

## 🎯 Tujuan

- Mengambil data dari API menggunakan Fetch
- Menggabungkan data API dengan data lokal (localStorage)
- Menampilkan data secara dinamis ke halaman
- Memahami perbedaan data lokal vs data server
- Mulai berpikir seperti aplikasi modern (data hybrid)

---

## 📌 Instruksi

Gunakan hasil dari **Latihan 06 (Mini App 2 Halaman + localStorage)**, lalu upgrade menjadi:

👉 **Mini App dengan Data dari API + Data Lokal**

---

## 🧩 1. Ambil Data dari API (WAJIB)

Gunakan API:

    https://jsonplaceholder.typicode.com/users

Ambil data:
- Nama
- Email
- Kota

---

## 🖥️ 2. Tampilkan di Halaman

Data API harus tampil di:

- `index.html`
- `data.html`

👉 Sama seperti data lokal sebelumnya

---

## 🔄 3. Gabungkan Data (PENTING)

Sekarang kamu punya 2 sumber data:

1. Data lokal (localStorage)
2. Data API

👉 Tampilkan keduanya dalam 1 tampilan

Contoh:
- Card API
- Card lokal

---

## ⚙️ 4. Tambahkan Label Data

Bedakan:

- Data API → "Dari Server"
- Data lokal → "Data Kamu"

---

## 🔁 5. Loading State

Saat fetch:

- Tampilkan:
  👉 "Loading..."

Setelah selesai:
- Hilangkan loading

---

## ❌ 6. Error Handling

Jika gagal:
- Tampilkan:
  👉 "Gagal mengambil data"

---

## ⭐ Challenge

🔥 Level Up (Real App Thinking):

### 1. Filter Data API
- Tampilkan hanya user dari kota tertentu

---

### 2. Search (Advanced)
- Input pencarian
- Filter berdasarkan nama

---

### 3. Combine UI Lebih Rapi
- Pisahkan:
  - Section API
  - Section lokal

---

### 4. Auto Load
- Data langsung tampil saat halaman dibuka
- Tidak perlu klik tombol

---

## 💡 Tips

- Gunakan:
    async / await

- Gunakan:
    .filter() → untuk pencarian

---

## 🚀 Insight

Di tahap ini kamu naik level besar:

Dari:
👉 "App dengan data sendiri"

Menjadi:
👉 "App dengan data dari server + user"

---

## 🧠 Mindset Penting

> "Frontend modern mengelola banyak sumber data, bukan hanya satu."

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
👉 Mini Project (Gabungan semua materi)