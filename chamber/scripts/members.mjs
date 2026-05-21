export async function getMembersData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
  spotlightMembers(data);
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

  spotlightMembers.forEach((element) => {
    let article = document.createElement("article");
    let businessName = document.createElement("h3");
    let businessEmail = document.createElement("p");
    let businessPhone = document.createElement("p");
    let businessUrl = document.createElement("p");

    businessName.textContent = element.company_name;
    businessPhone.textContent = element.phone_number;
    businessUrl.textContent = element.company_website;

    article.appendChild(businessName);
    article.appendChild(businessPhone);
    article.appendChild(businessUrl);

    document.querySelector("#spotlights").appendChild(article);
  });
}
