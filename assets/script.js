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

const items = document.querySelectorAll(".banner-img");
const nbSlide = items.length;
const right = document.querySelector(".arrow_right");
const left = document.querySelector(".arrow_left");
const dot = document.querySelectorAll(".dot");
const nbDot = dot.length;
let count = 0;
let countDot = 0;

function nextSlide() {
  items[count].classList.remove("active");
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
}

right.addEventListener("click", nextSlide);

function nextDot() {
  dot[countDot].classList.remove("dot_selected");
  if (countDot < nbDot - 1) {
    countDot++;
  } else {
    countDot = 0;
  }

  dot[countDot].classList.add("dot_selected");
  console.log(countDot);
}

right.addEventListener("click", nextDot);

function previousSlide() {
  items[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  items[count].classList.add("active");
  console.log(count);
}

left.addEventListener("click", previousSlide);

function previousDot() {
  dot[countDot].classList.remove("dot_selected");
  if (countDot > 0) {
    countDot--;
  } else {
    countDot = nbDot - 1;
  }
  dot[count].classList.add("dot_selected");
  console.log(countDot);
}

left.addEventListener("click", previousDot);

/*
let arrowright = document.querySelector(".arrow_right");
let arrowleft = document.querySelector(".arrow_left");

arrowright.addEventListener("click", function () {
  let image = document.getElementById("Banner Print-it");
  image.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
  console.log(arrowright);
});

arrowleft.addEventListener("click", function () {
  let image = document.getElementById("Banner Print-it");
  image.setAttribute("src", "./assets/images/slideshow/slide4.png");
  console.log(arrowleft);
});*/
