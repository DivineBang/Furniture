(function ($)
  { 
  
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(document).ready(function() {
      $('#preloader').fadeOut(400);
    });

  
    
    
    //slider
    
    //варіарнт з нумерацією 
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      navText:['<img src="img/Left.png">','<img src="img/Right.png">'],
      nav: true,
      dots:true,
      responsive:{
        0:{
            items:1
        },
        690:{
            items:1
        },
        930:{
            items:1
        },
        1110:{
            items:1
        },
        1290:{
            items:1
        },
        1920:{
            items:1
        },
        
    } ,
      /* onInitialized: function(e) {
        $('.counter').text(' ' + this.items().length)
        console.log();
      } */
    });
    owl.on('changed.owl.carousel', function(e) {
      $('.counter').text('0' + ++e.page.index + '/0' + e.item.count)
    });

    
    //tabs

    $('.nav-item').on('click',function(){
      var currTab = $(this).index();

      $('.nav-item').removeClass('active');
      $(this).addClass('active');

      /* $('.tab-pane').removeClass('show active');
      $('.tab-pane').eq(currTab).addClass('show active'); */
    })

    $('.swiper').slick({
      infinite: true,
      dots: true,
      slidesToShow:3,
      slidesToScroll: 1,
      pauseOnHover:true,
      autoplay: false,
      autoplaySpeed: 6000,
      speed: 1800,
    
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint:1449,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint:1299,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint:1199,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint:820,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

})(jQuery);


//burger

$(document).ready(function(){
  $('.header-menu').click(function(event){
    $('.set__list').toggleClass('active-menu');

  });
});