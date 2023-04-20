(function ($) {
"use strict";

// preloader
   $(window).on('load', function () {
    $('.loder').delay(1000).fadeOut(1000);
});


// background image load
$("[data-background]").each(function(){
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})
$("[data-background]").each(function(){
    $(this).css("background", $(this).attr("data-bg-color"))
})

//  header sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll <245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});





// $('.menu li a').on("click",function(){
//     $('.menu li a').hide("fast").addClass('.meanclose');

//     $('.mean-bar a.meanmenu-reveal').addClass('.meanclose');
// });


// $('.menu').on("click",function(){
//     $(this).slideUp().siblings('.mean-bar a').addClass('.meanclose');

// });

$('.menu').on("click",function(){
    if($(this)){
       $(this).collapse("hide");
        $('.mean-container a.meanmenu-reveal.meanclose').removeClass('meanclose');
        // alert ("hello");
    }
});



// $('.nav-link li').click(function() {
//     $(this).addClass('active').siblings().removeClass('active');
// });



// $('.navbar .item').on("click",function(){
//     $(".navbar-collapse").collapse('hide');
// });

// $('.nav .item.dropdown-submenu').unbind();

// $( '.menu li a' ).on("click", function(){
//     $('#mobile-menu').click();
//   });


// class="meanmenu-reveal meanclose









// One Page Nav
var top_offset = $('.transparent-header').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

// head line animate
$(function() {
	$('.personal-info').animatedHeadline({
		animationType: 'clip'
	});
})


// counter
$('.counter').counterUp({
    delay: 5,
    time: 1000
});

// team active
$('.team-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 1292,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }]
});

/* magnificPopup img view */
$('.view').magnificPopup({
	type: 'iframe',
});


// init Isotope
var grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	  // use outer width of grid-sizer for columnWidth
	  columnWidth: '.grid-item'
	}
});

// filter items on button click
$('.portfolio-btn').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-btn button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

/*back to top*/
$(document).on('click', '.back-to-top', function () {
	$("html,body").animate({
		scrollTop: 0
	}, 1000);
});
$(window).on("scroll", function() {
    var ScrollTop = $('.back-to-top');
    if ($(window).scrollTop() > 500) {
        ScrollTop.fadeIn(1000);
    } else {
        ScrollTop.fadeOut(1000);
    }
});

// WOW active
new WOW().init();

})(jQuery);