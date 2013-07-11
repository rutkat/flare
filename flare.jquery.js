(function( $ ){

  $.fn.flare = function(options) {

    // Set default values
    var defaults = $.extend({
            action: "mouseenter",
            backgroundColor: "#fff",
            speed: 1500,
            glowRadius: 15  
        }, options ); 

  // Flare Unit
  var unit = 0;  

  // Execute 
  $(this).bind(defaults.action, function(){ 

    // Increment flare count
    unit++;

    // Create flare element
    $('body').append('<div id="tr-flare' + unit + '"><div class="tr-burst1"></div><div class="tr-burst2"></div><div class="tr-burst3"></div><div class="tr-burst4"></div><div class="bg-ver tr-glow"></div><div class="bg-hor tr-glow"></div> </div>');

        // Set burst tyles
        $('.tr-glow')
          .css({ 'box-shadow' : '0 0 40px ' + defaults.glowRadius + 'px ' + defaults.backgroundColor })
          .css({ '-moz-box-shadow' : '0 0 40px ' + defaults.glowRadius + 'px ' + defaults.backgroundColor })
          .css({ '-webkit-box-shadow' : '0 0 40px ' + defaults.glowRadius + 'px ' + defaults.backgroundColor });

        $('.bg-ver')
          .css({ position: 'absolute' })
          .css({ top: 40 })
          .css({ left: 60 })
          .css({ width: 0 })
          .css({ height: 20 });

        $('.bg-hor')
          .css({ position: 'absolute' })
          .css({ top: 50 })
          .css({ left: 20 })
          .css({ height: 0 })
          .css({ width: 80 });

        $('.tr-burst1, .tr-burst2, .tr-burst3, .tr-burst4')
          .css({ position: 'absolute' })
          .css({ top: 50 })
          .css({ left: 50 })
          .css({ height: 1 })
          .css({ width: 20 })
          .css({ background: '#fff' })
          .css({ 'z-index': 9999 })
          .css({ 'box-shadow': '0 0 8px 3px #fff' })
          .css({ '-moz-box-shadow': '0 0 8px 3px #fff' }) 
          .css({ '-webkit-box-shadow': '0 0 8px 3px #fff' });

        $('.tr-burst1').css({ left: 35, width: 50 });

        // rotate bursts
        $('.tr-burst2')
          .css({ 'transform': 'rotate(45deg)' })
          .css({ '-webkit-transform': 'rotate(45deg)' })
          .css({ '-moz-transform': 'rotate(45deg)' })
          .css({ '-o-transform': 'rotate(45deg)' })
          .css({ '-ms-transform': 'rotate(45deg)' });
        $('.tr-burst3')
          .css({ 'transform': 'rotate(90deg)' })
          .css({ '-webkit-transform': 'rotate(90deg)' })
          .css({ '-moz-transform': 'rotate(90deg)' })
          .css({ '-o-transform': 'rotate(90deg)' })
          .css({ '-ms-transform': 'rotate(90deg)' });
        $('.tr-burst4')
          .css({ 'transform': 'rotate(-45deg)' })
          .css({ '-webkit-transform': 'rotate(-45deg)' })
          .css({ '-moz-transform': 'rotate(-45deg)' })
          .css({ '-o-transform': 'rotate(-45deg)' })
          .css({ '-ms-transform': 'rotate(-45deg)' });
           
    // Get target's dimensions
    var myPos = $(this).offset();
    var myWidth = $(this).outerWidth();
    var myHeight = $(this).outerHeight();

     // Animate the flare
        $('#tr-flare'+ unit)
          // set starting position of flare's center point to target's corner
          .css({position: 'absolute', display: 'none', top: myPos.top-50, left: myPos.left-55})          
          .fadeIn({ queue: false, duration: 250 })
          .animate({
            left: myWidth+myPos.left-55
          },  defaults.speed, 'linear', function() {
                $(this).fadeOut('normal', function() {
                    $(this).remove();
                });
            });
  });
    //to allow chaining
    return this;
  }

})( jQuery );


