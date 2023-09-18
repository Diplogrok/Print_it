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

/**
 * Modifie le dot "selected" au clic sur la flèche de droite
 * @constructor
 * @param {nextDot} fonction de déplacement du dot "selected" grâce à l'API classList (remove/add)
 */

function nextDot() {
  dot[countDot].classList.remove("dot_selected");
  if (countDot < nbDot - 1) {
    countDot++;
  } else {
    countDot = 0;
  }

  dot[countDot].classList.add("dot_selected");

  /**
   * Modifie le slide au clic sur la flèche droite
   * @param {setAttribute} permet de récupérer le dossier de stockage des images + en determiner l'ordre via le tableau JS "Slides"
   */

  items.setAttribute(
    "src",
    "./assets/images/slideshow/" + slides[countDot].image
  );

  /**
   * Modifie la TagLine au clic sur la flèche droite
   */

  description.innerHTML = slides[countDot].tagLine;
}

/**
 * Rend la flèche droite intéractive au clic
 */

right.addEventListener("click", nextDot);

/**
 * Opérations similaire aux précédente au clic sur la flèche gauche
 */

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
