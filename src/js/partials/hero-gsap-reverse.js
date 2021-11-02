window.addEventListener('load', () => {
  let isMobile = document.documentElement.clientWidth < 768;
  const hero = document.querySelector('.hero');

  if (hero) {
    const asideLeft = hero.querySelector('.hero__aside--left');
    const asideLeftInner = asideLeft.querySelector('.hero__aside--left .hero__aside-inner');
    const asideLeftBtn = asideLeft.querySelector('.hero__aside--left .hero-btn');
    const asideLeftBtnText = asideLeftBtn.querySelector('.hero__aside--left .hero-btn__text');

    const asideRight = hero.querySelector('.hero__aside--right');
    const asideRightInner = asideRight.querySelector('.hero__aside--right .hero__aside-inner');
    const asideRightBtn = asideRight.querySelector('.hero__aside--right .hero-btn');
    const asideRightBtnText = asideRight.querySelector('.hero__aside--right .hero-btn__text');

    const mainDefault = hero.querySelector('.hero__main-default');
    const mainDefaultNumber = mainDefault.querySelector('.hero__main-default-number');
    const mainDefaultTitle = mainDefault.querySelector('.hero__main-default-title');
    const mainDefaultText = mainDefault.querySelector('.hero__main-default-text');

    const mainProjects = hero.querySelector('.hero__main-projects');
    const mainProjectsTitle = mainProjects.querySelector('.hero__main-projects-title');
    const mainProjectsText = mainProjects.querySelector('.hero__main-projects-text');
    const mainProjectsImage = mainProjects.querySelector('.hero__main-projects-image');
    const mainProjectsImages = mainProjectsImage.querySelectorAll('img');

    const mainPlatform = hero.querySelector('.hero__main-platform');
    const mainPlatformImage = mainPlatform.querySelector('.hero__main-platform-image');
    const mainPlatformHint = mainPlatform.querySelector('.hero__main-platform-hint');

    const bottomLeft = hero.querySelector('.hero__bottom-left');
    const bottomRight = hero.querySelector('.hero__bottom-right');

    const HeroClass = {
      RIGHT: 'hero--right',
      LEFT: 'hero--left'
    };

    let active = hero.querySelector('.hero__main-projects-image img.active');

    //let containerShift = true ? 160 : 0;

    let mouseInAsideLeft = false;
    let mouseInAsideRight = false;
    let isAsideLeftOpen = false;
    let isAsideRightOpen = false;

    document.addEventListener('mousemove', e => {
      mouseInAsideLeft = e.target.closest('.hero__aside--left');
      mouseInAsideRight = e.target.closest('.hero__aside--right');

      //console.clear()
      //console.log(e)
    });

    document.addEventListener('resize', () => {
      //containerShift = true ? 160 : 0;
      isMobile = document.documentElement.clientWidth < 768;

      asideLeft[isMobile ? 'onclick' : 'onmouseenter'] = onAsideLeftMouseEnter;
      asideRight[isMobile ? 'onclick' : 'onmouseenter'] = onAsideRightMouseEnter;
   
    });

    
    ////////////////////
    // появление центрального блока после загрузки страницы
    gsap.to(mainDefaultNumber, {opacity: 1, duration: 0.6});
    gsap.to(mainDefaultTitle, {x: 0, opacity: 1, duration: 0.6});
    gsap.to(mainDefaultText, {x: 0, opacity: 1, duration: 0.6});
    

    const asideLeftTimeline = gsap.timeline({
      onComplete: () => {
        isAsideLeftOpen = true;
      },
      onReverseComplete: () => {
        mouseInAsideRight ? onAsideRightMouseEnter() : asideRight[isMobile ? 'onclick' : 'onmouseenter'] = onAsideRightMouseEnter;

        isAsideLeftOpen = false;

        hero.classList.remove(HeroClass.LEFT);
      }
    });
    asideLeftTimeline.pause();

    asideLeftTimeline.to(asideLeftBtn, {opacity: 0, duration: 0.5, ease: 'circ.out'})
      .to(asideRightBtnText, {opacity: 0, duration: 0.5, ease: 'circ.out'}, '-=.5')
      .to(mainDefault, {opacity: 0, duration: 0.5, ease: 'circ.out', 
        onComplete: () => {
          mainPlatform.style.position = 'relative';
          mainDefault.style.position = 'absolute';
        }
        },'-=.5')
      .to(mainPlatform, {opacity: 1, duration: 0.5, ease: 'circ.out', 
        onReverseComplete: () => {
          mainPlatform.style.position = 'absolute';
          mainDefault.style.position = 'relative';
        }})
      .to(mainPlatformImage, {rotationX: 0, duration: 0.5, ease: 'circ.out'}, '-=.5')
      .to(mainPlatformHint, {opacity: 1, duration: 0.3, ease: 'circ.out'})
      .to(asideLeftInner, {x: 0, opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.8')
      .to(bottomLeft, {x: 0, opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.5');

    
    const asideRightTimeline = gsap.timeline({
      onComplete: () => {
        isAsideRightOpen = true;
      },
      onReverseComplete: () => {
        mouseInAsideLeft ? onAsideLeftMouseEnter() : asideLeft[isMobile ? 'onclick' : 'onmouseenter'] = onAsideLeftMouseEnter;

        isAsideRightOpen = false;

        hero.classList.remove(HeroClass.RIGHT);
      }
    });
    asideRightTimeline.pause();

    asideRightTimeline.to(asideRightBtn, {opacity: 0, duration: 0.5, ease: 'circ.out'})
      .to(asideLeftBtnText, {opacity: 0, duration: 0.5, ease: 'circ.out'}, '-=.5')
      .to(mainDefault, {opacity: 0, duration: 0.5, ease: 'circ.out',
        onComplete: () => {
          mainProjects.style.position = 'relative';
          mainDefault.style.position = 'absolute';
        }
      }, '-=.5')
      .to(mainProjects, {position: 'relative', opacity: 1, duration: 0.5, ease: 'circ.out',
        onReverseComplete: () => {
          mainProjects.style.position = 'absolute';
          mainDefault.style.position = 'relative';
        }
      })
      .to(mainProjectsTitle, {opacity: 1, y: 0, duration: 0.5, ease: 'circ.out'}, '-=.5')
      .to(mainProjectsText, {opacity: 1, y: 0, duration: 0.5, ease: 'circ.out'}, '-=.5')
      .to(mainProjectsImage, {opacity: 1, y: 0, duration: 0.5, ease: 'circ.out'}, '-=.5')
      .to(mainProjectsImages, {display: 'block', position: 'absolute', duration: 0, stagger: 0.03}, '-=.5')
      .to(asideRightInner, {x: 0, opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.5')
      .to(bottomRight, { opacity: 1, x: 0, duration: 0.5, ease: 'circ.out'}, '-=.5');

    asideLeft[isMobile ? 'onclick' : 'onmouseenter'] = onAsideLeftMouseEnter;
    asideRight[isMobile ? 'onclick' : 'onmouseenter'] = onAsideRightMouseEnter;

    function onAsideLeftMouseEnter() {
      asideLeft.onmouseenter = null;
      asideLeft.onclick = null;
      (isMobile ? document : asideLeft)[isMobile ? 'onclick' : 'onmouseleave'] = isMobile ? onDocumentClick : onAsideLeftMouseLeave;

      asideRight.onmouseenter = null;
      asideRight.onclick = null;

      hero.classList.add(HeroClass.LEFT);

      asideLeftTimeline.play()
    }

    function onAsideLeftMouseLeave() {
      asideLeft[isMobile ? 'onclick' : 'onmouseenter'] = onAsideLeftMouseEnter;
      asideRight.onmouseleave = null;
      document.onclick = null;

      asideLeftTimeline.reverse()
    }

    function onAsideRightMouseEnter() {
      asideRight.onmouseenter = null;
      asideRight.onclick = null;
      (isMobile ? document : asideRight)[isMobile ? 'onclick' : 'onmouseleave'] = isMobile ? onDocumentClick : onAsideRightMouseLeave;

      asideLeft.onmouseenter = null;
      asideLeft.onclick = null;

      hero.classList.add(HeroClass.RIGHT);

      asideRightTimeline.play();
    }

    function onAsideRightMouseLeave() {
      asideRight[isMobile ? 'onclick' : 'onmouseenter'] = onAsideRightMouseEnter;
      asideRight.onmouseleave = null;
      document.onclick = null;

       asideRightTimeline.reverse()
    }

    function onDocumentClick(e) {
      const isAsideLeft = e.target.closest('.hero__aside--left');
      const isAsideLeftBtn = e.target.closest('.hero__aside--left .hero__aside-close');

      const isAsideRight = e.target.closest('.hero__aside--right');
      const isAsideRightBtn = e.target.closest('.hero__aside--right .hero__aside-close');

      if (isAsideLeftBtn && isAsideLeftOpen) {
        document.onclick = null;
        onAsideLeftMouseLeave();
      }
      
      if (!isAsideLeft && isAsideLeftOpen) {
        document.onclick = null;
        e.stopImmediatePropagation();
        onAsideLeftMouseLeave();
      }

      if (isAsideRightBtn && isAsideRightOpen) {
        document.onclick = null;
        onAsideRightMouseLeave();
      }
      
      if (!isAsideRight && isAsideRightOpen) {
        document.onclick = null;
        e.stopImmediatePropagation();
        onAsideRightMouseLeave();
      }
    }
  }
});