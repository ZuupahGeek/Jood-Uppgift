AOS.init();


$(function () {
    $('.slick-slider').slick({
        infinite:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots:true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    });
});



