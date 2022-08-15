// Get Slider Items Array.from[ES6 Features]
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let sliderCount = sliderImages.length;
let currentSlide = 1;
let slideNymberElement = document.getElementById("slide-number");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");

let indicators = document.getElementById("indicators");
let ul = document.createElement("ul");

for (let i = 1; i <= sliderImages.length; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.innerHTML = i;
  ul.appendChild(li);
}
indicators.appendChild(ul);
currentBull(currentSlide);

// Hanadle btn
btnPrev.onclick = prevSlide;
btnNext.onclick = nextSlide;

// next Slide Btn
function nextSlide() {
  if (currentSlide != 0) {
    btnPrev.className = "prev";
  }
  if (currentSlide == sliderCount) {
    btnNext.className = "next disabled";
  } else {
    console.log("Next");

    currentSlide++;
    currentBull(currentSlide);
  }
}
function currentBull(index) {
  let indicatorsLI = document.querySelectorAll(".indicators ul li");
  for (let i = 0; i < indicatorsLI.length; i++) {
    indicatorsLI[i].className = i;
    sliderImages[i].className = i;
    if (i == index - 1) {
      indicatorsLI[i].className = "active";
      sliderImages[i].className = "active";
    }
  }
  if (currentSlide == 1) {
    btnPrev.className = "prev disabled";
  }
  if (currentSlide == sliderCount) {
    btnNext.className = "next disabled";
  }
  slideNymberElement.innerHTML = `Slide #${currentSlide} of ${sliderCount}`;
}

// prev Slide Btn
function prevSlide() {
  if (currentSlide != 1) {
    btnNext.className = "next";
  }
  if (currentSlide == 1) {
    btnPrev.className = "prev disabled";
    currentBull(currentSlide);
  } else {
    console.log("Prev");

    currentSlide--;
    currentBull(currentSlide);
  }
}
