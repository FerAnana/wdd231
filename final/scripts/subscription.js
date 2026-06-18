const form = document.querySelector("form");
const timestampInput = document.querySelector("#timestamp");
const results = document.querySelector("#results");

if (form && timestampInput) {
  form.addEventListener("submit", () => {
    timestampInput.value = Date.now();
  });
} else if (results) {
  const getString = window.location.search;
  const formInfo = new URLSearchParams(getString);

  let fullName = document.createElement("p");
  let email = document.createElement("p");
  let timestamp = document.createElement("p");

  fullName.textContent = `Nombre: ${formInfo.get("first-name")} ${formInfo.get("last-name")}`;
  email.textContent = `Correo electrónico: ${formInfo.get("email")}`;

  const urlTimestamp = formInfo.get("timestamp");
  if (urlTimestamp) {
    const date = new Date(Number(urlTimestamp));

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    timestamp.textContent = `Formulario enviado: ${day}/${month}/${year} ${hours}:${minutes}`;
  } else {
    timestamp.textContent = "Formulario enviado: fecha no disponible";
  }

  results.appendChild(fullName);
  results.appendChild(email);
  results.appendChild(timestamp);
}
