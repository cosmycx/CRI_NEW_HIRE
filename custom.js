//circles bounce at scroll in view
$( document ).ready(function() {

	var $bouncer = $('section.circles img');
	var $window = $(window);

	function checkInView() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);
		var time = 0;

		$.each($bouncer, function() {
			var $element = $(this);

			var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);
			 
		    //check to see if in viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {

					setTimeout(function() {							
							$element.addClass('bounce');
					}, time+=150);

		    } else {
		      $element.removeClass('bounce');
		    }
		});
	}
	$window.on('scroll resize', checkInView);
});

//charts display at scroll in view
$( document ).ready(function() {

	var $charts = $('article.bars');
	var $window = $(window);

	function checkInView() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);
		var time = 0;

		$.each($charts, function() {
			var $element = $(this);
			var $bars =$(this).find('rect');
			var $texts =$(this).find('text');

			var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);
			 
		    //check to see if in viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {

					setTimeout(function() {	
						var barTime = 0;
						
						$.each($bars, function(){
							var $bar = $(this);

							setTimeout(function() {	
							 	$bar.show();
							 }, barTime+=100);
						}).promise().done(function(){$texts.fadeIn();})			
					}, time+=500);
		     } 
		});
	}
	$window.on('scroll resize', checkInView);
});

