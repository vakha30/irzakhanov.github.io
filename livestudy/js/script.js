jQuery(function () {
	// Mobile menu
	$('.sub > a').click(function () {
		$('.sub ul').slideUp();
		if ($(this).next().is(":visible")) {
			$(this).next().slideUp();
		} else {
			$(this).next().slideToggle();
		}
		return false;
	});
	$('.mini-menu > ul > li > a').click(function () {
		$('.mini-menu > ul > li > a, .sub a').removeClass('active');
		$(this).addClass('active');
	}),
		$('.sub ul li a').click(function () {
			$('.sub ul li a').removeClass('active');
			$(this).addClass('active');
		});

	//   Slider

	jQuery('.slider1').slick({
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					dots: true
				},
			}]
	});
	jQuery('.slider2').slick({
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					dots: true
				},
			}]
	});

	let btn = document.querySelector('.btn');
	let menu = document.querySelector('.mobile-menu');

	btn.addEventListener('click', function () {
		if (!(btn.classList.contains('active-btn'))) {
			btn.classList.add('active-btn');
			menu.classList.add('mobile-menu-active');
		}
		else {
			btn.classList.remove('active-btn');
			menu.classList.remove('mobile-menu-active');
		}
	})
})


