




(function ($) {
    $(document).ready(function () {

        let btn = document.querySelector('.btn');
        let open = document.querySelector('.menu');

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
        /* IF YOU WANT TO APPLY SOME BASIC JQUERY TO REMOVE THE VIDEO BACKGROUND ON A SPECIFIC VIEWPORT MANUALLY
    
         var is_mobile = false;
    
        if( $('.player').css('display')=='none') {
            is_mobile = true;       
        }
        if (is_mobile == true) {
            //Conditional script here
            $('.big-background, .small-background-section').addClass('big-background-default-image');
        }else{
            $(".player").mb_YTPlayer(); 
        }
    
        });
    
    */
        /*  IF YOU WANT TO USE DEVICE.JS TO DETECT THE VIEWPORT AND MANIPULATE THE OUTPUT  */

        //Device.js will check if it is Tablet or Mobile - http://matthewhudson.me/projects/device.js/

        $(".player").mb_YTPlayer();
        $(".player2").mb_YTPlayer();
        $(".player3").mb_YTPlayer();

        // Слайдер главного экрана
        $('.video-slider').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            fade: true,
            dots: true,
            asNavFor: '.home-slider'
        });
        $('.home-slider').slick({
            infinite: true,
            slidesToShow: 1,
            asNavFor: '.video-slider',
            arrows: true,
            responsive: [
                {
                  breakpoint: 890,
                  settings: {
                    arrows: false
                  }
                }
            ]
        });
        ////////////////////////////////////////

        // Слайдер TEAM
        $('.info-slider').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            fade: true,
            dots: false,
            asNavFor: '.images-slider, .slider-next, .slider-prev',
            responsive: [
                {
                  breakpoint: 890,
                  settings: {
                    dots: true,
                    arrows: false
                  }
                }
            ]
        });
        $('.images-slider').slick({
            infinite: true,
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '0px',
            asNavFor: '.info-slider, .buttons-slider',
            focusOnSelect: true,
            fade: true,
            arrows: false
        });
        $('.slider-next').slick({
            infinite: true,
            slidesToShow: 1,
            centerMode: false,
            fade: true,
            asNavFor: '.info-slider, .images-slider, .slider-prev',
            focusOnSelect: true,
            arrows: false
        });
        $('.slider-prev').slick({
            infinite: true,
            slidesToShow: 1,
            centerMode: false,
            fade: true,
            asNavFor: '.info-slider, .images-slider, .slider-next',
            focusOnSelect: true,
            arrows: false
        });


        ////////////////////////////////////
        // var wave = $('.point'),
        //     winHp = $(window).height() / 1000,
        //     maxHp = 100 / ($(document).height() - $(window).height() + wave.height() * 2);

        // var x = $('.point').scrollTop;

        // var serv = document.getElementById("services");


        // $(window).on('scroll', function () {
        //     var b = $(document).scrollTop();
        //     var box = serv.getBoundingClientRect();

        //     var cScroll = $(this).scrollTop(),
        //         p = cScroll * maxHp,
        //         y = winHp * p + cScroll,
        //         x = (Math.sin(p * 0.1) / 2) * 100;
        //         console.log()
        //     if (box.top < 0) {
        //         wave.offset({ top: y + 300, left: x + 900});
        //     }
        // });

        var serv = document.getElementById("services");
        $(window).on('scroll', function () {
            var box = serv.getBoundingClientRect();
            if (box.top < 150) {
                $('.header').css('background-color', '#555');
            } else {
                $('.header').css('background-color', 'transparent');
            }
        })

        $("#menu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 500);
        });

    });



})(jQuery);