window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.modal')) {
    const modal = document.querySelector('.modal');

    const openModal = () => {
      modal.classList.add('active');
      document.body.classList.add('no-scroll');
    };

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    };

    document.addEventListener('click', e => {
      if (e.target.classList.contains('js-open-modal')) {
        e.preventDefault();

        openModal();
      }

      if (e.target.classList.contains('js-modal-close')) {
        e.preventDefault();

        closeModal();
      }
    });
  }
});
