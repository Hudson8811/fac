window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');

  header.addEventListener('click', e => {
    if (e.target.classList.contains('header__burger')) {
      header.querySelector('.header__menu').classList.toggle('active');
      header.querySelector('.header__burger').classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    }
  });
});
