window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');

  if (hero) {
    const asides = hero.querySelectorAll('.hero__aside');
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
    let isImageAnimated = false;

    asides.forEach(it => {
      it.addEventListener('mouseenter', e => {
        if (it.classList.contains('hero__aside--left')) {
          hero.classList.add(HeroClass.LEFT);
        }

        if (it.classList.contains('hero__aside--right')) {
          hero.classList.add(HeroClass.RIGHT);

          mainDefault.ontransitionend = () => {
            mainDefault.ontransitionend = null;

            mainProjects.classList.add('is-shown');

            mainProjectsImage.ontransitionend = () => {
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
      });

      it.addEventListener('mouseleave', e => {
        if (it.classList.contains('hero__aside--left')) {
          hero.classList.remove(HeroClass.LEFT)
        }
        if (it.classList.contains('hero__aside--right')) {
          //if (isImageAnimated) {
            clearInterval(intervalId);
          
            intervalId = setInterval(() => {
              if (active.previousElementSibling) {
                active.classList.remove('active');
                active.previousElementSibling.classList.add('active');
                active = active.previousElementSibling;
              } else {
                clearInterval(intervalId);
                mainProjects.classList.remove('is-shown');

                mainProjects.ontransitionend = () => {
                  mainProjects.ontransitionend = null;
                  
                  hero.classList.remove(HeroClass.RIGHT)
                  
                }
              }
            }, 1000 / 60);
          //}


        }
      });
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