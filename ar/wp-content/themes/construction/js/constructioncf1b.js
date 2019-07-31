var $ = jQuery.noConflict();

jQuery(document).ready(function(){

    //
	//if ($('.menu-item').hasClass('dropdown')) {
	//	{
	//		$('.dropdown').bind("touchstart", function (e) {
	//			$('.dropdown-menu').css('height', '100%');
	//		});
	//	}
	//}

	/*post format gallery*/
	jQuery('.flexpost').flexslider({
		animation: "slide",
        slideshow: true,
        directionNav: true,
        slideshowSpeed: 3000,
        animationSpeed: 700,

        controlNav: false
	});
	
/*-------------------------------------------------*/
/* = ANIMATION
/*-------------------------------------------------*/
jQuery('.animation').waypoint(function(direction) {
	  jQuery(this).addClass('animation-active');
	}, { 	offset: '100%',
	triggerOnce: true });
/*-------------------------------------------------*/
/* = Sticky Menu
/*-------------------------------------------------*/
jQuery(document).scroll(function () {
    var y = jQuery(document).scrollTop(),
        header = jQuery(".fixed-top");

    if (y >= 120) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
});
 /*-------------------------------------------------*/
/*  Prettyphoto
/*-------------------------------------------------*/ 
    "use strict";
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });
 /*-------------------------------------------------*/
/*  tag icons
/*-------------------------------------------------*/ 
	$('.wp-tag-cloud li a').prepend('<span class="badge"><i class="fa fa-check"></i></span>');
	
    (function($) {
        "use strict";
    /*PreLoader*/
        $(".loader-item").delay(700).fadeOut();
        $("#pageloader").delay(800).fadeOut("slow");
    
    
        
    /*NiceScroll*/
        $("html").niceScroll({
            cursorcolor: "#293133",
            cursorborderradius: "0",
            cursorborder: "0 solid #fff",
            cursorwidth: "10px",
            zindex: "999999",
            scrollspeed: 60
        });
    
    
    /*Go Top*/
        $('a[href="#top"]').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false
        });
    
    
    /*Project Filter*/
	
        jQuery(".projects").mixItUp({
            animation: {
                effects: 'fade scale(0)'
            },
            layout: {},
            selectors: {
                target: ".project"
            },
            load: {
                filter: 'all',
                //sort: 'random:asc'
            }
        });

        
    })(jQuery)    
});

/* ---------------------------------------------------
	Quick contact form widget
-------------------------------------------------- */

function checkemail(emailaddress){
	"use strict";
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i); 
	return pattern.test(emailaddress); 
}

jQuery(document).ready(function(){ 
	jQuery('.empty-widget-title').parent().parent('h4').css('display', 'none');
	jQuery('.empty-widget-title').parent('.footer-widget-title').css('display', 'none');
	jQuery('.sidebar-widget ul.drop-menu').removeClass('drop-menu').css('display', 'block');
	"use strict";
	jQuery('#registerErrors, .widgetinfo').hide();		
	var $messageshort = false;
	var $emailerror = false;
	var $nameshort = false;
	var $namelong = false;
	
	jQuery('#contactFormWidget input#wformsend').click(function(){ 
		var $name = jQuery('#wname').val();
		var $email = jQuery('#wemail').val();
		var $message = jQuery('#wmessage').val();
		var $contactemail = jQuery('#wcontactemail').val();
		var $contacturl = jQuery('#wcontacturl').val();
		var $subject = jQuery('#wsubject').val();
	
		if ($name !== '' && $name.length < 3){ $nameshort = true; } else { $nameshort = false; }
		if ($name !== '' && $name.length > 30){ $namelong = true; } else { $namelong = false; }
		if ($email !== '' && checkemail($email)){ $emailerror = true; } else { $emailerror = false; }
		if ($message !== '' && $message !== 'Message' && $message.length < 3){ $messageshort = true; } else { $messageshort = false; }
		
		jQuery('#contactFormWidget .loading').animate({opacity: 1}, 250);
		
		if ($name !== '' && $nameshort !== true && $namelong !== true && $email !== '' && $emailerror !== false && $message !== '' && $messageshort !== true && $contactemail !== ''){ 
			jQuery.post($contacturl, 
				{type: 'widget', contactemail: $contactemail, subject: $subject, name: $name, email: $email, message: $message}, 
				function(/*data*/){
					jQuery('#contactFormWidget .loading').animate({opacity: 0}, 250);
					jQuery('.form').fadeOut();
					jQuery('#bottom #wname, #bottom #wemail, #bottom #wmessage').css({'border':'0'});
					jQuery('.widgeterror').hide();
					jQuery('.widgetinfo').fadeIn('slow');
					jQuery('.widgetinfo').delay(2000).fadeOut(1000, function(){ 
						jQuery('#wname, #wemail, #wmessage').val('');
						jQuery('.form').fadeIn('slow');
					});
				}
			);
			
			return false;
		} else {
			jQuery('#contactFormWidget .loading').animate({opacity: 0}, 250);
			jQuery('.widgeterror').hide();
			jQuery('.widgeterror').fadeIn('fast');
			jQuery('.widgeterror').delay(3000).fadeOut(1000);
			
			if ($name === '' || $name === 'Name' || $nameshort === true || $namelong === true){ 
				jQuery('#wname').css({'border-left':'4px solid #red'}); 
			} else { 
				jQuery('#wname').css({'border-left':'4px solid #929DAC'}); 
			}
			
			if ($email === '' || $email === 'Email' || $emailerror === false){ 
				jQuery('#wemail').css({'border-left':'4px solid red'});
			} else { 
				jQuery('#wemail').css({'border-left':'4px solid #929DAC'}); 
			}
			
			if ($message === '' || $message === 'Message' || $messageshort === true){ 
				jQuery('#wmessage').css({'border-left':'4px solid red'}); 
			} else { 
				jQuery('#wmessage').css({'border-left':'4px solid #929DAC'}); 
			}
			
			return false;
		}
	});
});