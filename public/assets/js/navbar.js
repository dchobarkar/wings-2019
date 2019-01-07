// 'use strict'; 
$(document).ready( function() {
    // var width = 100,
    // perfData = window.performance.timing, 
    // EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = 350;

    // Percentage Increment Animation
    var PercentageID = $(".percentage"),
        start = 0,
        end = 100,
        durataion = time;
        animateValue(PercentageID, start, end, durataion);
        
        function animateValue(id, start, end, duration) {
            var range = end - start,
                current = start,
                increment = end > start? 1 : -1,
                stepTime = Math.abs(Math.floor(duration / range)),
                obj = $(id);
                
            var timer = setInterval(function() {
                current += increment;
                $(obj).text(current);
                //obj.innerHTML = current;
                if (current == end){
                    clearInterval(timer);
                }
            },stepTime);
        }
        setTimeout(function(){
            // $('.preloader').fadeOut();
            $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
                $(this).removeClass("visible closing opening").dequeue();
            });
        },time);
    //  FADE OUT EFFECT WHEN CLICK A LINK
    //  $(document).on("click", "a:not(.lightbox)", function () {
    //      var newUrl = $(this).attr("href");
    //      if (!newUrl || newUrl[0] === "#") {
    //          location.hash = newUrl;
    //          return;
    //      }
    //      $("html").fadeOut(function () {
    //         location = newUrl;
    //      });
    //      return false;
    //  });
    //  var paget = $(".page-title .title").text();
    //  $( ".page-title").append("<span></span>");
    //  $( ".page-title span").append(paget);
    
    //posts page hover 
        $('.blog-post .blog-link').hover(function(){
    //  $(this).parent('.content-outter').parent('.blog-post').toggleClass('mousef');
    //  $(this).parent('.blog-post').toggleClass('mousef');
        });
    
});  

$(window).load( function(){
    function smokeeffect (){ 
        var modalTrigger = $('.nav-icon'),
        transitionLayer = $('.cd-transition-layer'),
        transitionBackground = transitionLayer.children(),
        modalWindow = $('.full-menu');
        
        var resize = false;
        //  frameProportion = 1.78, //png frame aspect ratio
        //  frames = 20; //number of png frames
    
        //set transitionBackground dimentions
        
        setLayerDimensions();
        $(window).on('resize', function(){
            if( !resize ) {
                resize = true;
                (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
            }
        });

        //open modal window
        modalTrigger.on('click', function(event){   
            event.preventDefault();
            transitionLayer.addClass('visible opening');
            var delay = 600;
            setTimeout(function(){
                modalWindow.addClass('visible');
            }, delay);
        });

        //close modal window
        modalWindow.on('click', '.modal-close', function(event){
            event.preventDefault();
            transitionLayer.addClass('closing');
            modalWindow.removeClass('visible');
            transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
                transitionLayer.removeClass('closing opening visible');
                transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
        });
        
        function setLayerDimensions() {
    //  var windowWidth = $(window).width(),
    //  windowHeight = $(window).height(),
    //  layerHeight, layerWidth;

    //  if( windowWidth/windowHeight > frameProportion ) {
    //      layerWidth = windowWidth;
    //      layerHeight = layerWidth/frameProportion;
    //  } else {
    //      layerHeight = windowHeight*1.2;
    //      layerWidth = layerHeight*frameProportion;
    //  }
    //  transitionBackground.css({
    //  'width': layerWidth*frames+'px',
    //  'height': layerHeight+'px',
    //  });

    // resize = false;
    }
}
smokeeffect()

/*--------------------------------------------------
 Hero Section Height
---------------------------------------------------*/
function homeh() {
    var hometext = $('.main')
//  hometext.css({
//      "height": $(window).height() + "px"
//  });
}
homeh();

//  $(window).resize(homeh);
//  $( ".page-menu li:not(.social) a, .portfolio_filter ul li a").append( "<span></span>" );
    // $('.nav-icon').on("click", function(){
    //     $(this).toggleClass('modal-close');
    // });
}); // document load end 