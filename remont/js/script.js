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


// Показать еще 

const portfolios_cnt = $(".js-service-container");
const portfolio_item_tpl = getCommentTemplate(document.querySelector(".js-service-item"));
const per_carts = 8;
const all_portfolios = [
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
    {
        "main": "img/service-item.png",
        "mini": "img/service-item.png",
    },
];


function showMoreCarts() {
    if (!all_portfolios.length) {
        $(".js-show-more-btn").addClass('inactive');
        return;
    }
    let cnt = 0;
    let all_html = '';
    while ((cnt++) < 8) {
        if (all_portfolios.length) {
            let _this = all_portfolios.shift();
            all_html += replaceTemplate(portfolio_item_tpl, {
                "main": _this["main"],
                "mini": _this["mini"],
            });
        } else {
            $(".js-show-more-btn").addClass('inactive');
        }
    }
    if (all_html) {
        portfolios_cnt.html(portfolios_cnt.html() + all_html)
    }
}

/**
* функция - шаблонизатор. 
*/
function replaceTemplate(replaceText, replaceObj, before = '%', after = '%') {
    for (let text in replaceObj) {
        replaceText = replaceText.split(before + text + after).join(replaceObj[text]);;
    }
    return replaceText;
}

function getCommentTemplate(el) {
    el = el.firstChild;
    while (el) {
        if (el.nodeName == '#comment')
            return el.nodeValue;
        el = el.nextSibling;
    }
    return null;
}

$(function () {
    showMoreCarts();
});
