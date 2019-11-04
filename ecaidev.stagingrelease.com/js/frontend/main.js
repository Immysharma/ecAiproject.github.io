
$(document).ready(function () {

    $('.grid').isotope({
        itemSelector: '.grid-item',
    });

// filter items on button click
    $('.filter-button-group').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({filter: filterValue});
        $('.filter-button-group li').removeClass('active');
        $(this).addClass('active');
    });
 // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });
$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  
	$(".fillterresults_box").click(function () {
$('.fillterresults_box').toggleClass("fullwidth");
$('.fillterresults_box').toggleClass("absolute");
$('.slider_content').toggleClass('slider_content_open');
	});
  

});


/* $(".membership_btn a").click(function () {
    $(".membership_btn a").removeClass("active")
    $(this).addClass("active");
}); */

$('.membership_btn a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.membership_btn a').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

$('.responsive').slick({
  dots: false,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


   



                        

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


















(function ($) {
    "use strict";

    /*--
     Menu Sticky
     -----------------------------------*/
    var windows = $(window);
    var sticky = $('.header-sticky')
    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        if (scroll < 250) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });

    /*--
     Mobile Menu
     ------------------------*/
    var multiPageMenu = $('.multi-page-menu');
    multiPageMenu.meanmenu({
        meanScreenWidth: '1024',
        meanMenuContainer: '.mobile-menu.multi-page',
        meanMenuClose: '<i class="icons-cross"></i>',
        meanMenuOpen: '<i class="ico-menu"></i>',
        meanRevealPosition: 'right',
        meanMenuCloseSize: '30px',
    });
    var onePageMenu = $('.one-page-menu');
    onePageMenu.meanmenu({
        meanScreenWidth: '1024',
        meanMenuContainer: '.mobile-menu.one-page',
        meanMenuClose: '<i class="icons-cross"></i>',
        meanMenuOpen: '<i class="ico-menu"></i>',
        meanRevealPosition: 'right',
        meanMenuCloseSize: '30px',
        onePage: true,
    });

    /*--
     One Page Menu
     -----------------------------------*/
    var headerSection = $('.header-section');
    var TopOffsetId = headerSection.height() - 1;
    onePageMenu.onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2,
        scrollSpeed: 1000,
        scrollOffset: TopOffsetId,
    });

    /*-- 
     Menu Toggle
     -----------------------------------*/
    var menuSection = $('.menu-section');
    var menuToggle = $('.menu-toggle');
    menuToggle.on('click', function () {
        if (headerSection.hasClass('menu-open')) {
            headerSection.removeClass('menu-open');
            $(this).html('<i class="ion-android-menu"></i>');
            menuSection.removeClass('active');
        } else {
            headerSection.addClass('menu-open');
            $(this).html('<i class="ion-android-close"></i>');
            menuSection.addClass('active');
        }
    });

    /*-- 
     Creative Menu Close On Link Click
     -----------------------------------*/
    $('.cr-menu ul li a').on('click', function () {
        if (headerSection.hasClass('menu-open')) {
            headerSection.removeClass('menu-open');
            menuToggle.html('<i class="ion-android-menu"></i>');
            menuSection.removeClass('active');
        }
    });

    /*-- 
     Search Toggle
     -----------------------------------*/
    var headerSearch = $('.header-search');
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function () {
        if (headerSearch.hasClass('open')) {
            headerSearch.removeClass('open');
            $(this).html('<i class="ion-android-search"></i>');
        } else {
            headerSearch.addClass('open');
            $(this).html('<i class="ion-android-close"></i>');
        }
    });

    /*-- 
     Background Parallax
     -----------------------------------*/
    var parallaxWindow = $('.parallax-window');
    parallaxWindow.parallax();

    /*--
     Smooth Scroll
     -----------------------------------*/
    $('[data-scroll], .mobile-menu.one-page .mean-nav ul li a').on('click', function (e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            speed: 1000,
            scrollTarget: link.hash,
            offset: -TopOffsetId,
        });
    });

    /*--
     Hero Slider
     -----------------------------------*/
    $('.hero-slider').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    /*--
     Creative Testimonial Slider
     -----------------------------------*/
    $('.cr-testimonial-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
    });


    $('.co-client-slider-1, .mp-client-slider').slick({
        arrows: false,
        speed: 700,
        slidesToShow: 6,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
					autoplay: true,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
					autoplay: true,
                }
            },
        ]
    });



    /*--
     Isotop with ImagesLoaded
     -----------------------------------*/
    var isotopFilter = $('.isotop-filter');
    var isotopGrid = $('.isotop-grid');
    var isotopGridMasonry = $('.isotop-grid-masonry');
    var isotopGridItem = '.isotop-item';
    /*-- Images Loaded --*/
    isotopGrid.imagesLoaded(function () {
        /*-- Filter List --*/
        isotopFilter.on('click', 'button', function () {
            isotopFilter.find('button').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopGrid.isotope({filter: filterValue});
        });
        /*-- Filter Grid Layout FitRows --*/
        isotopGrid.isotope({
            itemSelector: isotopGridItem,
            layoutMode: 'fitRows',
            masonry: {
                columnWidth: 1,
            }
        });
        /*-- Filter Grid Layout Masonary --*/
        isotopGridMasonry.isotope({
            itemSelector: isotopGridItem,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 1,
            }
        });
    });

    /*-- 
     ScrollUp
     -----------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--
     Magnific Popup
     -----------------------------------*/
    /*-- Video --*/
    var videoPopup = $('.video-popup');
    videoPopup.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    /*-- Image --*/
    var imagePopup = $('.image-popup');
    imagePopup.magnificPopup({
        type: 'image',
    });
    /*-- Gallery --*/
    var galleryPopup = $('.gallery-popup');
    galleryPopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*-- Gallery Video --*/
    var videGalleryPopup = $('.video-gallery-popup');
    videGalleryPopup.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        },
        gallery: {
            enabled: true
        }
    });


    /*--
     Counter UP
     -----------------------------------*/
    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });

    /*-- 
     Time Picker
     -----------------------------------*/
    $('input[type="time"]').datetimepicker({
        format: 'LT',
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: 'fa fa-crosshairs',
            clear: 'fa fa-trash-o',
            close: 'fa fa-times'
        },
    });

    /*-- 
     Date Picker
     -----------------------------------*/
    $('input[type="date"]').datetimepicker({
        format: 'L',
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: 'fa fa-crosshairs',
            clear: 'fa fa-trash-o',
            close: 'fa fa-times'
        },
    });

    /*-- 
     Time & Date Picker
     -----------------------------------*/
    $('.date-time').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: 'fa fa-crosshairs',
            clear: 'fa fa-trash-o',
            close: 'fa fa-times'
        },
    });



})(jQuery);


/*--member_tab--*/
$(window).on("load", function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
	

	
});




  // custom code

 