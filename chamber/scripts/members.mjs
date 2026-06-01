export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function displayMembers(data) {
  if (!document.querySelector("#members")) return;
  data.forEach((element) => {
    let card = document.createElement("section");
    let memberName = document.createElement("h3");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let web = document.createElement("a");

    memberName.textContent = element.company_name;
    memberName.setAttribute("class", "company-name");
    address.textContent = element.company_address;
    phoneNumber.textContent = element.phone_number;
    web.textContent = element.company_website;
    web.setAttribute("href", `${element.company_website}`);
    logo.setAttribute("src", `${element.image_file}`);
    logo.setAttribute("class", "img-list-view");
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "250");
    logo.setAttribute("height", "auto");
    logo.setAttribute("alt", `${element.company_name} logo`);

    card.appendChild(logo);
    card.appendChild(memberName);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(web);

    document.querySelector("#members").appendChild(card);
  });
  if (document.querySelector("#members")) {
    document.querySelector("#grid").addEventListener("click", () => {
      document.querySelector("#members").classList.add("grid");
      document.querySelector("#members").classList.remove("list");
    });
    document.querySelector("#list").addEventListener("click", () => {
      document.querySelector("#members").classList.add("list");
      document.querySelector("#members").classList.remove("grid");
    });
  }
}

export function spotlightMembers(data) {
  if (!document.querySelector("#spotlights")) return;
  const container = document.querySelector("#spotlights");
  const eligibleMembers = data.filter(
    (element) => element.membership_level > 1,
  );
  const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
  const spotlightSelection = shuffled.slice(0, 3);

  container.innerHTML = "";

  spotlightSelection.forEach((element) => {
    const section = document.createElement("section");
    const businessName = document.createElement("h3");
    const businessLogo = document.createElement("img");
    const businessAddress = document.createElement("p");
    const businessPhone = document.createElement("p");
    const businessUrlP = document.createElement("p");
    const businessUrl = document.createElement("a");

    businessName.textContent = element.company_name;
    businessAddress.innerHTML = `<strong>Dirección:</strong> ${element.company_address}`;
    businessPhone.innerHTML = `<strong>Teléfono:</strong> ${element.phone_number}`;
    businessUrlP.innerHTML = "<strong>URL:</strong> ";
    businessUrl.textContent = element.company_website;
    businessUrl.setAttribute("href", `${element.company_website}`);
    businessUrl.setAttribute("target", "_blank");
    businessLogo.setAttribute("src", `${element.image_file}`);
    businessLogo.setAttribute("width", "250");
    businessLogo.setAttribute("height", "auto");
    businessLogo.setAttribute("loading", "lazy");

    businessUrlP.appendChild(businessUrl);
    section.appendChild(businessName);
    section.appendChild(businessLogo);
    section.appendChild(businessAddress);
    section.appendChild(businessPhone);
    section.appendChild(businessUrlP);

    section.setAttribute("class", "business-spotlight");

    document.querySelector("#spotlights").appendChild(section);
  });
}

export function displayMembersLevels(data) {
  if (!document.querySelector("#member-modal")) return;
  const modal = document.querySelector("#member-modal");

  data.forEach((element) => {
    let container = document.createElement("section");
    let containerHeader = document.createElement("h3");
    let modalButton = document.createElement("button");

    container.setAttribute("class", element.level);
    containerHeader.textContent = element.name;
    modalButton.textContent = "¡Aprender más!";

    container.appendChild(containerHeader);
    container.appendChild(modalButton);

    document.querySelector(".flex-levels").appendChild(container);
    modalButton.addEventListener("click", () => {
      modal.innerHTML = "";
      let level = document.createElement("h3");
      let benefitsList = document.createElement("ul");
      let closeModal = document.createElement("button");
      let price = document.createElement("p");

      level.textContent = element.name;

      element.benefits.forEach((value) => {
        let benefits = document.createElement("li");
        benefits.textContent = value;
        benefitsList.appendChild(benefits);
      });

      closeModal.textContent = "❌";
      price.textContent = `Precio: ${element.price} USD mensualmente.`;

      modal.appendChild(level);
      modal.appendChild(closeModal);
      modal.appendChild(benefitsList);
      modal.appendChild(price);

      modal.showModal();

      closeModal.addEventListener("click", () => {
        modal.close();
      });
    });
  });
}
