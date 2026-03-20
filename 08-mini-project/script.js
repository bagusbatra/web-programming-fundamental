/* =========================
   DATA LOKAL (STATE)
   ========================= */

/* Ambil data dari localStorage jika ada */
let localProduk = JSON.parse(localStorage.getItem("produk")) || [];


/* =========================
   AMBIL ELEMEN HTML
   ========================= */

const apiContainer = document.getElementById("api-products"); // Data API
const localContainer = document.getElementById("local-products"); // Data lokal

const statusText = document.getElementById("status"); // Status

const inputNama = document.getElementById("input-nama"); // Input nama
const inputHarga = document.getElementById("input-harga"); // Input harga

const btnAdd = document.getElementById("btn-add"); // Tombol tambah

const btnAll = document.getElementById("btn-all"); // Filter semua
const btnCheap = document.getElementById("btn-cheap"); // Filter murah
const btnExpensive = document.getElementById("btn-expensive"); // Filter mahal



/* =========================
   SIMPAN KE LOCALSTORAGE
   ========================= */

function saveToLocalStorage() {
    localStorage.setItem("produk", JSON.stringify(localProduk)); // Simpan data
}



/* =========================
   FORMAT HARGA
   ========================= */

function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID"); // Format ke rupiah
}



/* =========================
   RENDER PRODUK LOKAL
   ========================= */

function renderLocal(data) {

    localContainer.innerHTML = ""; // Reset container

    /* Jika data kosong */
    if (data.length === 0) {
        localContainer.innerHTML = "<p>Belum ada produk</p>";
        return;
    }

    /* Loop data */
    data.forEach(function(item, index) {

        localContainer.innerHTML += `
            <div class="card">
                <h3>${item.nama}</h3>
                <p>${formatRupiah(item.harga)}</p>
                <button class="btn" onclick="hapusProduk(${index})">Hapus</button>
            </div>
        `;
    });
}



/* =========================
   HAPUS PRODUK
   ========================= */

function hapusProduk(index) {

    localProduk.splice(index, 1); // Hapus data
    saveToLocalStorage(); // Simpan ulang
    renderLocal(localProduk); // Render ulang
}



/* =========================
   TAMBAH PRODUK
   ========================= */

btnAdd.addEventListener("click", function() {

    const nama = inputNama.value; // Ambil nama
    const harga = parseInt(inputHarga.value); // Ambil harga

    /* Validasi */
    if (nama === "" || isNaN(harga) || harga <= 0) {
        alert("Input tidak valid!");
        return;
    }

    /* Tambah ke array */
    localProduk.push({
        nama: nama,
        harga: harga
    });

    saveToLocalStorage(); // Simpan
    renderLocal(localProduk); // Render ulang

    /* Reset input */
    inputNama.value = "";
    inputHarga.value = "";
});



/* =========================
   FILTER PRODUK LOKAL
   ========================= */

/* Semua */
btnAll.addEventListener("click", function() {
    renderLocal(localProduk);
});

/* Murah */
btnCheap.addEventListener("click", function() {

    const murah = localProduk.filter(function(item) {
        return item.harga < 5000000;
    });

    renderLocal(murah);
});

/* Mahal */
btnExpensive.addEventListener("click", function() {

    const mahal = localProduk.filter(function(item) {
        return item.harga >= 5000000;
    });

    renderLocal(mahal);
});



/* =========================
   FETCH DATA API
   ========================= */

async function getApiData() {

    try {
        /* Loading */
        statusText.textContent = "Loading data API...";
        statusText.className = "loading";

        /* Fetch */
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Gagal fetch API");
        }

        const data = await response.json();

        /* Success */
        statusText.textContent = "Data API berhasil dimuat ✅";
        statusText.className = "success";

        renderApi(data);

    } catch (error) {

        /* Error */
        statusText.textContent = "Gagal mengambil data ❌";
        statusText.className = "error";

        console.log(error);
    }
}



/* =========================
   RENDER DATA API
   ========================= */

function renderApi(data) {

    apiContainer.innerHTML = ""; // Reset

    /* Ambil 6 data saja */
    const limited = data.slice(0, 6);

    limited.forEach(function(item) {

        apiContainer.innerHTML += `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${formatRupiah(Math.floor(item.price * 15000))}</p>
            </div>
        `;
    });
}



/* =========================
   LOAD AWAL
   ========================= */

/* Render data lokal saat pertama */
renderLocal(localProduk);

/* Ambil data API otomatis */
getApiData();