'use strict';

(function () {
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
    $('.slider:first').show();
    $('.popular__categories-list li:first').addClass('popular__categories-button--active');

    $('.popular__categories-list li').click(function(event) {
      var index = $(this).index();
      $('.popular__categories-list li').removeClass('popular__categories-button--active');
      $(this).addClass('popular__categories-button--active');
      $('.slider').hide();
      $('.slider').eq(index).show();
      $('.slider__parts').slick('setPosition');
      $('.slider__popular').slick('setPosition');
    });
  });

  $(document).ready(function(){
    $('.slider-additive:first').show();
    $('.additive__list li:first').addClass('additive__button--active');

    $('.additive__list li').click(function(event) {
      var index = $(this).index();
      $('.additive__list li').removeClass('additive__button--active');
      $(this).addClass('additive__button--active');
      $('.slider-additive').hide();
      $('.slider-additive').eq(index).show();
      $('.slider-additive__additive').slick('setPosition');
      $('.slider-additive__parts').slick('setPosition');
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

  // Аккордеон футера

  $(document).ready(function(){
    $('.footer__info').click(function(event) {
      $('.footer__block2-list--info').toggleClass('footer__block2-list--info-open');
      $('.footer__block2-list--service').removeClass('footer__block2-list--service-open');
      $('.footer__block2-list--store').removeClass('footer__block2-list--store-open');
    });
  });

  $(document).ready(function(){
    $('.footer__service').click(function(event) {
      $('.footer__block2-list--service').toggleClass('footer__block2-list--service-open');
      $('.footer__block2-list--store').removeClass('footer__block2-list--store-open');
      $('.footer__block2-list--info').removeClass('footer__block2-list--info-open');
    });
  });

  $(document).ready(function(){
    $('.footer__store').click(function(event) {
      $('.footer__block2-list--store').toggleClass('footer__block2-list--store-open');
      $('.footer__block2-list--info').removeClass('footer__block2-list--info-open');
      $('.footer__block2-list--service').removeClass('footer__block2-list--service-open');
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

  // Табы фильтров меню поиска

  $(document).ready(function(){
    $('.search__season-filter').click(function(event) {
      $('.search__season-wrapper').toggleClass('search__season-wrapper--hidden');
    });
  });

  $(document).ready(function(){
    $('.search__price-button').click(function(event) {
      $('.search__accordion-wrapper').toggleClass('search__accordion-wrapper--hidden');
    });
  });

  $(document).ready(function(){
    $('.search__brand-button').click(function(event) {
      $('.search__brand-wrapper').toggleClass('search__brand-wrapper--hidden');
    });
  });

  $(document).ready(function(){
    $('.search__model-button').click(function(event) {
      $('.search__model-wrapper').toggleClass('search__model-wrapper--hidden');
    });
  });

  $(document).ready(function(){
    $('.search__country-button').click(function(event) {
      $('.search__country-wrapper').toggleClass('search__country-wrapper--hidden');
    });
  });
})();
