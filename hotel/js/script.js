jQuery(document).ready(function($) {

    // let btn = document.querySelector('.btn');
    // let open = document.querySelector('.menu');

    // btn.addEventListener('click', function () {
    //     if (!(btn.classList.contains('active-btn'))) {
    //         btn.classList.add('active-btn');
    //         open.classList.add('menu-open');
    //     }
    //     else {
    //         btn.classList.remove('active-btn');
    //         open.classList.remove('menu-open');
    //     }
    // })

    $("#fullpage").fullpage({
        // sectionsColor:['#C63D0F','#1BBC9B','#7E8F7C'],
        anchors:['home','secondPage','3rdPage'],
        menu:'#menu',
        scrollBar:false,
        scrollOverflow:true,
        navigation:true,
        // navigationTooltips:['Секция 1','Секция 2','Секция 3'],
        slidesNavigation:true,
        navigationPosition:'left',
        //slidesNavPosition:'top'
        // loopTop:true,
        // loopBottom:true,
        loopHorizontal:false,
        
        // afterResize:function(link,index) {
        // 	alert('Hello');
        // 	},
        afterLoad:function(link,index) {
            
            if(index == 2 || index == 3 || index == 5 || index == 6) {
                $(".burger-menu").css({
                    'borderColor': '#000000'
                });
                $(".header__nav a").css({
                    'color': '#000000'
                });
            } else {
                $(".burger-menu").css({
                    'borderColor': '#ffffff'
                });
                $(".header__nav a").css({
                    'color': '#ffffff'
                });
            }
            if(link == '3rdPage') {
                $("#section2 h1").fadeIn(1500,function() {
                    $("#section2 p").css({'display':'block'}).animate({'fontSize':'8em'},1000)
                });
            }
        }
    });

    $('.home-slider').slick({
        fade: true
    });

    $('.personal-slider').slick({
        slidesToShow: 1,
        centerMode: true
    });

    $('.tarifs-slider').slick({
        slidesToShow: 1,
        centerMode: true
    });

})