$(document).ready(function () {

    let header = $('.header');
    let scrollOffset = 0;

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= 20) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    });

    $('.burger').on('click', function () {

        $(this).toggleClass('burger--active');
        $('.header__nav').toggleClass('active');
        $('.header__item').toggleClass('active');
        $('.header__item-box').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    $('.header__item-box').on('click', function () {

        $('.burger').removeClass('burger--active');
        $('.header__item').removeClass('active');
        $('.header__nav').removeClass('active');
        $('.header__item-box').removeClass('active');
        $('body').removeClass('no-scroll');

    });

    $('.header__menu-link').on('click', function () {

        $('.burger').removeClass('burger--active');
        $('.header__item').removeClass('active');
        $('.header__nav').removeClass('active');
        $('.header__item-box').removeClass('active');
        $('body').removeClass('no-scroll');
    });


    $('.header__theme-dark').on('click', function() {
        $('.header__theme-light').removeClass('active');
        $(this).addClass('active');
        $('.header__logo-sun').removeClass('active');
        $('.header__logo-moon').addClass('active');
        $('html').removeClass('light');
        $('html').addClass('dark');
    });

    $('.header__theme-light').on('click', function() {
        $('.header__theme-dark').removeClass('active');
        $(this).addClass('active');
        $('.header__logo-moon').removeClass('active');
        $('.header__logo-sun').addClass('active');
        $('html').removeClass('dark');
        $('html').addClass('light');
    });



    $('.select__header').on('click', function() {
        $('.select__arrow').toggleClass('active')
       $('.select__body').toggleClass('active');
    });

    $('.select__item').on('click', selectChoose);

    function selectChoose() {
        let text = $(this).html();
                $('.select__current').html(text);
                $('.select__body').removeClass('active');
                $('.select__arrow').removeClass('active');
        }

});
