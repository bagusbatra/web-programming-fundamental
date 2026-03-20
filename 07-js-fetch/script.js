/* =========================
   AMBIL ELEMEN HTML
   ========================= */

const btnLoad = document.getElementById("btn-load"); // Tombol load data
const userList = document.getElementById("user-list"); // Container data user
const statusText = document.getElementById("status"); // Status loading / error



/* =========================
   FUNCTION FETCH DATA
   ========================= */

/* Function async untuk mengambil data dari API */
async function getUsers() {

    try {
        /* =========================
           LOADING STATE
           ========================= */

        statusText.textContent = "Loading data..."; // Tampilkan loading
        statusText.className = "loading"; // Tambahkan class loading

        userList.innerHTML = ""; // Kosongkan data sebelumnya


        /* =========================
           FETCH DATA
           ========================= */

        const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
        // Mengambil data dari API

        /* Cek apakah response berhasil */
        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }

        /* Ubah response ke JSON */
        const data = await response.json();


        /* =========================
           SUCCESS STATE
           ========================= */

        statusText.textContent = "Data berhasil dimuat ✅"; // Pesan sukses
        statusText.className = "success"; // Tambahkan class success


        /* =========================
           RENDER DATA KE HTML
           ========================= */

        data.forEach(function(user) {

            userList.innerHTML += `
                <div class="card">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Kota: ${user.address.city}</p>
                </div>
            `;

        });


    } catch (error) {

        /* =========================
           ERROR HANDLING
           ========================= */

        statusText.textContent = "Terjadi kesalahan ❌"; // Pesan error
        statusText.className = "error"; // Tambahkan class error

        console.log(error); // Debug di console
    }
}



/* =========================
   EVENT LISTENER
   ========================= */

/* Saat tombol diklik */
btnLoad.addEventListener("click", function() {

    getUsers(); // Jalankan function fetch

});