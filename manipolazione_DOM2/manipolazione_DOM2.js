const form = document.querySelector("form");
const $firstName = document.querySelector("#firstName");
const $lastName = document.querySelector("#lastName");
const $age = document.querySelector("#age");

const person = {
  firstName: $firstName.value,
  lastName: $lastName.value,
  age: $age.value,
};

form.setAttribute("data-person", JSON.stringify(person));
