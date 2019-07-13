$('.filter__dropdown-link').on('click', function () {
	$(this).toggleClass('active');
})

$('.filter__category-menu label').on('click', function () {
	$('.filter__category-menu label').removeClass('label-active')
	$(this).addClass('label-active');
})

$('.filter__material-menu label').on('click', function () {
	$('.filter__material-menu label').removeClass('label-active')
	$(this).addClass('label-active');
})

$('.catalog-similar__slider').slick({
	infinite: true,
	slidesToShow: 3,
	arrows: true,
	dots: true,
	centerMode: true,
	centerPadding: '0px',
	responsive: [
    {	
    	breakpoint: 800,
     	settings: {
        	slidesToShow: 1,
		},
    }]
});

