$(".review_slider_1").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 0,
  // speed: 2000,
  pauseOnHover: false,
});

$(".review_slider_2").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  // variableWidth: true,
  autoplay: false,
  autoplaySpeed: 0,
  // speed: 2000,
  pauseOnHover: false,
});

// start centersld
$(document).ready(function () {
  var $swiper = $(".swiper-container");
  var $bottomSlideContent = null;
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 7,
    centeredSlides: true,
    roundLengths: true,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
// end centersld

// start communityslider======================
$(".communityslider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  cssEase: "linear",
});
// end communityslider======================
