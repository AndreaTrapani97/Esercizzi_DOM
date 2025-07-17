const $h1 = document.querySelector("h1");
const $body = document.querySelector("body");
const $btn = document.querySelector(".btn");

$btn.addEventListener("click", darkTheme);

function darkTheme() {
  $body.classList.toggle("theme");
}
