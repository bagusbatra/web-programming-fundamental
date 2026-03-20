/* =========================
   DATA (ARRAY OF OBJECT)
   ========================= */

/* Data produk (seperti database sederhana) */
let produk = [
    { nama: "Laptop", harga: 7000000 },
    { nama: "HP", harga: 3000000 },
    { nama: "Keyboard", harga: 500000 },
    { nama: "Monitor", harga: 2000000 }
];


/* =========================
   AMBIL ELEMEN HTML
   ========================= */

const productList = document.getElementById("product-list"); // Container produk

const btnAll = document.getElementById("btn-all"); // Tombol semua
const btnCheap = document.getElementById("btn-cheap"); // Tombol murah
const btnExpensive = document.getElementById("btn-expensive"); // Tombol mahal

const inputNama = document.getElementById("input-nama"); // Input nama
const inputHarga = document.getElementById("input-harga"); // Input harga
const btnAdd = document.getElementById("btn-add"); // Tombol tambah



/* =========================
   FUNCTION RENDER PRODUK
   ========================= */

/* Fungsi untuk menampilkan produk ke HTML */
function renderProduk(data) {

    productList.innerHTML = ""; // Reset isi sebelum render ulang

    /* Loop semua data */
    data.forEach(function(item, index) {

        /* Tambahkan HTML ke container */
        productList.innerHTML += `
            <div class="card">
                <h3>${item.nama}</h3>
                <p>Rp ${item.harga}</p>
                <button class="btn" onclick="hapusProduk(${index})">Hapus</button>
            </div>
        `;
    });

}



/* =========================
   FILTER PRODUK
   ========================= */

/* Tampilkan semua */
btnAll.addEventListener("click", function() {
    renderProduk(produk); // Render semua data
});

/* Produk murah (< 5 juta) */
btnCheap.addEventListener("click", function() {

    const murah = produk.filter(function(item) {
        return item.harga < 5000000; // Kondisi filter
    });

    renderProduk(murah); // Tampilkan hasil filter
});

/* Produk mahal (>= 5 juta) */
btnExpensive.addEventListener("click", function() {

    const mahal = produk.filter(function(item) {
        return item.harga >= 5000000;
    });

    renderProduk(mahal);
});



/* =========================
   TAMBAH PRODUK
   ========================= */

btnAdd.addEventListener("click", function() {

    /* Ambil nilai input */
    const nama = inputNama.value;
    const harga = parseInt(inputHarga.value);

    /* Validasi sederhana */
    if (nama === "" || isNaN(harga)) {
        alert("Nama dan harga harus diisi!");
        return; // Hentikan proses
    }

    /* Tambahkan ke array */
    produk.push({
        nama: nama,
        harga: harga
    });

    /* Render ulang */
    renderProduk(produk);

    /* Reset input */
    inputNama.value = "";
    inputHarga.value = "";
});



/* =========================
   HAPUS PRODUK
   ========================= */

/* Function global (dipanggil dari tombol) */
function hapusProduk(index) {

    /* Hapus 1 data berdasarkan index */
    produk.splice(index, 1);

    /* Render ulang */
    renderProduk(produk);
}



/* =========================
   LOAD AWAL
   ========================= */

/* Tampilkan data saat pertama kali dibuka */
renderProduk(produk);