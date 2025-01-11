const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

const openPopup = () => {
  popup.classList.add("open-popup");
};
const closePopup = () => {
  popup.classList.remove("open-popup");
};

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
