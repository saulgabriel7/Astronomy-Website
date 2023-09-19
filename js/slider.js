const sliderContainer = document.querySelector('.slider-container');
const universes = document.querySelectorAll('.univers');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showSlide(index) {
  const offset = -(index * 100 / 3);
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

function goToPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = universes.length - 3;
  }
  showSlide(currentIndex);
}

function goToNextSlide() {
  currentIndex++;
  if (currentIndex >= universes.length - 1) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

showSlide(currentIndex);
