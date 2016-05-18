$('.slider-items').slick({
 
  dots: true
  
});

$('.enter').on('click', function(){
    $('.mobi-menu').addClass('active');
})

$('.mobi-menu i').on('click', function(){
    $('.mobi-menu').removeClass('active');
})

$('.tabs').tabs();

/*$('.slider2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});*/

$('.slider2').slick({
    dots: true,
      slidesToShow: 3,
    responsive: [

    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
        {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

