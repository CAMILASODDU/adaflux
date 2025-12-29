// Carrusel
document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach((carrusel) => {
    const track = carrusel.querySelector(".carrusel-track");
    const images = carrusel.querySelectorAll("img");
    const prevBtn = carrusel.querySelector(".prev");
    const nextBtn = carrusel.querySelector(".next");

    let index = 0;
    let autoSlide;

    function showSlide(i) {
      index = (i + images.length) % images.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function startAutoSlide() {
      autoSlide = setInterval(() => showSlide(index + 1), 4000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlide);
    }

    prevBtn.addEventListener("click", () => {
      showSlide(index - 1);
      stopAutoSlide();
      startAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
      showSlide(index + 1);
      stopAutoSlide();
      startAutoSlide();
    });

    carrusel.addEventListener("mouseenter", stopAutoSlide);
    carrusel.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
  });
});

// Menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
