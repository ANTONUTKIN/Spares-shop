'use strict';

(function () {

  $(document).ready(function(){
    $('.slider').slick({
      dots: true,
      speed: 1000,
    });
  });

  $(document).ready(function(){
    $('.slider__additive').slick({
      arrows: true,
      slidesToScroll: 4,
      slidesToShow: 4,
    });
  });

  $(document).ready(function(){
    $('.slider__popular').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });
  });
})();
