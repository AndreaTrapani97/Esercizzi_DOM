let $input = document.querySelector("input");
let $btn = document.querySelector(".btn");
let $ul = document.querySelector("ul");

$btn.addEventListener("click", aggiungiLista);

function aggiungiLista() {
  const li = document.createElement("li");
  let value = $input.value;
  li.innerHTML += `<li>${value}</li><input type="checkbox">`;
  $ul.appendChild(li);
  $input.value = "";
}
