// login
// function btnLogin(e) {
//   event.preventDefault();
//   let btnModal = document.getElementById('btnModal');
//   btnModal.classList.add('oppacity-100');
//   // btnModal.classList.remove('hidden');

//   let newUser = {
//     email: document.getElementById('email').value,
//     password: document.getElementById('password').value,
//   };

//   fetch('https://652a0f4f55b137ddc83f45fa.mockapi.io/Datauser', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newUser),
//   })
//     .then((response) => {
//       if (response.ok) {
//         btnModal.classList.remove('hidden');
//         return response.json();
//       } else {
//         return promise.reject('ada yang tidak sesuai');
//       }
//     })
//     .then((json) => innerWidth(json))
//     .catch((error) => alert('error ' + error));
// }

document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://652a0f4f55b137ddc83f45fa.mockapi.io/Datauser';

  function newUser(userName, password) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const newUser = data.find((newUser) => newUser.userName || email === userName || (email && newUser.password === password));
        if (newUser) {
          btnModal.classList.remove('hidden');
        } else {
          alert('Username/email atau password salah. Silahkan coba lagi');
        }
      })
      .catch((error) => console.error('Error', error));
  }

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

function btnPageLogin() {
  window.location.replace('index.html');
}

function btnRegis(e) {
  event.preventDefault();
  let modal = document.getElementById('modal');
  modal.classList.remove('hidden');

  let newUser = {
    userName: document.getElementById('userName').value,
    email: document.getElementById('email').value,
    noHp: document.getElementById('noHp').value,
    password: document.getElementById('password').value,
  };

  fetch('https://652a0f4f55b137ddc83f45fa.mockapi.io/Datauser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
}

function btnPageRegis() {
  window.location.replace('login.html');
}
