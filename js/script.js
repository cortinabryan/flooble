const hambuger = document.getElementById("hamburger");
const hamburgerLinks = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  hamburgerLinks.classList.toggle("show");
});

// function toggle() {
//   var x = document.getElementById("hamburger-links");
//   if (x.style.display === "flex") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "flex";
//   }
// }

// toggle();
