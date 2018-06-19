(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // REGULAR SCRIPT
    new WOW({
        offset: 100
    }).init();
    // $('header').scrollToFixed({
    //     zIndex: 1000,
    // })
    if ($(window).width() > 1199) {
        $('.top-nav, .booking-step').scrollToFixed({
            zIndex: 500,
            marginTop: 100
        });
    } else {
        $('.top-nav, .booking-step').scrollToFixed({
            zIndex: 500,
            marginTop: 70
        });
    }
    $('[data-toggle="tooltip"]').tooltip();
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    $('.btn-expand').click(function () {
        var $this = $(this);
        $this.toggleClass('active');
        $('.policy-wrap').toggleClass('open');
        if ($this.hasClass('active')) {
            $this.text('Thu gọn');
        } else {
            $this.text('Xem thêm');
        }
    });
    $('#product-tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $('.fly-menu a[href^="#"]').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 160
        }, 700);
        $('.fly-menu li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });

    // HEADER SCRIPT
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    // UP SCRIPT
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    // MENU SCRIPT
    if ($(window).width() < 1200) {}

    $('.btn-togglemenu').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
        $('.overlay').toggleClass('active');
        // $('html').toggleClass('deactive');
    });
    $('.overlay').click(function () {
        $(this).removeClass('active');
        $('.btn-togglemenu').removeClass('active');
        // $('html').removeClass('deactive');
        $('.menu').removeClass('open');
    });

    // CAREER SCRIPT
    $('.btn-apply').click(function () {
        $('.apply-form').slideToggle(300);
    });

    // CONTACT SCRIPT
    $('#map').click(function () {
        $(this).find('iframe').addClass('active');
    }).mouseleave(function () {
        $(this).find('iframe').removeClass('active');
    });
    $('.addresslist .address').click(function () {
        $('.addresslist .address').removeClass('active');
        $(this).addClass('active');
    });

    // SLIDE
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        pauseOnHover: false
    });
    $('.home-tour .tour-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        infinite: false
    });
    $('.home-hotel .hotel-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        infinite: false
    });
    $('.home-blog .blog-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        infinite: false
    });
    $('.product-page-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000
    });
    // PRODUCT SLIDE
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('.product-related .product-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        infinite: false
    });

    // INPUT NUMBER SCRIPT
    $('.btn-spin').click(function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });

    // ADD TO CART POPUP
    $('.btn-buy, .btn-pay').click(function () {
        $('.popup-wrap').addClass('open');
    });
    $('.btn-closepopup').click(function () {
        $('.popup-wrap').removeClass('open');
    });
    $('.popup-overlay').click(function () {
        $('.popup-wrap').removeClass('open');
    });
    // CONFIRM PAYMENT POPUP
    // $('.btn-pay').click(function() {
    //     $('.popup-overlay').fadeIn(500);
    //     $('.confirm-popup').addClass('open');
    // });
    // $('.btn-closepopup').click(function() {
    //     $('.popup-overlay').fadeOut(500);
    //     $('.confirm-popup').removeClass('open');
    // });
    // $('.popup-overlay').click(function() {
    //     $(this).fadeOut(500);
    //     $('.confirm-popup').removeClass('open');
    // });
});

},{}]},{},[1])

//# sourceMappingURL=main.js.map
