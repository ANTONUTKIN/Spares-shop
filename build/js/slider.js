'use strict';

(function () {

  $(document).ready(function(){
    $('.slider').slick({
      dots: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            arrows: false
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.slider__additive').slick({
      arrows: true,
      slidesToScroll: 4,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },{
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            dots: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.slider__popular').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },{
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            dots: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.slider__parts').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },{
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            dots: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.slider__banner').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            slidesToShow: 2,
            dots: true,
          }
        },{
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            dots: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.header__nav-list').slick({
      arrows: false,
      slidesToShow: 8,
      slidesToScroll: 8,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true,
            infinite: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.sort__categories').slick({
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true,
            infinite: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.product-search__list').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            variableWidth: true,
            focusOnSelect: true,
            slidesToScroll: 1,
          }
        },{
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.popular__categories-list').slick({
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true,
            infinite: false,
            focusOnSelect: true,
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.additive__list').slick({
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true,
            infinite: false,
            focusOnSelect: true,
          }
        }
      ]
    });
  });


  $(document).ready(function(){
    $('.product-search__input:first').show();
    $('.product-search__list li:first').addClass('product-search__button--active');

    $('.product-search__list li').click(function(event) {
      var index = $(this).index();
      $('.product-search__list li').removeClass('product-search__button--active');
      $(this).addClass('product-search__button--active');
      $('.product-search__input').hide();
      $('.product-search__input').eq(index).show();
    });
  });

  $(document).ready(function(){
    $('.search__filter-wrapper:first').show();
    $('.search__filter-header li:first').addClass('search__header-item--active');

    $('.search__filter-header li').click(function(event) {
      var index = $(this).index();
      $('.search__filter-header li').removeClass('search__header-item--active');
      $(this).addClass('search__header-item--active');
      $('.search__filter-wrapper').hide();
      $('.search__filter-wrapper').eq(index).show();
    });
  });

  $(document).ready(function(){
    $('.sliders:first').show();
    $('.popular__categories-list li:first').addClass('popular__categories-button--active');

    $('.popular__categories-list li').click(function(event) {
      var index = $(this).index();
      $('.popular__categories-list li').removeClass('popular__categories-button--active');
      $(this).addClass('popular__categories-button--active');
      $('.sliders').hide();
      $('.sliders').eq(index).show();
      $('.slider__parts').slick('setPosition');
      $('.slider__popular').slick('setPosition');
    });
  });

  $(document).ready(function(){
    $('.slider__aditive-wrapper:first').show();
    $('.additive__list li:first').addClass('additive__button--active');

    $('.additive__list li').click(function(event) {
      var index = $(this).index();
      $('.additive__list li').removeClass('additive__button--active');
      $(this).addClass('additive__button--active');
      $('.slider__aditive-wrapper').hide();
      $('.slider__aditive-wrapper').eq(index).show();
      $('.slider__additive').slick('setPosition');
      $('.slider__parts').slick('setPosition');
    });
  });

  // Попап бургер меню

  $(document).ready(function(){
    $('.header__menu-toggle').click(function(event) {
      $('.header__menu-toggle,.menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

  // Попап меню фильтров

  $(document).ready(function(){
    $('.sort__toggle-filtres').click(function(event) {
      $('.sort__toggle-filtres,.search__filter').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

  // Табы меню характеристки

  $(document).ready(function(){
    $('.product__characteristic:first').show();
    $('.product__discription-tabs li:first').addClass('product__tab--active');

    $('.product__discription-tabs li').click(function(event) {
      var index = $(this).index();
      $('.product__discription-tabs li').removeClass('product__tab--active');
      $(this).addClass('product__tab--active');
      $('.product__characteristic').hide();
      $('.product__characteristic').eq(index).show();
    });
  });

  // Табы меню карты продукта

  $(document).ready(function(){
    $('.info__search:first').show();
    $('.info__nav li:first').addClass('info__nav-item--active');

    $('.info__nav li').click(function(event) {
      var index = $(this).index();
      $('.info__nav li').removeClass('info__nav-item--active');
      $('.info__nav li').removeClass('info__nav-item--takeout-active');
      $(this).addClass('info__nav-item--active');
      $('.info__search').hide();
      $('.info__search').eq(index).show();
    });
  });

  $(document).ready(function(){
    $('.info__nav-item--takeout').click(function(event) {
      $('.info__nav-item--takeout').addClass('info__nav-item--takeout-active');
    });
  });

})();
