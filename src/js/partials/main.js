/* eslint-disable prefer-arrow-callback */
window.addEventListener("DOMContentLoaded", function () {
  const aboutSLider = new Swiper(".about__slider", {
    spaceBetween: 16,
    slidesPerView: 1,
    speed: 700,
    navigation: {
      prevEl: ".about-button-prev",
      nextEl: ".about-button-next",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });

  if (document.querySelector('.technologies-card__bg--4')) {
    const cardBg = document.querySelector('.technologies-card__bg--4'),
      card = cardBg.closest('.technologies-card');

    card.addEventListener('mouseenter', () => {
      cardBg.classList.remove('technologies-card__mouse-out');

      setTimeout(() => {
        cardBg.classList.add('technologies-card__mouse-in');
      }, 1);
    });

    card.addEventListener('mouseleave', () => {
      cardBg.classList.remove('technologies-card__mouse-in');

      setTimeout(() => {
        cardBg.classList.add('technologies-card__mouse-out');
      }, 1);
    });
  }
});
