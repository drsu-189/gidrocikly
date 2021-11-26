$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 969,
              settings: {
                arrows: false
              }
            }
          ]
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parents().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setposition');
    });

    $('.product-item__favorite').on('click', function() {
        $(this).toggleClass('product-item__favorite-active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 870,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 590,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    arrows: false
                }
            }
          ],
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });

    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: false,
        min: 100000,
        max: 500000
    });

    $(".rate-yo").rateYo({
        normalFill: "#C4C4C4",
        ratedFill: "#1C62CD",
        spacing   : "7px"
      });

    $('.menu__btn').on('click', function() {
        $('.menu-mobile__list').toggleClass('menu-mobile__list-active');
        $('.menu__btn-line').toggleClass('menu__btn-line--active');
    });

    $('.footer__topdrop').on('click', function() {
        $(this).next().slideToggle(200);
        $(this).toggleClass('footer__topdrop--active');
    });

    $('.aside__btn').on('click', function() {
        $(this).next().slideToggle(200);
    });
    

});