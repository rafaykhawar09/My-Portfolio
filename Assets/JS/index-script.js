
$(document).ready(function(){

     console.log($(".hero-img").height())

     let containers = $(".a-container");
     let navbar = $(".navbar");

     if( $(window).width() > 425 && $(window).width() < 768 ){
          containers.removeClass("a-width-4-12");
          containers.addClass("a-width-6-12");
     }
     else if ( $(window).width() < 425 ){
          containers.removeClass("a-width-4-12");
          containers.addClass("a-width-12-12");
     }

     $(window).resize(function(){
         
          // For DESKTOP 
          if( $(window).width() > 768 ){
               containers.removeClass("a-width-6-12");
               containers.removeClass("a-width-12-12");
               containers.addClass("a-width-4-12");
          }

          // For TABLET
          else if( $(window).width() > 425 && $(window).width() < 768 ){
               containers.removeClass("a-width-4-12");
               containers.removeClass("a-width-12-12");
               containers.addClass("a-width-6-12");
          }

          // For MOBILE
          else if( $(window).width() < 425 ){
               containers.removeClass("a-width-6-12");
               containers.removeClass("a-width-4-12");
               containers.addClass("a-width-12-12");
          }
     })

     $(window).scroll(function(){

          if($(window).scrollTop() > ($(".hero-img").height() * .5)){
               navbar.addClass("after-scroll");
          }
          else{
               navbar.removeClass("after-scroll");
          }
     })
})