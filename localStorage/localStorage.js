let $email = document.querySelector(".email");
let $firstname = document.querySelector(".firstname");
let $lastname = document.querySelector(".lastname");
let btn = document.querySelector(".btn");
btn.addEventListener("click", salva);

function salva() {
  let person = {
    email: $email.value,
    firstname: $firstname.value,
    lastname: $lastname.value,
  };

  localStorage.setItem("person", JSON.stringify(person));
}
