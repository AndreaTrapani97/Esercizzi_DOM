const $body = document.querySelector("body");
const $btn = document.querySelector(".btn");

$btn.addEventListener("click", darkTheme);

function darkTheme() {
  $body.classList.toggle("theme");
  $btn.innerHTML = $body.classList.contains("theme")
    ? "light mode"
    : "dark mode";
}
