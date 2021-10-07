// import {
//     setTimeout
// } from "timers";

const navigation = document.getElementById("navigation");
const hamburger = document.querySelector(".hamburger");
const dotNav = navigation.querySelector(".dot-nav");
const dotNavLink = navigation.querySelectorAll(".dot-nav__link");
let flag = false;

// Navigation Mobile Screen
const menuLinkClick = () => {
  hamburger.classList.toggle("active");
  dotNav.classList.toggle("active");
};

const handleClick = () => {
  hamburger.classList.toggle("active");
  dotNav.classList.toggle("active");
};

hamburger.addEventListener("click", handleClick);
dotNavLink.forEach((linkElement) => {
  linkElement.addEventListener("click", menuLinkClick);
});

// Desktop Navigation
const showNavigate = () => {
  if (window.innerWidth > 768 && !flag) {
    dotNav.classList.add("active");
    flag = !flag;
    if (dotNav.classList.contains("active") && flag) {
      hideNavigate();
    }
  }
};
const hideNavigate = () => {
  setTimeout(() => {
    dotNav.classList.remove("active");
    flag = !flag;
  }, 2500);
};

document.addEventListener("scroll", showNavigate);
