
$(document).ready(function() {

	$window = $(window);
	
	if( !(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) )
	{
		$('header[id="header"]').each(function(){
			var $bgobj = $(this); // assigning the object
	 
			$(window).scroll(function() {
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
			
				if(yPos < -155)
				{
					yPos = -155;
				}
				if(yPos > 0)
				{
					yPos = 0;
				}
			 
				// Put together our final background position
				var coords = yPos + 'px';
 
				// Move the background
				$bgobj.css({ "margin-top": coords });
			}); 
		}); 
	
		$('div[data-jsdata="scrolling"]').each(function(){
			var $bgobj = $(this); // assigning the object
	 
			$(window).scroll(function() {
				 var objPos = ($window.scrollTop()-($bgobj.offset().top+$bgobj.height()/2)) + $window.height()/2;
			 
				 var speed = -objPos/$bgobj.data('speed');
				 var offset = $bgobj.data('offset-y');
			 
				// Put together our final background position
				var coords = '0px ' + (speed + offset) + 'px';
 
				// Move the background
				$bgobj.css({ "background-position": coords });
			}); 
		});
	}
});
		