window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');

  if (hero) {
    const asideLeft = hero.querySelector('.hero__aside--left');
    const asideRight = hero.querySelector('.hero__aside--right');
    const mainDefault = hero.querySelector('.hero__main-default');
    const mainProjects = hero.querySelector('.hero__main-projects');
    const mainProjectsImage = mainProjects.querySelector('.hero__main-projects-image');
    const mainPlatform = hero.querySelector('.hero__main-platform');

    hero.querySelector('.hero__title').classList.remove('is-shifted');
    hero.querySelector('.hero__main-text').classList.remove('is-shifted');
    hero.querySelector('.hero__number').classList.remove('is-hide');

    const HeroClass = {
      RIGHT: 'hero--right',
      LEFT: 'hero--left'
    };

    let active = hero.querySelector('.hero__main-projects-image img.active');
    let intervalId = null;
    let isMouseEnter = false;
    let step = 0;

    asideLeft.addEventListener('mouseenter', () => {
      isMouseEnter = true;
      hero.classList.add(HeroClass.LEFT);
      step = 1;

      mainDefault.ontransitionend = () => {
        mainDefault.ontransitionend = null;
        step = 2;

        if (step == 2 && isMouseEnter) {
          mainPlatform.classList.add('is-shown');
        }
      }
    });

    asideLeft.addEventListener('mouseleave', () => {
      isMouseEnter = false;

      if (step == 2 && !isMouseEnter) {
        mainPlatform.classList.remove('is-shown');

        mainPlatform.ontransitionend = () => {
          mainPlatform.ontransitionend = null;
          step = 1;

          if (step == 1 && !isMouseEnter) {
            hero.classList.remove(HeroClass.LEFT);
          }
        }
      }

      if (step == 1 && !isMouseEnter) {
        hero.classList.remove(HeroClass.LEFT);
      }
    });

    asideRight.addEventListener('mouseenter', () => {
      isMouseEnter = true;

      hero.classList.add(HeroClass.RIGHT);
      step = 1;

      mainDefault.ontransitionend = () => {
        step = 2;

        if (step === 2 && isMouseEnter) {
          mainDefault.ontransitionend = null;

          mainProjects.classList.add('is-shown');

          mainProjectsImage.ontransitionend = () => {
            step = 3;
            if (step === 3 && isMouseEnter) {
              mainProjectsImage.ontransitionend = null;

              clearInterval(intervalId);

              intervalId = setInterval(() => {
                if (active.nextElementSibling) {
                  active.classList.remove('active');
                  active.nextElementSibling.classList.add('active');
                  active = active.nextElementSibling;
                } else {
                  clearInterval(intervalId);
                }
              }, 1000 / 60);
            }

          }
        }

      }
      
    });

    asideRight.addEventListener('mouseleave', e => {
      isMouseEnter = false;
      
      if (step === 3 && !isMouseEnter) {
        clearInterval(intervalId);
      
        intervalId = setInterval(() => {
          if (active.previousElementSibling) {
            active.classList.remove('active');
            active.previousElementSibling.classList.add('active');
            active = active.previousElementSibling;
          } else {
            clearInterval(intervalId);
            step = 2;

            if (step === 2 && !isMouseEnter) {
              mainProjects.classList.remove('is-shown');
              
              mainProjects.ontransitionend = () => {
                mainProjects.ontransitionend = null;
                step = 1;

                if (step === 1 && !isMouseEnter) {
                  hero.classList.remove(HeroClass.RIGHT);
                }
              }
            }
          }
        }, 1000 / 60);
      }

      if (step === 2 && !isMouseEnter) {
        mainProjects.classList.remove('is-shown');
        
        mainProjects.ontransitionend = () => {
          mainProjects.ontransitionend = null;
          step = 1;

          if (step === 1 && !isMouseEnter) {
            hero.classList.remove(HeroClass.RIGHT);
          }
        }
      }

      if (step === 1 && !isMouseEnter) {
        hero.classList.remove(HeroClass.RIGHT);
      }
    });
  }

  function debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction() {
      const context = this;
      const args = arguments;

      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  };
});