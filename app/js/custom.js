$(document).ready(function(){
    // navbar hamburger menu 
    let navBtn = $('.navbar__toggler');
    let $navMenu = $('#collapseMenu');
    navBtn.on('click', function(){
        $(this).toggleClass('change')

        $navMenu.toggleClass('active');
        $('body').toggleClass('overflow')
    });



    // On window Scroll animations
    $(window).scroll(function(){
        // Back to top scroll vutton animation
        let $scrollBtn = $('#scrollUp'); 
        if($(window).scrollTop() > 75){
            $scrollBtn.addClass('show');
        }
        else{
            $scrollBtn.removeClass('show');
        }
    });
    // page scroll up button
    $('#scrollUp').on('click', function(e){
        // e.preventDefault();
        $('html, body').animate({scrollTop:0}, 100);
    });

    
    // on window scroll content move up animation..
    let animations = function(){
        let offset = $(window).scrollTop() + $(window).height(),
        $animate = $('.animatable');

        if($animate.length == 0){
            $(window).off('scroll', animations);
        }

        $animate.each(function(i){
            let $animate = $(this);
            if(($animate.offset().top + $animate.height() - 20) < offset ){
                $animate.removeClass('animatable').addClass('animated');
            };
        });
    };

    $(window).on('scroll', animations);
    $(window).trigger('scroll');


    // Customer Slider tab menu
    let $info1 = $('.info1');
    let $info2 = $('.info2').hide();
    let $img1 = $('.slide .img1');
    let $img2 = $('.slide .img2').hide();
    let $youngLiving = $('.youngLiving');
    let $mobile = $('.mobile');

    $youngLiving.on('click', function(){
        $(this).addClass('active')
        $mobile.removeClass('active')
        $info1.hide();
        $info2.show();
        $img1.hide();
        $img2.show();
    });
    $mobile.on('click', function(){
        $(this).addClass('active')
        $youngLiving.removeClass('active')
        $info1.show();
        $info2.hide();
        $img1.show();
        $img2.hide();
    });



    
});