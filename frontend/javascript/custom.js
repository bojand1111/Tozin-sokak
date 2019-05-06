var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
    },
    600: {
      items: 2,
      autoplay: true,
    },
    1200: {
      items: 4,
      autoplay: false,
    }
  }
});


$('.btn-click').click(function () {
  $('.btn-click').toggleClass('active');
  $('.title').toggleClass('active');
  $('.dropdown-toggle').toggleClass('active');
});

$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

var header = document.getElementById("row-nav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("btn-active");
  current[0].className = current[0].className.replace(" btn-active", "");
  this.className += " btn-active";
    });
}

$(document).ready(function(){
  $(".btn-link").click(); 
});