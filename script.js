const images = document.querySelectorAll(".project-image");
const popup = document.querySelector("#popup");
const popupImage = document.querySelector("#popup-img");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    popupImage.src = e.target.src;
    popup.style.display = "block";
  });
});

popup.addEventListener("click", (event) => {
  if (event.target === popupImage) {
    return;
  }
  popup.style.display = "none";
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((navLink) =>
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
