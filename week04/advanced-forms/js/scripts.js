/* "window.location.search" takes the query string from the URL and stores it into a variable */

const getString = window.location.search;
console.log(getString);

// "URLSearchParams" parse the query string into a searchable utility object
const myInfo = new URLSearchParams(getString);
console.log(myInfo);

// With "get" method we can retrieve the value of a specific parameter
console.log(myInfo.get("first"));
console.log(myInfo.get("last"));
console.log(myInfo.get("ordinance"));
console.log(myInfo.get("phone"));
console.log(myInfo.get("email"));
console.log(myInfo.get("date"));
console.log(myInfo.get("location"));

document.querySelector("#results").innerHTML =
  `<p> Appoinment for: ${myInfo.get("first")} ${myInfo.get("last")}</p>
  <p>Proxy ${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} Temple</p>
  <p>Your phone is: ${myInfo.get("phone")}.</p>
  <p>Your email: ${myInfo.get("email")}</p>`;
