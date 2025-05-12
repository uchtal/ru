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
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// End Shop Slider