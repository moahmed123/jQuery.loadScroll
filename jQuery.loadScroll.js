// Dynamically load images while scrolling
// Source: github.com/ByNathan/jQuery.loadScroll
// Version: 1.1.1

(function($) {
    
    $.fn.loadScroll = function(duration,numberForshow) {
    
        var $window = $(window),
            images = this,
            inview,
            loaded;
            // number For User Need Show Image 			
			var numbershow = numberForshow - 1 ;
						
			for(var i = 0; i <= numbershow; i++){
				// Select Id For Image . 
				var idImg    = images[i].id;
				// create id for image 
				var idForUse = $('#' + idImg);
				// Select Data-src Attr 				
				var dataSrc  = idForUse.attr('data-src');
				// remove datasrc To Show Image 
				idForUse.removeAttr('data-src');
				// Appen Img In Src .
				idForUse.attr('src',dataSrc);
			}
			
        images.one('loadScroll', function() {
            
            if (this.getAttribute('data-src')) {
                this.setAttribute('src',
                this.getAttribute('data-src'));
                this.removeAttribute('data-src');
                
                if (duration) {
                    
                    $(this).hide()
                           .fadeIn(duration)
                           .add('img')
                           .removeAttr('style');
                    
                } else return false;
            }
            
        });
    
        $window.scroll(function() {
        
            inview = images.filter(function() {
                
                var a = $window.scrollTop(),
                    b = $window.height(),
                    c = $(this).offset().top,
                    d = $(this).height();
                    
                return c + d >= a && c <= a + b;
                
            });
            
            loaded = inview.trigger('loadScroll');
            images = images.not(loaded);
                    
        });
    };
    
})(jQuery);
