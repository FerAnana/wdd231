const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);
  //displayMembers(data)
}

getMembersData();

const displayMembers = (data) => {
  let card = document.createElement("secition");
  let memberName = document.createElement("P");
  let img = document.createElement("img");
  let address = document.createElement("p");
  let phoneNumber = document.createElement("p");
  let web = document.createElement("a");

  memberName.textContent = `${data.company_name}`;
  address.textContent = `${data.company_address}`;
  phoneNumber.textContent = `${data.phone_number}`;
  web.textContent = `${data.company_website}`;
};
