$(document).ready(function() {
    
 var index = 0;   
    function slideGallery() {
        var prev = $("#prevPicture"),
            next = $("#nextPicture"),
            lis = $("li");
        var firstClone = $("li").first().clone(),     // Clones of the first and the last image for fluent slide between these images
            lastClone = $("li").last().clone();
            $("ul").append(firstClone);
            $("ul").prepend(lastClone);
        
                

// Setting ul (image container) width and adding prev/next buttons  
        
            $(window).on("load", function() {
                
                
                var imgWidth = $("img").width();
                $("ul").width(imgWidth * $("img").length);
                var position = - imgWidth;
                $("ul").css("left", position);
                pressedButton(1);

                
            

                
                
// Previous/Next buttons                
                
                index = 1;
                
// Next                
                next.on("click", function() {
                    index += 1;
                    
                    
                    slide(index);
                    
                    
                    if ( index >= $("li").length - 1 ) {
                    index = 1;
                    };
                    
                    pressedButton(index);
                });
                
                
// Previous
                prev.on("click", function() {
                    index -= 1;
                    
                    
                    slide(index);
                    
                    
                    if ( index <= 0 ) {
                    index = $("li").length - 2;
                    };
                    
                    pressedButton(index);
                });            
         });       
    };  
// End of function


    
// Function slide(i) is the most important part of prev/next buttons
        
   function slide(i) {

       var slideVal = $("li").eq(i).width() * i;
       if ( (i > 0) && ( i < $("li").length - 1 ) ) {
           $("ul").animate({
               left: -slideVal
           });
       }
       else if ( i <= 0 ) {
           $("ul").animate({
               left: -slideVal
           }, { complete: function() {
               var positionEnd = -($("img").width() * $("img").length) + (2 * $("img").width());
               $("ul").css("left", positionEnd);
           }});
       }
       else if ( i >= $("li").length - 1 ) {
           $("ul").animate({
               left: -slideVal
           }, { complete: function() {
               var position = -($("img").width());
               $("ul").css("left", position);
           }});

       };
   };
    
// End of function
    

    
    
// Rounded buttons for navigation
    
function sliderButtons() {
    var emptyBtn = $("<div>", {class: "rounded"});
    var i = $("li").length - 1;
    $("li").each(function() {
        $(".control-panel").prepend(emptyBtn.clone().attr("data-index", i)); 
        i--;
    });
    var btns = $(".rounded");
    
    btns.first().hide();
    btns.last().hide();
    
    btns.on("click", function () {
        
        index = $(this).attr("data-index");
        pressedButton(index);
        slide(index);
    });
    
}

    
// Active rounded button
    
function pressedButton(i) {
    $(".rounded").css("backgroundColor", "white");    
    $(".rounded").eq(i).css("backgroundColor", "black");
}
    
    

// Calling our functions    
    
    slideGallery();
    sliderButtons();

});