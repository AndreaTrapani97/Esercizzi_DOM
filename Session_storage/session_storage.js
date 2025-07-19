$email = document.querySelector(".email");
$firstname = document.querySelector(".firstname");
$lastname = document.querySelector(".lastname");
$btn = document.querySelector(".btn");
$titolo = document.querySelector(".title-name");

$btn.addEventListener("click", creaPersona);

function creaPersona() {
  let persona = {
    email: $email.value,
    firstname: $firstname.value,
    lastname: $lastname.value,
  };
  sessionStorage.setItem("person", JSON.stringify(persona));
  let personaJ = JSON.parse(sessionStorage.getItem("person"));
  $titolo.innerHTML = personaJ.firstname;
}
let personaSalvata = sessionStorage.getItem("person");

window.addEventListener("DOMContentLoaded", () => {
  let personaJson = JSON.parse(personaSalvata);
  if (personaJson) {
    $titolo.innerHTML = personaJson.firstname;
  }
});
