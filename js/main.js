// $(function () {
//    $('[data-fancybox]').fancybox({
//       youtube: {
//          controls: 0,
//          showinfo: 0
//       }

//    });
// });


$(document).ready(function () {
   $('.menu__list-link').hover(function (event) {
      $('.menu__list-link--active').toggleClass('active');
   });
});


$('.heroes__slider-img').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.heroes__slider-text',
   prevArrow: '  <button type="button" class="slick-btn slick-prev"> <img src="images/arrow-left.svg" alt=""> </button>',
   nextArrow: '  <button type="button" class="slick-btn slick-next"> <img src="images/arrow-right.svg" alt=""> </button>',
   responsive: [{
         breakpoint: 760,
         settings: {
            arrows: false

         }
      }

   ]
});

$('.heroes__slider-text').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   asNavFor: '.heroes__slider-img',
   arrows: false
});

$('.menu__btn').on('click', function () {
   $('.menu__list').toggleClass('menu__list--active');
   $('.menu__btn').toggleClass('menu__btn--active');
});