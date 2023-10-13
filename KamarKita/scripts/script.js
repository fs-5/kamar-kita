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

