let btn = document.querySelector('.btn');
    let menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', function () {
        if (!(btn.classList.contains('active-btn'))) {
            btn.classList.add('active-btn');
            menu.classList.add('menu-active');
        }
        else {
            btn.classList.remove('active-btn');
            menu.classList.remove('menu-active');
        }
    })
    $('.works-slider').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }]
    });

    $('.brands-slider').slick({
        infinite: true,
        slidesToShow: 5,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            }]
    });

    // Слайдер отзывов
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    dots: true
                }
            }]
    });

let popup1 = document.getElementById('popup1');
let closePopup1 = document.getElementById('close-popup1');
closePopup1.onclick = closePopUp;


function openPopUp() {
    popup1.style.transform = 'scale(1)';
}

function closePopUp() {
    popup1.style.transform = 'scale(0)';
}

$('#popup1').click(closePopUp);
$("#popup1 div").click(function (e) {
    e.stopPropagation();
});