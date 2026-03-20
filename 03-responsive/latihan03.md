# 📝 Latihan

## 🎯 Tujuan

- Menguasai konsep Responsive Design
- Memahami Mobile First approach
- Mampu menggunakan media query
- Mengatur layout agar adaptif di berbagai device
- Mengembangkan layout dari latihan sebelumnya

---

## 📌 Instruksi

Gunakan hasil dari **Latihan 02 (Flexbox Layout)**, lalu upgrade menjadi **responsive website**.

---

### 1. Perbaiki Struktur (Mobile First)

Pastikan tampilan awal (default CSS):

- Semua elemen tersusun ke bawah (vertical)
- Tidak ada elemen yang “memaksa” horizontal
- Gunakan:
  - `flex-direction: column`
  - `width: 100%`

---

### 2. Responsive Navbar

- Mobile:
  - Logo di atas
  - Menu di bawah (stack ke bawah)
- Desktop:
  - Logo kiri
  - Menu kanan (horizontal)

---

### 3. Responsive Card (Content)

- Mobile:
  - Semua card ke bawah (1 kolom)
- Tablet:
  - 2 kolom
- Desktop:
  - 3 kolom

---

### 4. Responsive Project Section

- Mobile:
  - 1 kolom
- Desktop:
  - 2 kolom sejajar

---

### 5. Responsive Hobbies

- Mobile:
  - 1 kolom
- Tablet:
  - 2–3 kolom
- Desktop:
  - 4–5 kolom

---

### 6. Gunakan Unit Modern

Wajib gunakan:
- `rem` untuk font
- `%` untuk width
- Hindari terlalu banyak `px`

---

## ⭐ Challenge

🔥 Upgrade ke level lebih tinggi:

### 1. Tambahkan Breakpoint Sendiri
Jangan hanya 1 breakpoint.

Minimal:
- Mobile
- Tablet
- Desktop

---

### 2. Hover Effect (Interaktif)
Tambahkan efek pada:
- Card
- Project
- Hobbies

Contoh:
- Scale
- Shadow
- Warna berubah

---

### 3. Perbaiki Spacing & Layout
- Gunakan `gap` (jangan margin berlebihan)
- Pastikan jarak konsisten

---

### 4. Tambahkan Section Baru (Opsional)
Buat section:
👉 Testimoni / Profile / Skill (pilih salah satu)

---

## 💡 Tips

- Mulai dari mobile dulu (WAJIB)
- Gunakan `flex-wrap` agar fleksibel
- Gunakan `calc()` untuk pembagian kolom
- Gunakan DevTools (inspect) untuk cek tampilan

---

🚀 Hint Breakpoint:
```css
    @media (min-width: 768px) {
        /* tablet */
    }

    @media (min-width: 1024px) {
        /* desktop */
    }
```

---

## 🚀 Insight

Kalau kamu bisa menyelesaikan latihan ini:

- Kamu sudah naik dari “bisa bikin layout”  
👉 ke  
- “bisa bikin layout profesional yang adaptif”

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
Di pertemuan berikutnya, kamu akan belajar:
👉 **CSS Component & Reusable UI (biar tidak nulis ulang terus)**