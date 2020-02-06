jQuery(document).ready(function ($) {

    let btn = document.querySelector('.burger-menu');
    let open = document.querySelector('.header__menu');

    btn.addEventListener('click', function () {
        if (!(btn.classList.contains('active-btn'))) {
            btn.classList.add('active-btn');
            open.classList.add('menu-open');
        }
        else {
            btn.classList.remove('active-btn');
            open.classList.remove('menu-open');
        }
    })

    $("#fullpage").fullpage({
        menu: '#menu',
        scrollBar: false,
        scrollOverflow: true,
        navigation: true,
        slidesNavigation: true,
        navigationPosition: 'left',
        loopHorizontal: false,
        afterLoad: function (link, index) {
            if (index == 2 || index == 3 || index == 5 || index == 6) {
                $(".burger-menu").addClass('black');
                $(".header__nav > a").css({
                    'color': '#000000'
                });
            } else {
                $(".burger-menu").removeClass('black')
                $(".header__nav > a").css({
                    'color': '#ffffff'
                });
            }
            var mql = window.matchMedia('all and (max-width: 768px)');
            if ( index == 4 && mql.matches) {
                $(".burger-menu").addClass('black');
                $(".header__nav > a").css({
                    'color': '#000000'
                });
            }
        }
    });

    $('.home-slider').slick({
        fade: true
    });

    $('.personal-slider').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tarifs-slider').slick({
        slidesToShow: 1,
        centerMode: true
    });

    var mql = window.matchMedia('all and (max-width: 768px)');
    if (mql.matches) {
        document.querySelector('.events-wrap').classList.add('events-slider');
    } 

    $('.events-slider').slick({
        slidesToShow: 1,
        arrows: false
    });
})
