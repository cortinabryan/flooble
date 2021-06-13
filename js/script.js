const hambuger = document.getElementById("hamburger");
const hamburgerLinks = document.getElementById("hamburger-links");

hamburger.addEventListener("click", () => {
  hamburgerLinks.classList.toggle("show");
});
