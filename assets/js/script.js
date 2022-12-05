$(function () {
  'use strict';

  // Menu fix

  var navtop = $('#main_menu').offset().top;

  $(window).scroll(function () {

    var navscroll = $(this).scrollTop();

    if (navscroll > navtop) {
      $('#main_menu').addClass('fix_nav');
    } 
    else {
      $('#main_menu').removeClass('fix_nav');
    }
  });

  // venobox

  $('.venobox').venobox();

  // Bact to Top

  var footer = $('#footer').offset().top;

  $('.backtotop').click(function () {

    $('html,body').animate({
      scrollTop: 0,
    }, 3000);

  });

  $('.backtodown').click(function () {
    
    $('html,body').animate({
      scrollTop: footer,
    }, 3000);

  });


  // Slider 

  $('.banner_carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    asNavFor: '.annousment_details_carousel_nav'
});
$('.banner_carousel_nav').slick({
    dots: false,
    arrows: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    verticalSwiping: true,
    asNavFor: '.annousment_details_carousel',
    responsive: [
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4
            }
        }
    ]
});

  

  // // Product Navbar

  var containerEl = document.querySelector('.product_list');

  var mixer = mixitup(containerEl);

  
  

});