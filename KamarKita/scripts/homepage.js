// button hote, vila, kostan
const buttonHotel = document.getElementById("buttonHotel");
const buttonVilla = document.getElementById("buttonVilla");
const buttonKostan = document.getElementById("buttonKostan");

buttonHotel.addEventListener("click", () => {
  buttonHotel.classList.remove("bg-white", "text-blue-500");
  buttonHotel.classList.add("bg-blue-500", "text-white");

  buttonVilla.classList.remove("bg-blue-500", "text-white");
  buttonVilla.classList.add("bg-white", "text-blue-500");

  buttonKostan.classList.remove("bg-blue-500", "text-white");
  buttonKostan.classList.add("bg-white", "text-blue-500");
});

buttonVilla.addEventListener("click", () => {
  buttonVilla.classList.remove("bg-white", "text-blue-500");
  buttonVilla.classList.add("bg-blue-500", "text-white");

  buttonHotel.classList.remove("bg-blue-500", "text-white");
  buttonHotel.classList.add("bg-white", "text-blue-500");

  buttonKostan.classList.remove("bg-blue-500", "text-white");
  buttonKostan.classList.add("bg-white", "text-blue-500");
});

buttonKostan.addEventListener("click", () => {
  buttonKostan.classList.remove("bg-white", "text-blue-500");
  buttonKostan.classList.add("bg-blue-500", "text-white");

  buttonHotel.classList.remove("bg-blue-500", "text-white");
  buttonHotel.classList.add("bg-white", "text-blue-500");

  buttonVilla.classList.remove("bg-blue-500", "text-white");
  buttonVilla.classList.add("bg-white", "text-blue-500");
});

// pop up CS
document.getElementById('headsetIcon').addEventListener('click', function() {
  document.querySelector('.popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.querySelector('.popup').style.display = 'none';
});


// scrolling 
const btnHotel = document.getElementById('buttonHotel');
const btnVilla = document.getElementById('buttonVilla');
const btnKostan = document.getElementById('buttonKostan');

btnHotel.addEventListener('click', () => {
  // Dapatkan elemen card hotel
  const cardHotel = document.querySelector('.card-hotel');

  // Scroll ke elemen card hotel
  cardHotel.scrollIntoView({ behavior: 'smooth' });
});

btnVilla.addEventListener('click', () => {
  // Dapatkan elemen card villa
  const cardVilla = document.querySelector('.card-villa');

  // Scroll ke elemen card villa
  cardVilla.scrollIntoView({ behavior: 'smooth' });
});

btnKostan.addEventListener('click', () => {
  // Dapatkan elemen card kostan
  const cardKostan = document.querySelector('.card-kostan');

  // Scroll ke elemen card kostan
  cardKostan.scrollIntoView({ behavior: 'smooth' });
});

