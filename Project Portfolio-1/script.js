const slide = document.querySelector("nav ul");
const btn = document.querySelector(".icon");
btn.addEventListener("click",function () {
  slide.classList.toggle("slide")
})