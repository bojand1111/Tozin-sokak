$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({    
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,      
      },
      600: {
        items: 3,     
      },
      1000: {
        items: 3,      
      }
    }
});
$('button').click(function(){
  $('button').toggleClass('active');
  $('.title').toggleClass('active');
  $('nav').toggleClass('active');
});