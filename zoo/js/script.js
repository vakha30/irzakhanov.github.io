let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');
let mobileMenu = document.getElementById('mobile-menu');

openMenu.onclick = function () {
    mobileMenu.style.transform = 'scaleY(1)';
}
closeMenu.onclick = function () {
    mobileMenu.style.transform = 'scaleY(0)';
}


// Accordion 

$(function() {
    var Accordion = function(el, multiple) {
    	this.el = el || {};
      // more then one submenu open?
      	this.multiple = multiple || false;
      
      	var dropdownlink = this.el.find('.dropdownlink');
      	dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
	var accordion = new Accordion($('.accordion-menu'), false);
})

$(function() {
    var Accordion = function(el, multiple) {
    	this.el = el || {};
      // more then one submenu open?
      	this.multiple = multiple || false;
      
      	var dropdownlink = this.el.find('.dropdownlink2');
      	dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems2').not($next).slideUp().parent().removeClass('open');
      }
    }
	var accordion = new Accordion($('.accordion-menu2'), false);
})

// Slider

$('.tovar-slider').slick({
	infinite: true,
	slidesToShow: 2,
	arrows: true,
	dots: false,
	centerMode: true,
	centerPadding: '0px',
	responsive: [
    {
    	breakpoint: 800,
     	settings: {
        	slidesToShow: 1,
        }
    }]
});
  
// Gallery 

$(function() {
    $("[data-fancybox]").fancybox();
});



// PopUP

let popup1 = document.getElementById('popup1');
let closePopup1 = document.getElementById('close-popup1');
closePopup1.onclick = closePopUp;


function openPopUp () {
	popup1.style.transform = 'scale(1)';
}

function closePopUp () {
	popup1.style.transform = 'scale(0)';
}

$('#popup1').click(closePopUp);
    $("#popup1 div").click(function(e) {
        e.stopPropagation();
});

let popup2 = document.getElementById('popup2');
let closePopup2 = document.getElementById('close-popup2');
closePopup2.onclick = closePopUp2;

function openPopUp2 () {
	popup2.style.transform = 'scale(1)';
}

function closePopUp2 () {
	popup2.style.transform = 'scale(0)';
}

$('#popup2').click(closePopUp2);
    $("#popup2 div").click(function(e) {
        e.stopPropagation();
});

// Video 

var vids = $("video"); 
$.each(vids, function(){
       this.controls = false;
}); 
//Loop though all Video tags and set Controls as false

$("video").click(function() {
    this.controls = true;
    this.paused();
  //console.log(this); 
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

