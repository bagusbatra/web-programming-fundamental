/* =========================
   AMBIL ELEMEN DARI HTML
   ========================= */

/* Mengambil judul utama */
const title = document.getElementById("title"); // Mengambil elemen dengan id "title"

/* Mengambil tombol-tombol */
const btnText = document.getElementById("btn-text"); // Tombol ubah teks
const btnColor = document.getElementById("btn-color"); // Tombol ubah warna background
const btnToggle = document.getElementById("btn-toggle"); // Tombol toggle deskripsi
const btnShow = document.getElementById("btn-show"); // Tombol tampilkan nama
const btnDark = document.getElementById("btn-dark"); // Tombol dark mode

/* Mengambil elemen teks */
const description = document.getElementById("description"); // Paragraf deskripsi
const output = document.getElementById("output"); // Tempat output nama

/* Mengambil input */
const inputNama = document.getElementById("input-nama"); // Input nama

/* Mengambil semua card */
const cards = document.querySelectorAll(".card"); // Mengambil semua elemen dengan class "card"



/* =========================
   1. UBAH TEKS
   ========================= */

/* Menambahkan event klik ke tombol */
btnText.addEventListener("click", function() {
    // Mengubah isi teks pada judul
    title.textContent = "Teks berhasil diubah! 🚀";
});



/* =========================
   2. UBAH WARNA BACKGROUND
   ========================= */

btnColor.addEventListener("click", function() {
    // Mengubah warna background body
    document.body.style.backgroundColor = "lightblue";
});



/* =========================
   3. TOGGLE DESKRIPSI
   ========================= */

btnToggle.addEventListener("click", function() {

    // Mengecek apakah deskripsi sedang tampil
    if (description.style.display === "none") {
        description.style.display = "block"; // Tampilkan kembali
    } else {
        description.style.display = "none"; // Sembunyikan
    }

});



/* =========================
   4. INPUT → OUTPUT
   ========================= */

btnShow.addEventListener("click", function() {

    // Mengambil nilai dari input
    const nama = inputNama.value;

    // Menampilkan hasil ke paragraf output
    output.textContent = "Halo, " + nama + "! 👋";

});



/* =========================
   5. CLICK CARD (LOOP)
   ========================= */

/* Loop semua card */
cards.forEach(function(card) {

    // Tambahkan event klik ke setiap card
    card.addEventListener("click", function() {

        // Mengubah warna background card
        card.style.backgroundColor = "lightgreen";

    });

});



/* =========================
   6. DARK MODE
   ========================= */

btnDark.addEventListener("click", function() {

    // Menambahkan atau menghapus class "dark" di body
    document.body.classList.toggle("dark");

});



/* =========================
   BONUS: RESET INPUT
   ========================= */

btnShow.addEventListener("click", function() {

    // Mengosongkan input setelah klik
    inputNama.value = "";

});