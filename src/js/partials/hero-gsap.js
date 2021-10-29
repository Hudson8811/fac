window.addEventListener('load', () => {
  let isMobile = document.documentElement.clientWidth < 768;
  const hero = document.querySelector('.hero');

  if (hero) {
    const asideLeft = hero.querySelector('.hero__aside--left');
    const asideLeftInner = asideLeft.querySelector('.hero__aside--left .hero__aside-inner');
    const asideLeftBtn = hero.querySelector('.hero__aside--left .hero-btn');

    const asideRight = hero.querySelector('.hero__aside--right');
    const asideRightInner = asideRight.querySelector('.hero__aside--right .hero__aside-inner');
    const asideRightBtn = hero.querySelector('.hero__aside--right .hero-btn');

    const mainDefault = hero.querySelector('.hero__main-default');
    const mainDefaultNumber = mainDefault.querySelector('.hero__main-default-number');
    const mainDefaultTitle = mainDefault.querySelector('.hero__main-default-title');
    const mainDefaultText = mainDefault.querySelector('.hero__main-default-text');

    const mainProjects = hero.querySelector('.hero__main-projects');
    const mainProjectsTitle = mainProjects.querySelector('.hero__main-projects-title');
    const mainProjectsText = mainProjects.querySelector('.hero__main-projects-text');
    const mainProjectsImage = mainProjects.querySelector('.hero__main-projects-image');

    const mainPlatform = hero.querySelector('.hero__main-platform');
    const mainPlatformImage = mainPlatform.querySelector('.hero__main-platform-image');
    const mainPlatformHint = mainPlatform.querySelector('.hero__main-platform-hint');

    const bottomLeft = hero.querySelector('.hero__bottom-left');
    const bottomRight = hero.querySelector('.hero__bottom-right');

    const HeroClass = {
      RIGHT: 'hero--right',
      LEFT: 'hero--left'
    };

    let mouseInAsideLeft = false;
    let mouseInAsideRight = false;

    document.addEventListener('mousemove', e => {
      mouseInAsideLeft = e.path.includes(asideLeft);
      mouseInAsideRight = e.path.includes(asideRight);

      //console.clear()
      //console.log(mouseInAsideLeft)
    });

    ////////////////////
    // появление центрального блока после загрузки страницы
    gsap.to(mainDefaultNumber, {opacity: 1, duration: 0.6});
    gsap.to(mainDefaultTitle, {x: 0, opacity: 1, duration: 0.6});
    gsap.to(mainDefaultText, {x: 0, opacity: 1, duration: 0.6});
    
    asideLeft.onmouseenter = onAsideLeftMouseEnter;
    
    function onAsideLeftMouseEnter() {
      const tl = gsap.timeline();
      asideLeft.onmouseenter = null;

      hero.classList.add(HeroClass.LEFT);

      tl.to(mainDefault, {opacity: 0, duration: 0.5, ease: 'circ.out', onComplete: () => 
      {
        mainPlatform.style.position = 'relative';
        mainDefault.style.position = 'absolute';
      }})
        .to(asideLeftInner, {x: 0, opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(bottomLeft, {x: 0, opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(mainPlatform, {opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.1')
        .to(mainPlatformHint, {opacity: 1, duration: 0.5, ease: 'circ.out', onComplete: () => {
          if (mouseInAsideLeft) {
            asideLeft.onmouseleave = onAsideLeftMouseLeave;
          } else {
            onAsideLeftMouseLeave();
          }
        }}, '-=.2');
    }

    function onAsideLeftMouseLeave() {
      const tl = gsap.timeline();
      asideLeft.onmouseleave = null;

      tl.to(mainPlatformHint, {opacity: 0, duration: 0.5, ease: 'circ.out'})
        .to(mainPlatform, {opacity: 0, duration: 0.5, ease: 'circ.out', onComplete: () => {
          mainPlatform.style.position = 'absolute';
          mainDefault.style.position = 'relative';
        }}, '-=.1')
        .to(bottomLeft, {x: '-200px', opacity: 0, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(asideLeftInner, {x: '-100%', opacity: 0, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(mainDefault, {opacity: 1, duration: 0.5, ease: 'circ.out', onComplete: () => {
          
          hero.classList.remove(HeroClass.LEFT);

          if (mouseInAsideLeft) {
            onAsideLeftMouseEnter();
          } else {
            asideLeft.onmouseenter = onAsideLeftMouseEnter;
          }
        }}, '-=.2');
    }
  }
});