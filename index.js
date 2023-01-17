const hamburger = document.querySelector(".hamburger_menu");
const closeMenu = document.querySelector(".close_menu");
const mobileNav = document.querySelector(".nav_list");

hamburger.addEventListener("click", () => {
  mobileNav.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  mobileNav.style.display = "none";
});
