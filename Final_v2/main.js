const nav = document.querySelector("nav");
const menuIcon = document.querySelector("svg.menu-icon");
const closeIcon = document.querySelector("div.close-icon svg");

closeIcon.addEventListener("click", () => {
  menuIcon.style.display = "block";
  nav.classList.remove("active");
});
menuIcon.addEventListener("click", () => {
  menuIcon.style.display = "none";
  nav.classList.add("active");
});
