// pop up
function btnLogin(e) {
  event.preventDefault();
  let btnModal = document.getElementById('btnModal');
  btnModal.classList.add('oppacity-100');
  btnModal.classList.remove('hidden');

  let newUser = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  fetch('https://652a0f4f55b137ddc83f45fa.mockapi.io/Datauser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (response.ok) {
        return response.json({ btnModal });
      } else {
        return Promise.reject('ada yang tidak sesuai');
      }
    })
    .then((json) => innerHtml(json))
    .catch((error) => innerHtml('error ' + error));
}

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
