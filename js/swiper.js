/* swiper 이미지 슬라이드 */ 
const swiper = new Swiper('.swiper-philosophy', {
  slidesPerView: 'auto',
  freeMode: true, 
  observer: true, 
  observeParents: true,
});

var ww = $(window).width();
var $slide = undefined;

function teSwiper() {
  if (ww < 1440 && $slide == undefined) {
    $slide = new Swiper(".swiper-terrace", {
      slidesPerView: 'auto',
      spaceBetween: 1,
      freeMode: true, 
      observer: true, 
      observeParents: true,
    });
  } else if (ww >= 1441 && $slide != undefined) {
    $slide.destroy();
    $slide = undefined;
  } 
}

teSwiper();

$(window).on('resize', function () {
  ww = $(window).width();
  teSwiper();
});

