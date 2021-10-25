$(document).ready(function () 
{
  $(".carousel").slick(
    {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: 
    [
      {
        breakpoint: 1024,
        settings: 
        {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 480,
        settings: 
        {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});