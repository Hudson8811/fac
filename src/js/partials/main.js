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
      if (!cardBg.classList.contains('js-animation-run')) {
        cardBg.classList.remove('technologies-card__mouse-out');

        setTimeout(() => {
          cardBg.classList.add('technologies-card__mouse-in');

          // cardBg.classList.add('js-animation-run');
          // setTimeout(() => {
          //   cardBg.classList.remove('js-animation-run');
          // }, 3);
        }, 1);
      }
    });

    card.addEventListener('mouseleave', () => {
      if (!cardBg.classList.contains('js-animation-run')) {
        cardBg.classList.remove('technologies-card__mouse-in');

        setTimeout(() => {
          cardBg.classList.add('technologies-card__mouse-out');

          // cardBg.classList.add('js-animation-run');
          // setTimeout(() => {
          //   cardBg.classList.remove('js-animation-run');
          // }, 3);
        }, 1);
      }
    });
  }
});
