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

    let active = hero.querySelector('.hero__main-projects-image img.active');

    let containerShift = true ? 160 : 0;

    let mouseInAsideLeft = false;
    let mouseInAsideRight = false;
    let isAsideLeftOpen = false;
    let isAsideRightOpen = false;

    document.addEventListener('mousemove', e => {
      //mouseInAsideLeft = e.path.includes(asideLeft);
      //mouseInAsideRight = e.path.includes(asideRight);
      mouseInAsideLeft = e.target.closest('.hero__aside--left');
      mouseInAsideRight = e.target.closest('.hero__aside--right');

      //console.clear()
      //console.log(e)
    });

    document.addEventListener('resize', () => {
      containerShift = true ? 160 : 0;
      isMobile = document.documentElement.clientWidth < 768;
    });

    ////////////////////
    // появление центрального блока после загрузки страницы
    gsap.to(mainDefaultNumber, {opacity: 1, duration: 0.6});
    gsap.to(mainDefaultTitle, {x: 0, opacity: 1, duration: 0.6});
    gsap.to(mainDefaultText, {x: 0, opacity: 1, duration: 0.6});
    
    asideLeft[isMobile ? 'onclick' : 'onmouseenter'] = onAsideLeftMouseEnter;
    asideRight[isMobile ? 'onclick' : 'onmouseenter'] = onAsideRightMouseEnter;
    
    function onAsideLeftMouseEnter() {
      const tl = gsap.timeline();
      asideLeft.onmouseenter = null;
      asideLeft.onclick = null;
      asideRight.onmouseenter = null;
      asideRight.onclick = null;

      //console.log('aside click!!!')

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
          
          isAsideLeftOpen = true;

          if (mouseInAsideLeft && !isMobile) {
            asideLeft.onmouseleave = onAsideLeftMouseLeave;
          } else if (!mouseInAsideLeft && !isMobile) {
            onAsideLeftMouseLeave();
          }

          if (isMobile) {
            document.onclick = onDocumentClick;
          }
        }}, '-=.2');
    }

    function onAsideLeftMouseLeave() {
      const tl = gsap.timeline();
      asideLeft.onmouseleave = null;
      document.onclick = null;

      tl.to(mainPlatformHint, {opacity: 0, duration: 0.5, ease: 'circ.out'})
        .to(mainPlatform, {opacity: 0, duration: 0.5, ease: 'circ.out', onComplete: () => {
          mainPlatform.style.position = '';
          mainDefault.style.position = 'relative';
        }}, '-=.1')
        .to(bottomLeft, {x: '-200px', opacity: 0, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(asideLeftInner, {x: '-100%', opacity: 0, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(mainDefault, {opacity: 1, duration: 0.5, ease: 'circ.out', onComplete: () => {
          
          hero.classList.remove(HeroClass.LEFT);
          isAsideLeftOpen = false;

          if (mouseInAsideLeft && !isMobile) {
            onAsideLeftMouseEnter();
          } else {
            asideLeft[isMobile ? 'onclick' : 'onmouseenter'] = onAsideLeftMouseEnter;
            asideRight[isMobile ? 'onclick' : 'onmouseenter'] = onAsideRightMouseEnter;
          }
        }}, '-=.2');
    }

    function onAsideRightMouseEnter() {
      const tl = gsap.timeline();
      asideRight.onmouseenter = null;
      asideRight.onclick = null;
      asideLeft.onmouseenter = null;
      asideLeft.onclick = null;

      hero.classList.add(HeroClass.RIGHT);

      tl.to(mainDefault, {opacity: 0, duration: 0.5, ease: 'circ.out', onComplete: () => 
      {
        mainProjects.style.position = 'relative';
        mainDefault.style.position = 'absolute';
      }})
        .to(asideRightInner, {x: 0, opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(bottomRight, {x: 0, opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(mainProjects, {opacity: 1, duration: 0.5, ease: 'circ.out'}, '-=.1')
        .to(mainProjectsTitle, {opacity: 1, y: 0, duration: 0.5, ease: 'circ.out'}, '-=.3')
        .to(mainProjectsText, {opacity: 1, y: 0, duration: 0.5, ease: 'circ.out'}, '-=.3')
        .to(mainProjectsImage, {opacity: 1, y: 0, duration: 0.5, ease: 'circ.out', onComplete: () => {
          
          requestAnimationFrame(animateImage);

        }}, '-=.3');
    }

    function onAsideRightMouseLeave() {
      asideRight.onmouseleave = null;
      document.onclick = null;

      requestAnimationFrame(reverseAnimateImage);

    }

    function onDocumentClick(e) {
        //e.stopImmediatePropagation();
      document.onclick = null;
      const isAsideLeft = e.target.closest('.hero__aside--left');
      const isAsideLeftBtn = e.target.closest('.hero__aside--left .hero__aside-close');

      const isAsideRight = e.target.closest('.hero__aside--right');
      const isAsideRightBtn = e.target.closest('.hero__aside--right .hero__aside-close');

      if (isAsideLeftBtn && isAsideLeftOpen) {
        onAsideLeftMouseLeave();
      }
      
      if (!isAsideLeft && isAsideLeftOpen) {
        e.stopImmediatePropagation();
        onAsideLeftMouseLeave();
      }

      if (isAsideRightBtn && isAsideRightOpen) {
        onAsideRightMouseLeave();
      }
      
      if (!isAsideRight && isAsideRightOpen) {
        e.stopImmediatePropagation();
        onAsideRightMouseLeave();
      }

    }

    function animateImage() {
      if (active.nextElementSibling) {
        active.classList.remove('active');
        active.nextElementSibling.classList.add('active');
        active = active.nextElementSibling;
        requestAnimationFrame(animateImage)
      } else {
        isAsideRightOpen = true;

        if (mouseInAsideRight && !isMobile) {
          asideRight.onmouseleave = onAsideRightMouseLeave;
        } else if (!mouseInAsideRight && !isMobile) {
          onAsideRightMouseLeave();
        }

        if (isMobile) {
          document.onclick = onDocumentClick;
        }
      }
    }

    function reverseAnimateImage() {
      if (active.previousElementSibling) {
        active.classList.remove('active');
        active.previousElementSibling.classList.add('active');
        active = active.previousElementSibling;
        requestAnimationFrame(reverseAnimateImage)
      } else {
        qqq();
      }
    }

    function qqq() {
      const tl = gsap.timeline();

      tl.to(mainProjectsImage, {opacity: 0, y: '20px', duration: 0.5, ease: 'circ.out'})
        .to(mainProjectsText, {opacity: 0, y: '20px', duration: 0.5, ease: 'circ.out'}, '-=.3')
        .to(mainProjectsTitle, {opacity: 0, y: '20px', duration: 0.5, ease: 'circ.out'}, '-=.3')
        .to(mainProjects, {opacity: 0, duration: 0.5, ease: 'circ.out', onComplete: () => {
          mainProjects.style.position = '';
          mainDefault.style.position = '';
        }}, '-=.1')
        .to(bottomRight, { opacity: 0, x: '200px', duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(asideRightInner, {x: '100%', opacity: 0, duration: 0.5, ease: 'circ.out'}, '-=.2')
        .to(mainDefault, {opacity: 1, duration: 0.5, ease: 'circ.out', onComplete: () => {
          
          hero.classList.remove(HeroClass.RIGHT);
          isAsideLeftRight = false;

          if (mouseInAsideRight && !isMobile) {
            onAsideRightMouseEnter();
          } else {
            asideRight[isMobile ? 'onclick' : 'onmouseenter'] = onAsideRightMouseEnter;
            asideLeft[isMobile ? 'onclick' : 'onmouseenter'] = onAsideLeftMouseEnter;
          }
        }}, '-=.2');
        
      /*isAsideRightOpen = false;

      if (mouseInAsideRight && !isMobile) {
        asideRight.onmouseleave = onAsideRightMouseLeave;
      } else if (!mouseInAsideRight && !isMobile) {
        onAsideRightMouseLeave();
      }

      if (isMobile) {
        document.onclick = onDocumentClick;
      }*/
    }
  }
});