const url = "data/members.json";
const cards = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data);
  displayMembers(data);
}

getMembersData();

const displayMembers = (data) => {
  data.forEach((element) => {
    let card = document.createElement("section");
    let memberName = document.createElement("h3");
    let logo = document.createElement("img");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let web = document.createElement("a");

    memberName.textContent = `${element.company_name}`;
    memberName.setAttribute("class", "company-name");
    address.textContent = `${element.company_address}`;
    phoneNumber.textContent = `${element.phone_number}`;
    web.textContent = `${element.company_website}`;
    web.setAttribute("href", `${element.company_website}`);
    logo.setAttribute("src", `${element.image_file}`);
    logo.setAttribute("class", "img-list-view");
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "250");
    logo.setAttribute("height", "auto");

    card.appendChild(logo);
    card.appendChild(memberName);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(web);

    cards.appendChild(card);
  });
};

gridBtn.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});
