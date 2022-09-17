(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    // new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.sticky-top').addClass('shadow-sm sttop').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm sttop').css('top', '0px');
            // $('.sticky-top').removeClass('shadow-sm sttop').css('top', '-100px');
        }
    });
       
   

    // Header carousel
   

$('#owl-carousel-main').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeOutDown',
    dotsData: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#multi-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    nav:true,
    navText: ["<div class='nav-button owl-prev'>Prev</div>", "<div class='nav-button owl-next'>Next</div>"],       
    dots:false,
    speed:1000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
})(jQuery);

