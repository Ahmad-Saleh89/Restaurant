
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

    // Slider in About Page
    if (document.location.pathname == "/about/about.html") {
        var $slider = $('.slider-wrapper').find('.slider');
        var interval;
  
        function startSlider(){
        interval = setInterval(showUp, 7000);
        }
        function stopSlider(){
        clearInterval(interval);
        }
        startSlider();
    
        function showUp(){
        var $currentSlide = $slider.find('.showing');
        var $nextSlide = $currentSlide.next();
    
            if($nextSlide.length){
                $currentSlide.addClass('disappear');
                var sliderIndex = $nextSlide.index();
                var $sliderDot = $('.slider-wrapper').find('.slider-dots span').eq(sliderIndex);
                $sliderDot.addClass('is-active').prev().removeClass('is-active');
                setTimeout(function(){
                $currentSlide.removeClass('showing disappear');
                $nextSlide.addClass('showing');
                },1500);
            }else{
                // first remove class .is-active from all dots:
                $('.slider-dots span').removeClass('is-active');
                // and only add it to the first child:
                $('.slider-dots span:first').addClass('is-active');
        
                $slider.find('li:last').addClass('disappear');
                setTimeout(function(){
                $slider.find('li:first').addClass('showing');
                $slider.find('li:last').removeClass('disappear showing');
                },1500);
            }
        }
        $('.slider-dots span').on('mouseenter', stopSlider).on('mouseleave', startSlider);
        // Clickable dots:
        $('.slider-dots span').click(function(){
            // first clear all dots from .is-active class:
            $('.slider-dots span').removeClass('is-active');
            // then only add it to the clicked dot:
            $(this).addClass('is-active');
            // then store the index of the clicked dot:
            var dotIndex = $('.is-active').index();
            // then clear all slides from .current class:
            $('.slider li').removeClass('showing');
            //  finally add .current to the matched slide:
            $('.slider li:nth-child('+(dotIndex+1)+')').addClass('showing');
        });

    }
});