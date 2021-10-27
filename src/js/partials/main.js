/* eslint-disable prefer-arrow-callback */
window.addEventListener("DOMContentLoaded", function () {
	// Header menu
	const header = document.querySelector('.header');

	header.addEventListener('click', e => {
		if (e.target.classList.contains('header__burger')) {
			header.querySelector('.header__menu').classList.toggle('active');
			header.querySelector('.header__burger').classList.toggle('active');
			document.body.classList.toggle('no-scroll');
		}
	});

	// About slider
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

	// Techonologies card4 animation
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
