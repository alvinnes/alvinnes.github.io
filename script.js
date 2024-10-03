// code navbar
const slide = document.querySelector("nav ul");
const btn = document.querySelector(".icons");

btn.addEventListener("click", function () {
  slide.classList.toggle("slide");
});

const notif = document.querySelector(".alert");
const tombolKirim = document.querySelector(".btn-kirim");
const tombolLoading = document.querySelector(".btn button");
const tombolClose = document.querySelector(".icon-x");
tombolClose.addEventListener("click", function () {
  notif.style.display = "none";
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz7KKQKz4KrjXZDeParajXqJISkmuHHuhdZAnYfcPULsbJD-i185a1dGfSc5mf_Tv0r/exec";
const form = document.forms["alvinnes-contact-from"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  tombolKirim.classList.toggle("tombol-kirim");
  tombolLoading.classList.toggle("tombol-loading");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      tombolKirim.classList.toggle("tombol-kirim");
      tombolLoading.classList.toggle("tombol-loading");
      notif.classList.toggle("hasil-submit");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
