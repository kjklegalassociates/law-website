jQuery('document').ready(function ($) {

    document.addEventListener('wpcf7mailsent', function (event) {
        $('form.wpcf7-form')[0].reset();
    }, false);

    /* Mobile Menu start ---- Full Menu Bar JS */
    if ($('.menu-sidebar .menu-bar-wrapper li').hasClass('menu-item-has-children')) {
        $(".menu-sidebar .menu-item-has-children > a").after("<span class='sidebar-menu-arrow'></span>");
    }

    $('.menu-close-button').click(function () {
        $('.menu-wrap').removeClass('menu-show');
        $('.menu-button').removeClass('button-open');
    });
    var $toggleButton = $('.menu-button'),
            $menuWrap = $('.menu-wrap'),
            $sidebarArrow = $('.sidebar-menu-arrow');
    // Hamburger Button
    $toggleButton.on('click', function () {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
    $('.sidebar-menu-arrow').click(function () {
        $(this).next('.sub-menu').slideUp(300);
        if ($(this).next().is(':visible')) {
            $(this).next().slideUp(300);
        } else {
            $(this).next().slideDown(300);
        }

        if ($(this).hasClass('responsive-up-arrow')) {
            $(this).removeClass('responsive-up-arrow');
        } else {
            $(this).addClass('responsive-up-arrow');
        }
    });
    $('.menu-button').on('click', function () {
        $('body').addClass('nav-open-menu');
    });
    $('.menu-close-button').on('click', function () {
        $('body').removeClass('nav-open-menu');
    });

    /* Mobile Menu End */


    /*====== Header Search Popup =======*/
    $('.header #global-search').click(function () {
        $('body').addClass('search-open');
        $('.search-panel').css('transform', 'translateY(0)');
        $("#searchform").find('input:text').val('');
        $('#responsive-menu-button').css('visibility', 'hidden');
        $('.header .phone').css('visibility', 'hidden');

        if ($('html').hasClass('responsive-menu-open')) {
            $('#responsive-menu-button').removeClass('is-active');
            $('html').removeClass('responsive-menu-open');
            $('#responsive-menu-button').trigger('click');
        }

    });

    $('.search-panel .search-close').click(function () {
        $('body').removeClass('search-open');
    });


    $('.search-close').click(function () {
        $('.search-panel').css('transform', 'translateY(-100%)');
        $("#searchform").find('input:text').val('');
        $('.header .phone').css('visibility', 'visible');
    });

    /*====== Header Search =======*/
    // $('<span class="custom_form_msg d-none">Required</span>').insertAfter('#header-search .search-field');
    // $("#header-search .search-btn").click(function () {
    //     var searchinput_val = $('#header-search .search-field').val();
    //     if (searchinput_val === '') {
    //         $("#header-search .custom_form_msg").removeClass('d-none');
    //     } else {
    //         $("#header-search .custom_form_msg").addClass('d-none');
    //     }
    // });
    // $('#header-search .search-field').bind('invalid', function () {
    //     return false;
    // });
    // $("#header-search .search-field").keypress(function () {
    //     $(this).next('.custom_form_msg').addClass('d-none');
    // });


    /*====== Sidebar Search =======*/
    $('<span class="custom_form_msg d-none">Required</span>').insertAfter('#sidebar-search .search-field');
    $("#sidebar-search .search-btn").click(function () {
        var searchinput_val = $('#sidebar-search .search-field').val();
        if (searchinput_val === '') {
            $("#sidebar-search .custom_form_msg").removeClass('d-none');
        } else {
            $("#sidebar-search .custom_form_msg").addClass('d-none');
        }
    });
    $('#sidebar-search .search-field').bind('invalid', function () {
        return false;
    });
    $("#sidebar-search .search-field").keypress(function () {
        $(this).next('.custom_form_msg').addClass('d-none');
    });


    /*** Autocomplete OFF ***/
    $('input').attr('autocomplete', 'off');

    //***** IPad Menu Double Click ****//
    if ($(window).width() >= 767) {
        $(function () {
            $('#menu-primary-menu li:has(ul)').doubleTapToGo();
        });
    }

    /*** Fixed Header ***/
    var logo_suffle_1 = $('.header .logo img').attr('data-src-1');
    var logo_suffle_2 = $('.header .logo img').attr('data-src-2');

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1) {
            $('.header').addClass('shrink');
            $('body').addClass('header-fixed');
            /*$('.header .logo img').attr('src', logo_suffle_2);*/
        } else {
            $('.header').removeClass('shrink');
            $('body').removeClass('header-fixed');
            /*$('.header .logo img').attr('src', logo_suffle_1);*/
        }
    });

    if ($(document).scrollTop() > 1) {
        $('.header').addClass('shrink');
        $('body').addClass('header-fixed');
        /*$('.header .logo img').attr('src', logo_suffle_2);*/
    } else {
        $('.header').removeClass('shrink');
        $('body').removeClass('header-fixed');
        /*$('.header .logo img').attr('src', logo_suffle_1);*/
    }

    /*** Window Loaded  ***/
    $(window).on("load", function () {
        $("body").addClass("body-loaded");
    });


    var headerHeight = $('header').outerHeight();

    setTimeout(function () {
        var headHeight = $('header').outerHeight();
        $('.home-slider, .banner').css('margin-top', headHeight - 10);
    }, 100);

    $('#responsive-menu-container').css('margin-top', headerHeight);


    $(".scroll").on('click', function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - headerHeight
            }, 1500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });
        } // End if
    });

    /* Validation Events for changing response CSS classes */
    document.addEventListener('wpcf7invalid', function (event) {
        $('.wpcf7-response-output').addClass('alert alert-danger');
    }, false);
    document.addEventListener('wpcf7spam', function (event) {
        $('.wpcf7-response-output').addClass('alert alert-warning');
    }, false);
    document.addEventListener('wpcf7mailfailed', function (event) {
        $('.wpcf7-response-output').addClass('alert alert-danger');
    }, false);
    document.addEventListener('wpcf7mailsent', function (event) {
        $('.wpcf7-response-output').removeClass('alert-danger');
        $('.wpcf7-response-output').addClass('alert alert-success');
    }, false);


    $("#testimonials-slider").slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        rows: 0,
		prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style=""><img class="arrow-icon" src="/wp-content/themes/bfklawoffice/images/arrow.svg"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"><img class="arrow-icon" src="/wp-content/themes/bfklawoffice/images/arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });


    function init() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
            }
        }
        var imgbgDefer = document.querySelectorAll('.differ-img[data-src]');
    var style = "background-image: url({url})";
    for (var i = 0; i < imgbgDefer.length; i++) {
        imgbgDefer[i].setAttribute('style', style.replace("{url}", imgbgDefer[i].getAttribute('data-src')));
    }
    }
    window.onload = init;


    /***********js for svg*************/
    jQuery(function () {
        activate('img[src*=".svg"]');

        function activate(string) {
            jQuery(string).each(function () {
                var $img = jQuery(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');

                jQuery.get(imgURL, function (data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = jQuery(data).find('svg');

                    // Add replaced image's ID to the new SVG
                    if (typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if (typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' replaced-svg');
                    }

                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');

                    // Replace image with new SVG
                    $img.replaceWith($svg);

                }, 'xml');
            });
        }
    });
    /*==============*/
});