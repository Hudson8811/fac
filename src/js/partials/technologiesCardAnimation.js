window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".technologies-card__bg--4")) {
    const cardBg = document.querySelector(".technologies-card__bg--4"),
      card = cardBg.closest(".technologies-card");

    card.addEventListener("mouseenter", () => {
      if (!cardBg.classList.contains("js-animation-run")) {
        cardBg.classList.add("technologies-card__mouse-in");
        cardBg.classList.add("js-animation-run");

        setTimeout(() => {
          cardBg.classList.remove("technologies-card__mouse-in");
          cardBg.classList.remove("js-animation-run");
        }, 3000);
      }
    });
  }
});
