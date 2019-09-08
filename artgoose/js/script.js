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
$('.slider').slick({
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


// $('.views-slider').slick({
//     infinite: true,
//     slidesToShow: 4,
//     arrows: true,
//     dots: false,
//     responsive: [
//         {
//             breakpoint: 868,
//             settings: {
//                 slidesToShow: 1,
//                 arrows: false,
//                 dots: true
//             }
//         }]
// });

/////////////////////


let dropDown = document.querySelectorAll('.dropdown-link');
dropDown.forEach(element => {
    element.addEventListener('click', function() {
        if(!element.classList.contains('active-drop')) {
            document.querySelectorAll('.dropdown-link').forEach(el => {
                el.classList.remove('active-drop')
            })
            element.classList.add('active-drop');
        }
        else {
            element.classList.remove('active-drop');
        }
    })
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


// Открытие формы

// function openForm() {
//     let sendForm = document.querySelector('#form-send');
//     let btnZakaz = document.querySelector('#btn-zakaz');
//     let priceVid = document.querySelector('#price-vid');
//     if (!sendForm.classList.contains('active-form')) {
//         btnZakaz.classList.add('btn-hide');
//         setTimeout(function(){priceVid.classList.add('price-active'); },200);
//         setTimeout(function(){sendForm.classList.add('active-form'); },500);
//     }
// }

//Услуги. Показать еще

let page = document.querySelectorAll('.js-page');
let serviceBtn = document.querySelector('.service__btn');
let pageCount = 1;



function showPage(p) {
    if ( page[p].classList.contains('hide') ) {
        page[p].classList.remove('hide');
    }
    if ( pageCount >= page.length -1 ) {
        
            serviceBtn.classList.add('inactive')
        
    }
}

function pageInit() {
    showPage(pageCount);
    if ( pageCount < page.length -1 ) {
        pageCount++;
    }    
}