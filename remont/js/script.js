window.onload = function () {
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
                    arrows: false
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
}