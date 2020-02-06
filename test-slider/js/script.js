window.onload = () => {
    $('.home-slider').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.home-slider2',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
    });
    
    $('.home-slider2').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.home-slider',
        dots: false,
        focusOnSelect: true    
    });
    
    let btnPresent = document.querySelector('#presentation-btn');
    let present = document.querySelector('#presentation');

    function start() {
        present.classList.add('hide');
    }

    btnPresent.addEventListener('click', (e) => {
        e.preventDefault;
        setTimeout(start, 5000);
    })
}



