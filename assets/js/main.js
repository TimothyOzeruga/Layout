
 $(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 700,
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
        ]
    });
  });

 wow = new WOW(
    {
        boxClass: 'wow',    
        animateClass: 'animate__animated', 
        offset: 20,         
        mobile: true,       
        live: true        
    }
)
wow.init();
 
