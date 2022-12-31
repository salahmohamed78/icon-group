/*
                                                                         بسم الله الرحمن الرحيم                                                                    
Created by: SALAH MOHAMED
number = 01220000538
*/

AOS.init({
  offset: 150,
  duration: 1000,
  once: true,
});

/*

                                            swiper


*/

var swiper = new Swiper("#icon__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  speed: 750,

  preloadImages: false,
  lazy: true,
  watchSlidesProgress: true,

  // Default parameters
  slidesPerView: 1.5,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    575: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
  },

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 0.7,
    slideShadows: true,
  },
});

let projectsSwiper = new Swiper(".projectSwiper", {
  loop: true,
  preloadImages: false,
  lazy: true,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let gallerySwiper = new Swiper(".gallerySwiper", {
  preloadImages: false,
  lazy: true,

  grabCursor: true,
  slidesPerView: 1,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      watchSlidesProgress: true,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      watchSlidesProgress: true,
    },
  },

  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let singleSlider = new Swiper(".singleSwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  preloadImages: false,
  lazy: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let profileLogo = document.querySelectorAll(".profile__logo");
if(profileLogo[0]){

  let ProfileLogoWidth = profileLogo[0].offsetWidth;
  
  let profileLogoHeight = ProfileLogoWidth * 0.5625;
  document
  .querySelector(":root")
  .style.setProperty("--logo-height", `${profileLogoHeight}px`);
}
