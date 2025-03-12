document.addEventListener("DOMContentLoaded", function () {
    console.log("Undangan digital siap!");

    let audio = document.getElementById("background-music");

    // Periksa apakah musik sudah diputar sebelumnya
    if (localStorage.getItem("musicPlaying") === "true") {
        audio.play().catch(error => console.log("Autoplay diblokir:", error));
    }

    // Dapatkan tombol
    const button = document.getElementById("open-invitation");

    if (button) {
        button.addEventListener("click", function () {
            // Mulai musik setelah tombol ditekan jika belum berjalan
            if (localStorage.getItem("musicPlaying") !== "true") {
                audio.play().catch(error => console.log("Autoplay diblokir:", error));
                localStorage.setItem("musicPlaying", "true");
            }

            // Pindah ke halaman undangan
            window.location.href = "undangan.html";
        });
    }
});
