// Navigation
document.querySelector('.toggleMenu').addEventListener('click', () => {
  document.querySelectorAll(".toggleMenu, .navigation").forEach(elem => elem.classList.toggle("active"));
})
// End Navigation

// Shop Slider
var swiper = new Swiper(".shop .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// End Shop Slider

// GallerySlider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: true,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2.01,
    },
    1200: {
      slidesPerView: 4.01,
    },
  },
});
// End Gallery Slider