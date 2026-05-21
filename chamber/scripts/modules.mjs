document.querySelector("#grid").addEventListener("click", () => {
  document.querySelector("#members").classList.add("grid");
  document.querySelector("#members").classList.remove("list");
});

document.querySelector("#list").addEventListener("click", () => {
  document.querySelector("#members").classList.add("list");
  document.querySelector("#members").classList.remove("grid");
});

import { getMembersData } from "./members.mjs";

getMembersData("data/members.json");
