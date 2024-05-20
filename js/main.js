// Get the Dom element for the image carousel
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 0;
let interValId;

// Define function to start automatic image slider
const autoSlide = function () {
    interValId = setInterval(() => slideImage(++imageIndex), 2500);
};
autoSlide();

// A function that updates the carousel display th show the specified image
const slideImage = function (index) {
    imageIndex = imageIndex == images.length - 1 ? -1 : imageIndex;
    carousel.style.transform = `translate(-${index * 100}%)`;
};

// a function that updates the carousel display to show the next or previous image
let updateClick = function (e) {
    clearInterval(interValId);
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
};
buttons.forEach((button) => button.addEventListener("click", updateClick));
wrapper.addEventListener("mouseover", () => clearInterval(interValId));
wrapper.addEventListener("mouseleave", () => autoSlide());