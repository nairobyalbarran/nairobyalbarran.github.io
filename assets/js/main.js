/*
	Miniport by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


//Skill bar
jQuery(document).ready(function () {

    jQuery('.skills li').each(function () {
        jQuery(this).appear(function () {
            jQuery(this).animate({opacity: 1, left: "0px"}, 800);
            var b = jQuery(this).find(".progress-bar").attr("data-width");
            jQuery(this).find(".progress-bar").animate({
                width: b + "%"
            }, 1300, "linear");
        });
    });

});


jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).appear(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 5000);
        });
    });
});


(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');
        
        
        skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});
        
		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly.
			$window.load(function() {

				var x = parseInt($('.wrapper').first().css('padding-top')) - 15;

				$('#nav a, .scrolly').scrolly({
					speed: 1000,
					offset: x
				});

			});
        
        	// Lightbox gallery.
				$window.on('load', function() {
                    
//					$('.two').poptrox({
//						caption: function($a) { return $a.next('h3').text(); },
//						overlayColor: '#2c2c2c',
//						overlayOpacity: 0.85,
//						popupCloserText: '',
//						popupLoaderText: '',
//						selector: '.work-item a.image',
//						usePopupCaption: true,
//						usePopupDefaultStyling: false,
//						usePopupEasyClose: false,
//						usePopupNav: true,
//						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
//					});
                    
                    
                $('.poptroxactive').each(function() {
                    $(this).poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});
                });
          });

	});
    
    
    
		

})(jQuery);