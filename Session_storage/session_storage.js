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
  $email.value = "";
  $firstname.value = "";
  $lastname.value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  let personaSalvata = sessionStorage.getItem("person");
  if (personaSalvata) {
    let personaJson = JSON.parse(personaSalvata);
    $titolo.innerHTML = personaJson.firstname;
  }
});
