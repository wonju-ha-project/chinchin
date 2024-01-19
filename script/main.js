// 서브메뉴 부드럽게 내려오기
$(function () {
    $('.nav> ul> li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });

    $('.nav> ul> li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });
});

// 고정된 헤더 스크롤 반응
$(function () {
    //숨긴 메뉴 보이기 
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta 
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .nav-up. 
        // This is necessary so you never see what is "behind" the navbar. 
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down 
            $('header').addClass('nav-up');
        } else {
            // Scroll Up 
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up');
            }
        }
        lastScrollTop = st;
    }
});

// 갤러리(센터)
$(function () {
    var swiper = new Swiper('.gallery-center_inner ', {
        slidesPerView: 3,//보여지는 갤러리 수
        spaceBetween: 100,//갤러리 사이 간격
        centeredSlides: true,//센터모드
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        // autoplay: {
        //     delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        //     disableOnInteraction: false,
        // },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery-center .swiper-button-next',
            prevEl: '.gallery-center .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery-center .swiper-pagination',
            clickable: true,
        },
    });
});

// 슬라이드
$(function () {
    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 5,//보여지는 갤러리 수
        spaceBetween: 60,//갤러리 사이 간격
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

// 탑버튼
$(function () {
$('#top_btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500);
    return false;
});
});

// 필터
$(function () {
    $('.filter li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('#all').click(function () {
      $('.filter_content> div').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
    });
    $('#filter1').click(function () {
      $('.filter1').show();
      $('.filter_content> div').not('.filter1').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
    });
    $('#filter2').click(function () {
      $('.filter2').show();
      $('.filter_content> div').not('.filter2').hide();
    });
    $('#filter3').click(function () {
      $('.filter3').show();
      $('.filter_content> div').not('.filter3').hide();
    });
  });
// 슬라이너배너
$(function () {
    var swiper = new Swiper('.slide ', {
        speed: 4000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.slide .swiper-button-next',
            prevEl: '.slide .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.slide .swiper-pagination',
            clickable: true,
        },
    });
});

// 갤러리
$(function () {
    var swiper = new Swiper('.gallery .gallery_inner ', {
        slidesPerView: 1,//보여지는 갤러리 수
        spaceBetween: 600,//갤러리 사이 간격
        // speed: 6000,//버튼을 슬라이드가 넘어가는 시간
        // autoplay: {
        //     delay: 4000,//자동으로 넘어가기 전 머무르는 시간
        //     disableOnInteraction: false,
        // },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery .swiper-pagination',
            clickable: true,
        },
    });
});

// 캘린더
$(function () {
    $('.calendar').pignoseCalendar();
});

// 팝업
$(function(){
    $("input[type='submit']").click(function(){
        alert("예약이 완료되었습니다.");
    });
});

// aos
AOS.init({
    duration: 1200 //aos 나타나는 속도
});