window.addEventListener('load', () => {
  const numbersEl = document.querySelector('.__js_numbers');

  if (numbersEl) {
    const numbersElHeight = numbersEl.offsetHeight;
    const items = numbersEl.querySelectorAll('.hero__number-item');

    items.forEach(it => {
      //const itHeight = it.scrollHeight;
      //console.log(itHeight)
      const count = it.children.length - 1;
      it.style.cssText = 'transform: translateY(' + -(count * numbersElHeight) + 'px); transition: transform 2s ease;';
    });
  }
});