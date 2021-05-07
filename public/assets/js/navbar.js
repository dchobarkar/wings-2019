$(document).ready(function () {
  time = 1000;

  // Percentage Increment Animation
  var PercentageID = $(".percentage"),
    start = 0,
    end = 1000,
    durataion = time;
  animateValue(PercentageID, start, end, durataion);

  function animateValue(id, start, end, duration) {
    var range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

    var timer = setInterval(function () {
      current += increment;
      $(obj).text(current);
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  setTimeout(function () {
    $(".cd-transition-layer")
      .addClass("closing")
      .delay(1000)
      .queue(function () {
        $(this).removeClass("visible closing opening").dequeue();
      });
  }, time);

  //posts page hover
  $(".blog-post .blog-link").hover(function () {});
});

$(window).load(function () {
  function smokeeffect() {
    var modalTrigger = $(".nav-icon"),
      transitionLayer = $(".cd-transition-layer"),
      transitionBackground = transitionLayer.children(),
      modalWindow = $(".full-menu");

    var resize = false;

    //set transitionBackground dimentions
    setLayerDimensions();
    $(window).on("resize", function () {
      if (!resize) {
        resize = true;
        !window.requestAnimationFrame
          ? setTimeout(setLayerDimensions, 300)
          : window.requestAnimationFrame(setLayerDimensions);
      }
    });

    //open modal window
    modalTrigger.on("click", function (event) {
      event.preventDefault();
      transitionLayer.addClass("visible opening");
      var delay = 600;
      setTimeout(function () {
        modalWindow.addClass("visible");
      }, delay);
    });

    //close modal window
    modalWindow.on("click", ".modal-close", function (event) {
      event.preventDefault();
      transitionLayer.addClass("closing");
      modalWindow.removeClass("visible");
      transitionBackground.one(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function () {
          transitionLayer.removeClass("closing opening visible");
          transitionBackground.off(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend"
          );
        }
      );
    });

    function setLayerDimensions() {}
  }
  smokeeffect();

  /*--------------------------------------------------
 Hero Section Height
---------------------------------------------------*/
  function homeh() {
    var hometext = $(".main");
  }
  homeh();
}); // document load end
