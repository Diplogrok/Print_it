const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const items = document.querySelector(".banner-img");
const description = document.getElementById("tagLine");
const right = document.querySelector(".arrow_right");
const left = document.querySelector(".arrow_left");
const dot = document.querySelectorAll(".dot");
const nbDot = dot.length;
let countDot = 0;

function nextDot() {
  dot[countDot].classList.remove("dot_selected");
  if (countDot < nbDot - 1) {
    countDot++;
  } else {
    countDot = 0;
  }

  dot[countDot].classList.add("dot_selected");
  items.setAttribute(
    "src",
    "./assets/images/slideshow/" + slides[countDot].image
  );
  description.innerHTML = slides[countDot].tagLine;
}

right.addEventListener("click", nextDot);

function previousDot() {
  dot[countDot].classList.remove("dot_selected");
  if (countDot > 0) {
    countDot--;
  } else {
    countDot = nbDot - 1;
  }
  dot[countDot].classList.add("dot_selected");
  items.setAttribute(
    "src",
    "./assets/images/slideshow/" + slides[countDot].image
  );
  description.innerHTML = slides[countDot].tagLine;
}

left.addEventListener("click", previousDot);
