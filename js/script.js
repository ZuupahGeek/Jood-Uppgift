AOS.init();


$(function () {
    $('.slick-slider').slick({
        infinite:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        dots:true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },
            {
              breakpoint: 575,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
            
          ]

    });
});


$(function () {
  $('.ec-utb-slider').slick({
      infinite:true,
      speed: 6000,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: 'linear',
      arrows: false,
      autoplay: true,
      autoplaySpeed:0,
      dots:false,
      responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          
          
        ]

  });
});
