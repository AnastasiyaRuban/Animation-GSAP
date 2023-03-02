let tlLoaded = gsap.timeline();
let photos = document.querySelectorAll('.photos-wrap img');
var tl = gsap.timeline({ paused: true });
const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.close');

tlLoaded.from(".hero__title", { y: 100, opacity: 0, duration: 0.5, ease: "power1.out" }, 0.5)
tlLoaded.from(".hero__btn", { y: 100, opacity: 0, duration: 0.5, ease: "power1.out" }, 0.5)
tlLoaded.from(".hero__descr", { opacity: 0, duration: 0.5, ease: "power1.out" }, )
photos.forEach(el => {
  tlLoaded.fromTo(el, { scale: 0.8, opacity: 0, }, { scale: 1, opacity: 1, duration: 0.5, ease: "power1.out" })
});
tlLoaded.from(".photos__author", { opacity: 0, ease: "power1.out" }, '<')


gsap.set('.menu__top', { yPercent: -100, opacity: 0.5, });
gsap.set('.close', { autoAlpha: 0, });
gsap.set('.menu__bottom', { y: 50, opacity: 0.5, y: 50, });
gsap.set('.menu__nav', { opacity: 0, y: 50 });
gsap.set('.social', { opacity: 0, y: 50 });
gsap.set('.menu__right', { opacity: 0, y: 50 });


tl.to('.menu', { display: 'block', opacity: 0.5, background: 'none' })
  .to('.menu__top', { yPercent: 0, duration: 0.5 })
  .to('.close', { autoAlpha: 1, }, '<')
  .to('.menu', { opacity: 1, duration: 0.5 })
  .to('.menu__bottom', { backgroundColor: '#373737', y: 0, })
  .to('.menu__top', { opacity: 1 }, '<')
  .to('.menu__bottom', { opacity: 1 })
  .to('.menu__nav', { opacity: 1, y: 0 }, '<')
  .to('.menu__right', { opacity: 1, y: 0 })
  .to('.social', { opacity: 1, y: 0 }, '<')

burger.addEventListener('click', function(e) {
  tl.play();
})
closeMenu.addEventListener('click', function() {
  tl.reverse();
})
