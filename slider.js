 $(document).ready(function(){
  $('.image').slick({
     infinite: false,
  slidesToShow: 3,
  speed : 200,
  slidesToScroll: 2,
  mobileFirst : true,
  swipe: true,
  accessibility: false,
   prevArrow: $('.prev'),
      nextArrow: $('.next'),
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
   
  });
});