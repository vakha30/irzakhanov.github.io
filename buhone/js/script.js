$('.banner-slide').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: true,
	dots: true
});

$('.clients-slide').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: true,
	dots: true
});

$('.reviews-slide').slick({
	infinite: true,
	slidesToShow: 1,
	arrows: true,
	dots: true
});

let openBtn = document.getElementById('open-menu');
let closeBtn = document.getElementById('close-menu');
let mobileMenu = document.getElementById('mobile-menu');

openBtn.addEventListener('click', function(){
	mobileMenu.style.top = '0px';
})
closeBtn.addEventListener('click', function(){
	mobileMenu.style.top = '-2000px';
})