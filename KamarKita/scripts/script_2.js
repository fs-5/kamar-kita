// pop up
function btnLogin() {
  let btnModal = document.getElementById('btnModal');
  let formLogin = document.getElementById('formLogin');
  btnModal.classList.remove('hidden');
  btnModal.classList.add('flex');
  btnModal.classList.add('oppacity-100');
  formLogin.classList.add('hidden');
  event.preventDefault();
}

function btnPageLogin() {
  window.location.replace('index.html');
}

function btnRegis() {
  let modal = document.getElementById('modal');
  let formRegis = document.getElementById('formRegis');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.classList.add('oppacity-100');
  formRegis.classList.add('hidden');
  event.preventDefault();
}

function btnPageRegis() {
  window.location.replace('login.html');
}
