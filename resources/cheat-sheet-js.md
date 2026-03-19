# ⚡ JavaScript Cheat Sheet (Modern 2026)

Panduan cepat JavaScript untuk bikin website jadi interaktif & dinamis 🚀

---

## 🧠 Cara Menambahkan JavaScript

### Inline (tidak direkomendasikan)
```html
    <button onclick="alert('Hello')">Klik</button>
```
### Internal
```html
    <script>
        console.log("Hello");
    </script>
```
### External (WAJIB)
```html
    <script src="script.js"></script>
```
---

## 📦 Variable (Modern)
```js
    let nama = "Bagus";
    const umur = 20;
```
⚠️ Gunakan:
- `let` → bisa diubah
- `const` → tidak bisa diubah (default)

---

## 🔤 Tipe Data
```js
    let text = "Hello";     // String
    let number = 10;       // Number
    let isTrue = true;     // Boolean
    let kosong = null;     // Null
    let belum;             // Undefined
```

---

## 🔁 Operator
```js
    let a = 10;
    let b = 5;

    a + b  // 15
    a - b  // 5
    a * b  // 50
    a / b  // 2
```

---

## 🔀 Conditional
```js
    let nilai = 80;

    if (nilai >= 75) {
        console.log("Lulus");
    } else {
        console.log("Tidak Lulus");
    }
```

---

## 🔁 Loop

### for
```js
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
```

### forEach (modern)
```js
    let data = [1, 2, 3];

    data.forEach(function(item) {
        console.log(item);
    });
```

---

## 📚 Array
```js
    let buah = ["Apel", "Jeruk", "Mangga"];

    console.log(buah[0]); // Apel
```

---

### Method Penting
```js
    buah.push("Pisang");      // tambah
    buah.pop();               // hapus
    buah.map(item => item);   // transform
    buah.filter(item => item !== "Apel");
```
---

## 🧩 Object
```js
    let siswa = {
        nama: "Bagus",
        umur: 20
    };

    console.log(siswa.nama);
```

---

## ⚡ Function

### Function biasa
```js
    function sapa() {
        console.log("Halo");
    }
```

### Arrow function (modern)
```js
    const sapa = () => {
        console.log("Halo");
    };
```

---

## 🌐 DOM (WAJIB)

### Ambil element
```js
    document.getElementById("judul");
    document.querySelector(".class");
```
---

### Ubah isi
```js
    document.getElementById("judul").innerText = "Hello";
```

---

### Event
```js
    const btn = document.querySelector("button");

    btn.addEventListener("click", function() {
        alert("Diklik!");
    });
```

---

## 📡 Fetch API (WAJIB)
```js
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
```

---

## ⏳ Async Await (Modern)
```js
    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }

    getData();
```

---

## ⚠️ Kesalahan Umum

❌ Masih pakai `var`  
❌ Tidak pakai `addEventListener`  
❌ Tidak ngerti array & object  
❌ Tidak pakai fetch API  
❌ Code berantakan  

---

## 💡 Tips Cepat

- Gunakan `const` dulu, baru `let`
- Biasakan pakai arrow function
- Gunakan `querySelector`
- Gunakan array method (map, filter)
- Console.log untuk debugging

---

## 🔥 Shortcut Penting

| Shortcut | Fungsi |
|----------|--------|
| `clg` | console.log |
| `fn` | function |
| `afn` | arrow function |

---

## 🎯 Kesimpulan

JavaScript adalah:
- ⚡ Otak website
- 🎮 Interaksi user
- 🌐 Koneksi ke API

Kalau JS kamu kuat → kamu siap jadi frontend developer.

---

🔥 **Next Step:** lanjut ke Mini Project