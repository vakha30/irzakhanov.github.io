// $(function(){

// 	var hf = function(){
// 		var h_header = $('header').height();
// 		var h_footer = $('footer').height();
// 		$('.content').css({
// 			'paddingTop': h_header,
// 			'paddingBottom': h_footer
// 		});
// 	}

// 	$(window).bind('load resize', hf);

// });

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

function changeItem() {
 			document.getElementById('one').style.color = 'red';
		}

		function rechangeItem() {
 			 document.getElementById('one').style.color = 'white';
		}



