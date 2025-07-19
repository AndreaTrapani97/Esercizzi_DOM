let $email = document.querySelector(".email");
let $firstname = document.querySelector(".firstname");
let $lastname = document.querySelector(".lastname");
let $btn = document.querySelector(".btn");
let $titolo = document.querySelector(".title-name");
$btn.addEventListener("click", salva);

window.addEventListener("DOMContentLoaded", () => {
  let personaLocale = localStorage.getItem("person");
  if (personaLocale) {
    let personaJson = JSON.parse(personaLocale);
    $titolo.innerHTML = personaJson.firstname;
  }
});

function salva() {
  let person = {
    email: $email.value,
    firstname: $firstname.value,
    lastname: $lastname.value,
  };

  localStorage.setItem("person", JSON.stringify(person));
  let personaLocale = localStorage.getItem("person");
  let personaJson = JSON.parse(personaLocale);
  $titolo.innerHTML = personaJson.firstname;
}
