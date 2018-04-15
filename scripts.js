
$(document).ready(function(){
    // Scrolling animation effects:
    $(window).scroll(function(){
        // Window Scrolling position
        var scrollPos = $(this).scrollTop();
        
        // Shrink navbar when scrolling >> Only for wide screens
        winWidth = $(window).outerWidth();
        if(scrollPos > 100){
            if(winWidth > 991){
                $('.navbar').addClass('shrink-nav');
            }else {
                $('.navbar').removeClass('shrink-nav');
            }
        }else {
            $('.navbar').removeClass('shrink-nav');
        }

        // Apply These Animations only in Home Page
        if (document.location.pathname == "/index.html") {
            var $welcome = $('.welcome-container').offset().top;
            if(scrollPos > $welcome - $(window).height()/1.2){
                $('.welcome-container').find('.welcome-text p').css("animation-name", "slide-down");
                $('.welcome-container').find('.welcome-img').css("animation-name", "slide-left");
            }
    
            var $menu = $('.menu').offset().top;
            if(scrollPos > $menu - $(window).height()/1.2){
                $('.menu').find('.menu-col p').css("animation-name", "slide-down");
                $('.menu').find('.menu-item-img img').css('animation-name', 'zoom-in');
            }
    
            var $testimonials = $('#testimonials').offset().top;
            if(scrollPos > $testimonials - $(window).height()/1.2){
                $('#testi-wrapper').css('display', 'flex');
            }
    
            var $actions = $('#actions').offset().top;
            if(scrollPos > $actions - $(window).height()/1.2){
                $('#actions-wrapper').css("display","flex");
            }
         }
    });
})