const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const heroImage = document.querySelector(".hero-image img");
menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    heroImage.src = "./assets/images/image-web-3-desktop.jpg";
  } else {
    heroImage.src = "./assets/images/image-web-3-mobile.jpg";
  }
});
