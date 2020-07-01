'use strict';

(function () {
//
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
})();
