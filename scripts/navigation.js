const hamButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const closePortfolioButton = document.querySelector("#close-portfolio");

closePortfolioButton.addEventListener("click", () => {
  const portfolioDiv = document.querySelector(".portfolio");
  portfolioDiv.style.display = "none";
});

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("show");
  navBar.classList.toggle("show");
});
