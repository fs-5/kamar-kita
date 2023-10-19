// login
document.addEventListener('DOMContentLoaded', function () {
  //memanggil url API
  const apiUrl = 'https://652a0f4f55b137ddc83f45fa.mockapi.io/Datauser';

  function newUser(userName, password) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // validasi login
        const newUser = data.find((newUser) => newUser.userName === userName && newUser.password === password);
        if (newUser) {
          btnModal.classList.remove('hidden');
        } else {
          alert('Username atau password salah. Silahkan coba lagi');
        }
      })
      .catch((error) => console.error('Error', error));
  }

  //validasi jika formnya kosong

  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if (userName && password) {
      newUser(userName, password);
    } else {
      alert('masukkan username/email dan password');
    }
  });
});

//Pop login

function btnPageLogin() {
  window.location.replace('home.html');
}

// register

function btnRegis() {
  event.preventDefault();

  let userName = document.getElementById('userName').value;
  let email = document.getElementById('email').value;
  let noHp = document.getElementById('noHp').value;
  let password = document.getElementById('password').value;

  // Validasi input
  if (!userName || !email || !noHp || !password) {
    alert('Mohon data harus di isi');
    return;
  }
  // Jika semua validasi berhasil, kirim permintaan dengan Fetch API
  let newUser = {
    userName: userName,
    email: email,
    noHp: noHp,
    password: password,
  };

  fetch('https://652a0f4f55b137ddc83f45fa.mockapi.io/Datauser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        // Registrasi berhasil, lakukan sesuatu (mungkin arahkan ke halaman selamat datang).
        modal.classList.remove('hidden');
      } else {
        // Registrasi gagal, tampilkan pesan kesalahan.
        alert('Data yang di isi kurang lengkap');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

//Pop up register

function btnPageRegis() {
  window.location.replace('login.html');
}
