
$(document).ready(function(){

     let gif = $("#gif-container");
     let prototype = $(".prototype-container");

     if( $(window).width() < 768 ){
          gif.removeClass("a-width-6-12");
          gif.addClass("a-width-12-12");
     }
     else{
          gif.removeClass("a-width-12-12");
          gif.addClass("a-width-6-12");
     }


     if( $(window).width() < 600 ){
          prototype.removeClass("a-width-6-12");
          prototype.addClass("a-width-12-12");
     }
     else{
          prototype.removeClass("a-width-12-12");
          prototype.addClass("a-width-6-12");
     }

    

     $(window).resize(function(){
         
          // For DESKTOP 
          if( $(window).width() < 768 ){
               gif.removeClass("a-width-6-12");
               gif.addClass("a-width-12-12");
          }
          else{
               gif.removeClass("a-width-12-12");
               gif.addClass("a-width-6-12");
          }


          if( $(window).width() < 600 ){
               prototype.removeClass("a-width-6-12");
               prototype.addClass("a-width-12-12");
          }
          else{
               prototype.removeClass("a-width-12-12");
               prototype.addClass("a-width-6-12");
          }
     })
})