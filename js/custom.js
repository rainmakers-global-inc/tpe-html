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
$(".review_slider_3").slick({
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

// start satisfiedclients =====================================
$(".satisfiedclients").slick({
  centerMode: true,
  centerPadding: "160px",
  slidesToShow: 3,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
});
// end satisfiedclients =======================================

$(".success_storiesld").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 2000,
});

// start footer slider==========================================
$(".footerlogoslider").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  cssEase: "linear",
  infinite: true,
});
// end footer slider==========================================

// start blackstriplistsld ==========================================
$(".blackstriplistsld").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: "linear",
  infinite: true,
});
// end blackstriplistsld ==========================================
