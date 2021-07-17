
// function toggleNav() {
//   let mainNav = document.getElementById("mainNav");
//   mainNav.classList.toggle("top-nav_visible");
// }

let topNav = document.getElementsByClassName("top-nav")[0];
let navButton = document.getElementsByClassName("top-nav__button")[0];
navButton.addEventListener("click", toggleActive);

function toggleActive() {
  this.classList.toggle("top-nav__button_active");

  if (topNav.style.maxHeight) {
    topNav.style.maxHeight = null;
  } 
  else {
    topNav.style.maxHeight = topNav.scrollHeight + "px";
  } 
}