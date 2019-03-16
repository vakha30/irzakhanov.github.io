let menu = document.getElementById('menu');
let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');

openMenu.onclick = function() {
	menu.style.top = 0;
}

closeMenu.onclick = function() {
	menu.style.top = '-1000px';
}

$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop()!=0){
				$('.btn-up').fadeIn();
			}
			else{
				$('.btn-up').fadeOut();
			}
		});
	$('.btn-up').click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	});
	$(function() {
		$('a[href="#scroll"]').click(function(event) {
			event.preventDefault()
			var el = $('.about');
			$('body,html').animate({
				scrollTop: $(el).offset().top
			}, 1000);
		});
	});