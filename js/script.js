/* 메인 메뉴 클릭 스크롤 */ 
const about = document.querySelectorAll("#nav li a")
const content1 = document.querySelector("#philosophy")
const content2 = document.querySelector("#factorium")
const content3 = document.querySelector("#terrace")
const firstTop = content1.offsetTop
const secondTop = content2.offsetTop
const thirdTop = content3.offsetTop

about[0].onclick = function(){
    window.scroll({top : firstTop, behavior: "smooth"})
};
about[1].onclick = function(){
    window.scroll({top : secondTop, behavior: "smooth"})
};
about[2].onclick = function(){
    window.scroll({top : thirdTop, behavior: "smooth"})
};

jQuery(document).ready(function(){

    /* 카테고리 메뉴 */ 
    $(".category_wrap").click(function(){
        $(".category_nav").toggleClass("open");
        $(this).toggleClass("click_btn")
    });

    /* 카테고리 메뉴 아코디언 */ 
    $(".category_menu").click(function(){
        var $menu = $(this);
        var $sub = $menu.siblings(".sub_menu");

        $(".sub_menu").not($sub).slideUp();
        $sub.slideToggle();

        var $a = $($menu).children();
        var $span = $a.children();
        
        $(".category_menu > a > span").not($span).removeClass("action");
        $span.toggleClass("action");
    });

    /* 카테고리 타이틀 stroke 버튼 채우기 */ 
    var fill = $(".category_menu a")

    fill.click(function(){
        fill.not(this).removeClass("active");
        $(this).toggleClass("active");
    });

    /* #philosophy로 스크롤시, y축 애니메이션 */ 
    var scrollP = $(".philo_wrap");
    var $offset = 100;
    var scrollPOST = $("#philosophy").offset().top - $offset;

    $(window).scroll(function(){
        if($(this).scrollTop() > scrollPOST)
        scrollP.find(".img_stagger").addClass("animate");
    });

    /* #philosophy이미지 mouseover시 텍스트 전환 애니메이션 */
    var txt = $(".philo_wrap li");
    var ntxt = $(".philo_hover");

    txt.mouseover(function(){
        $(this).children(".philo_title").hide().next(ntxt).show();
        $(this).find(ntxt).stop().animate({opacity:1,marginTop:"-50px"}, 800);
    }); 
    txt.mouseout(function(){
        $(this).children(".philo_title").show().next(ntxt).hide();
        $(this).find(ntxt).stop().animate({opacity:0,marginTop:0}, 800);
    }); 

    /* 비디오 재생 버튼 활성화 */ 
    var player = $("#player");

    $(".play").click(function(){
        player.get(0).play();
        $(this).hide();
    });
});

