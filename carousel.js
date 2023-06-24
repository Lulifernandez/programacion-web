// ------------Carrusel de Testimonios----------
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');

const intervalTime = 5000; 
let slideInterval;

function showNextSlide() {
  const currentSlide = carousel.querySelector('.slide.active');
  const nextSlide = currentSlide.nextElementSibling || slides[0];

  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

function startCarousel() {
  slideInterval = setInterval(showNextSlide, intervalTime);
}

function stopCarousel() {
  clearInterval(slideInterval);
}

carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);

slides[0].classList.add('active');

startCarousel();
