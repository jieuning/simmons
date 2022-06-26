gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles(".mobile, .desktop");

/* main_section 타이틀 y축 애니메이션*/ 
gsap.to('.uptitle1',{
  duration: 1,
  y: -50,
  opacity: 1,
  ease: 'Circ.easeOut',
  delay: 0.5,
})
gsap.to('.uptitle2',{
  duration: 1,
  y: -50,
  opacity: 1,
  ease: 'Circ.easeOut',
  delay: 1,
})

/* #main_section 타이틀 스크롤시, x축 애니메이션*/
gsap.to('#main_title1', {
  scrollTrigger: {
    trigger: '#main_section',
    start: 'top top',
    scrub: 1.5,
  },
  x: -40, duration: 2,
});
gsap.to('#main_title2', {
  scrollTrigger: {
    trigger: '#main_section',
    start: 'top top',
    scrub: 1.5,
  },
  x: 40, duration: 2,
});

/* #advance로 스크롤시, y축 순차적 애니메이션*/ 
const scrollA = gsap.timeline({
	scrollTrigger: {
    	trigger: '#advance',
        start: 'top',
    }
})
scrollA.to('.advance_title', {y: -50, opacity: 1, duration: 0.5})
       .to('.icon_action', {y: -50, opacity: 1, duration: 0.5})

/* #factorium로 스크롤시, y축 애니메이션 */ 
const scrollF = gsap.timeline({
	scrollTrigger: {
    	trigger: '#advance',
        start: 'bottom 50%',
        delay: 1,
    }
})
scrollF.to('.introduce', {y: -50, opacity: 1, duration: 0.5})
       .to('.high1', {y: -50, opacity: 1, duration: 0.5})
       .to('.simmons', {y: -50, opacity: 1, duration: 0.5})
       .to('.high2', {y: -50, opacity: 1, duration: 0.5})
       .to('.factorium', {y: -50, opacity: 1, duration: 0.5, delay: 0.2})
       .to('.high3', {y: -50, opacity: 1, duration: 0.5})

/* #terrace로 스크롤시, 고정 x축 슬라이드  */ 
ScrollTrigger.saveStyles("#terrace");
ScrollTrigger.matchMedia({
  "(min-width: 1441px)": function(){
      let container = document.querySelector('#terrace');
      let tl = gsap.timeline({
        scrollTrigger: {
          pin: '#terrace',
          scrub: 1,
          start: 'top top',
          trigger: container,
          end: '+=100%'
        },
        invalidateOnRefresh: true,
        defaults: {ease: 'none'}
      });
      tl.to('.terrace_title', {x: 1150, duration: 0.7})
        .to('.box_all', {
          x: () => -(container.scrollWidth - document.documentElement.clientWidth)
        , duration: 1},0)
        .to('.terrace_title2', {
          x: () => -(1290)
        , duration: 0.7},0)
  }, //e:min-width 1441px
  "all": function(){
  }
});
      
/* #media_section 스크롤시, y축 애니메이션 */ 
gsap.to('.media_title', {
  scrollTrigger: {
    trigger: '#terrace',
    start: 'bottom 10%',
  },
  y: 0,
  duration: 0.5,
  opacity: 1,
  // delay: 1
});  

/* #media_section stroke 텍스트 순차적 애니메이션 */ 
const scrollM = gsap.timeline({
  scrollTrigger: {
      trigger: '#terrace',
        start: 'bottom 5%'
    }
})
scrollM.to('.up1', {color: '#424542', duration: 0.5, delay: 0.7})
       .to('.up2', {color: '#424542', duration: 0.5})
       .to('.up3', {color: '#424542', duration: 0.5})
       .to('.up4', {color: '#424542', duration: 0.5})
       .to('.up5', {color: '#424542', duration: 0.5})


