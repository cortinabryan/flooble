const hambuger = document.getElementById("hamburger");
const hamburgerLinks = document.getElementById("hamburger-links");

hamburger.addEventListener("click", () => {
  hamburgerLinks.classList.toggle("show");
});

// document
//   .getElementById("hamburger-links")
//   .addEventListener("click", openHamburger);

// function openHamburger() {
//   document.getElementsById("hamburger-links").classList.toggle("show");
// }

// hamburger.addEventListener("click", () => {
//   hamburgerLinks.classList.toggle("show");
// });

// function toggle() {
//   var x = document.getElementById("hamburger-links");
//   if (x.style.display === "flex") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "flex";
//   }
// }

// toggle();
