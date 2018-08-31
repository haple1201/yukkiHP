var $ = require('jquery');

(function($){
  
    $(".background").on("click", function(){
          $(this).toggleClass("active");
    });
   
  })(jQuery);