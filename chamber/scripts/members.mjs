export async function getMembersData(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (document.querySelector("#members")) {
    document.querySelector("#grid").addEventListener("click", () => {
      document.querySelector("#members").classList.add("grid");
      document.querySelector("#members").classList.remove("list");
    });

    document.querySelector("#list").addEventListener("click", () => {
      document.querySelector("#members").classList.add("list");
      document.querySelector("#members").classList.remove("grid");
    });
    displayMembers(data);
  } else if (document.querySelector("#spotlights")) {
    spotlightMembers(data);
  }
}

function displayMembers(data) {
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
}

function spotlightMembers(data) {
  const eligibleMembers = data.filter(
    (element) => element.membership_level > 1,
  );
  const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
  const spotlightSelection = shuffled.slice(0, 3);

  spotlightSelection.forEach((element) => {
    let article = document.createElement("article");
    let businessName = document.createElement("h3");
    let businessLogo = document.createElement("img");
    let businessEmail = document.createElement("p");
    let businessPhone = document.createElement("p");
    let businessUrlP = document.createElement("p");
    let businessUrl = document.createElement("a");

    businessName.textContent = element.company_name;
    businessPhone.textContent = `Phone: ${element.phone_number}`;
    businessUrlP.textContent = "URL: ";
    businessUrl.textContent = element.company_website;
    businessUrl.setAttribute("href", `${element.company_website}`);
    businessUrl.setAttribute("target", "_blank");
    businessLogo.setAttribute("src", `${element.image_file}`);
    businessLogo.setAttribute("width", "250px");
    businessLogo.setAttribute("height", "auto");
    businessLogo.setAttribute("loading", "lazy");

    businessUrlP.appendChild(businessUrl);
    article.appendChild(businessName);
    article.appendChild(businessLogo);
    article.appendChild(businessPhone);
    article.appendChild(businessUrlP);

    article.setAttribute("class", "business-spotlight");

    document.querySelector("#spotlights").appendChild(article);
  });
}
