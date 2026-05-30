const getString = window.location.search;
const formInfo = new URLSearchParams(getString);

let fullName = document.createElement("p");
let email = document.createElement("p");
let phone = document.createElement("p");
let businessName = document.createElement("p");
let timestamp = document.createElement("p");

fullName.textContent = `Nombre: ${formInfo.get("first-name")} ${formInfo.get("last-name")}`;
email.textContent = `Correo electrónico: ${formInfo.get("email")}`;
phone.textContent = `Teléfono: ${formInfo.get("phone-number")}`;
businessName.textContent = `Nombre de la empresa: ${formInfo.get("business-name")}`;

const time = Date.now(Number(formInfo.get("timestamp")));
const date = new Date(time);
timestamp.textContent = `Formulario enviado: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

document.querySelector("#results").appendChild(fullName);
document.querySelector("#results").appendChild(email);
document.querySelector("#results").appendChild(phone);
document.querySelector("#results").appendChild(businessName);
document.querySelector("#results").appendChild(timestamp);
