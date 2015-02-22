$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();	whyStuff();	whatBelt();	whatLoadLeft();	whatLoadBlog();	whatLoadRight();	
	
	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".biglink").fitText(1.5);
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function whatBelt() {    $(".trigger").remove();  $(".return").remove();  $('.what-unit-left').click(function() {    $('.what-belt').css('left','-100%');    $('.what-container').show();  });  $('.what-200-unit').click(function() {    $('.what-belt').css('left','-100%');    $('.what-container').show();  });  $('.what-unit-right').click(function() {    $('.what-belt').css('left','-100%');    $('.what-container').show();  });  $('.what-return').click(function() {    $('.what-belt').css('left','0%');    $('.what-container').hide(800);  });}function  whatLoadLeft() {    $.ajaxSetup({ cache: true });    $('.what-unit-left').click(function() {    var $this = $(this),        newTitle = $this.find('strong').text(),        newfolder = $this.data('folder'),        spinner = '<div class="loader">Loading...</div>',        newHTML = 'what/'+ newfolder +'.html';          $('.project-load').html(spinner).load(newHTML);    $('.project-title').text(newTitle);  });  }function  whatLoadBlog() {    $.ajaxSetup({ cache: true });    $('.what-200-unit').click(function() {    var $this = $(this),        newTitle = $this.find('strong').text(),        newfolder = $this.data('folder'),        spinner = '<div class="loader">Loading...</div>',        newHTML = 'what/'+ newfolder +'.html';          $('.project-load').html(spinner).load(newHTML);    $('.project-title').text(newTitle);  });  }function  whatLoadRight() {    $.ajaxSetup({ cache: true });    $('.what-unit-right').click(function() {    var $this = $(this),        newTitle = $this.find('strong').text(),        newfolder = $this.data('folder'),        spinner = '<div class="loader">Loading...</div>',        newHTML = 'what/'+ newfolder +'.html';          $('.project-load').html(spinner).load(newHTML);    $('.project-title').text(newTitle);  });  }function workBelt() {
  
  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit').click(function() {
    $('.work-belt').addClass("slided");
    $('.work-container').show();
  });
  
  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
  });

}

function  workLoad() {
  
  $.ajaxSetup({ cache: true });
  
  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'how/'+ newfolder;
      
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
  
}


function whyStuff() {		$('.why-unit').first().addClass('active-why');	$('.why-logo').first().addClass('active-why');	$('.why-mobile-nav span').first().addClass('active-why');		$('.why-logo, .why-mobile-nav span').click(function() {		var $this =$(this),				$siblings = $this.parent().children(),				position = $siblings.index($this);						$('.why-unit').removeClass('active-why').eq(position).addClass('active-why');		$siblings.removeClass('active-why');			$this.addClass('active-why');	});			$('.why-control-next, .why-control-prev').click(function() {	  	    var $this = $(this),	        curActiveWhy = $('.why-belt').find('.active-why'),	        position = $('.why-belt').children().index(curActiveWhy),	        whyNum = $('.why-unit').length;	        	      if($this.hasClass('why-control-next')) {	        	        if(position < whyNum -1){	          $('.active-why').removeClass('active-why').next().addClass('active-why');	        } else {	          $('.why-unit').removeClass('active-why').first().addClass('active-why');	          $('.why-logo').removeClass('active-why').first().addClass('active-why');	        }	        	      } else {	        	        if (position === 0) {	          $('.why-unit').removeClass('active-why').last().addClass('active-why');	          $('.why-logo').removeClass('active-why').last().addClass('active-why');	        } else {	          $('.active-why').removeClass('active-why').prev().addClass('active-why');  	        }		      }	        	  	  });		}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );





