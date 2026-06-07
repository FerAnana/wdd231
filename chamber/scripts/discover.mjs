import { places } from "../data/places.mjs";

export function displayPlaces(placesList = places) {
  const section = document.querySelector("#discover");

  if (!section) return;

  const fragment = document.createDocumentFragment();

  places.forEach((element) => {
    let container = document.createElement("article");
    container.setAttribute("class", "card");

    let name = document.createElement("h2");
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let address = document.createElement("address");
    let description = document.createElement("p");
    let button = document.createElement("button");

    name.textContent = element.name;
    image.setAttribute("src", element.img);
    image.setAttribute("alt", element.name);
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");
    image.setAttribute("loading", "lazy");
    address.textContent = `Address: ${element.address}`;

    figure.appendChild(image);

    description.textContent = element.description;
    button.textContent = "Aprender más";

    container.appendChild(name);
    container.appendChild(figure);
    container.appendChild(address);
    container.appendChild(description);
    container.appendChild(button);

    fragment.appendChild(container);
  });

  section.appendChild(fragment);
}

export function welcomeMessage() {
  const message = document.querySelector("#welcome-message");

  if (!message) return;

  const lastVisit = localStorage.getItem("last-visit");
  const currentTime = Date.now();

  if (!lastVisit) {
    message.textContent =
      "Bienvenido! Déjanos saber si tienes alguna pregunta.";
  } else {
    const timeDifference = currentTime - Number(lastVisit);
    const msToDays = 86400000;
    if (timeDifference < msToDays) {
      message.textContent = "¡De regreso tan pronto! ¡Genial!";
    } else {
      const daysAgo = Math.floor(timeDifference / msToDays);

      if (daysAgo === 1) {
        message.textContent = "Tu última visita fue ayer.";
      } else {
        message.textContent = `Tu última visita fue hace ${daysAgo} días.`;
      }
    }
  }

  localStorage.setItem("last-visit", currentTime);
}
