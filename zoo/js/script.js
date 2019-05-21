let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');
let mobileMenu = document.getElementById('mobile-menu');

openMenu.onclick = function () {
    mobileMenu.style.transform = 'scaleY(1)';
}
closeMenu.onclick = function () {
    mobileMenu.style.transform = 'scaleY(0)';
}

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