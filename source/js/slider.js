'use strict';

(function () {

  $(document).ready(function(){
    $('.slider-big').slick({
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
    $('.slider-additive__additive').slick({
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
    $('.slider-additive__parts').slick({
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
    $('.discount-banner').slick({
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
})();
