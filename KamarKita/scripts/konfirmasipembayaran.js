// konfirmasi pembayaran 
    function showPopup(modalId) {
    hideAllPopups();
    let popup = document.getElementById(modalId);
    popup.classList.remove("hidden");
}

function hideAllPopups() {
    let modals = document.querySelectorAll('[id^="btnModal"]');
    modals.forEach(modal => {
        modal.classList.add("hidden");
    });
}

function hidePopup() {
    hideAllPopups();
}

function btnPageHome() {
window.location.href = "/KamarKita/pages/tabHome.html";
}

function btnPagePembayaran() {
window.location.href = "/KamarKita/pages/pemesanan.html";
}


    // Membuat waktu berjalan

    let countdownTime = 30 * 60;


    function updateCountdown() {
        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;


    let formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            document.getElementById('countdown').innerHTML = `
    <h1 class="text-5xl font-bold">${formattedTime}</h1>
    <p class="py-4">Masa berlaku kode pembayaran tersisa</p>
`;
        }
        function startCountdown() {

            updateCountdown();


    let countdownInterval = setInterval(function () {
        countdownTime--;


        if (countdownTime <= 0) {
            clearInterval(countdownInterval);

        } else {
            updateCountdown();
        }
    }, 1000);
}


    startCountdown();