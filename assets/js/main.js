$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,              // one item per slide
    loop: true,            // infinite loop
    autoplay: true,        // auto play slides
    autoplayTimeout: 4000, // 4 seconds
    autoplayHoverPause: true, // pause on hover
    nav: true,             // prev/next arrows
    dots: true             // navigation dots
  });
});

    
    Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: true,
    animated: true,
    showCloseButton: true,
    Thumbs: {
        autoStart: true,
    },
});