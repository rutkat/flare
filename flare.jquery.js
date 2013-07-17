/* ===================================================
 * flare.jquery.js 1.0.1
 * jQuery Plugin to render an optical flare across web elements.
 * 
 *==========================================================================================
 * The MIT License (MIT)
 * 
 * Copyright(c)2013 Tom Rutka www.RunAstartup.com
 * 
 * =========================================================================================
 * Requires: jQuery.js
 * =========================================================================================
 */
(function( $ ){

  $.fn.flare = function(options) {

   // Set default values
    var defaults = $.extend({
            target: this,
            action: "click",
            backgroundColor: "#fff",
            speed: 1500,
            glowDensity: 14  
        }, options ); 

  // Flare Unit
  var unit = 0;

  var obj = $(defaults.target);  

  // Execute 
  $(this).bind( defaults.action, function(){ 

    // Increment flare count
    unit++;

    // Create flare element
    $('body').append('<div id="tr-flare' + unit + '"><div class="tr-burst1"></div><div class="tr-burst2"></div><div class="tr-burst3"></div><div class="tr-burst4"></div><div class="bg-ver tr-glow"></div><div class="bg-hor tr-glow"></div>');

        // Set burst tyles
        $('.tr-glow')
          .css({ 'box-shadow' : '0 0 40px ' + defaults.glowDensity + 'px ' + defaults.backgroundColor })
          .css({ '-moz-box-shadow' : '0 0 40px ' + defaults.glowDensity + 'px ' + defaults.backgroundColor })
          .css({ '-webkit-box-shadow' : '0 0 40px ' + defaults.glowDensity + 'px ' + defaults.backgroundColor });

        $('.bg-ver')
          .css({ position: 'absolute' })
          .css({ top: 40 })
          .css({ left: 60 })
          .css({ width: 0 })
          .css({ height: 20 })
          .css({ 'z-index': 9997 });

        $('.bg-hor')
          .css({ position: 'absolute' })
          .css({ top: 50 })
          .css({ left: 15 })
          .css({ height: 0 })
          .css({ width: 90 })
          .css({ 'z-index': 9997 });

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

        $('.tr-burst1').css({ left: 30, width: 60 });

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
    var myPos = obj.offset();
    var myWidth = obj.outerWidth();
    var myHeight = obj.outerHeight();

     // Animate the flare
       $('#tr-flare'+ unit)
          // set starting position of flare's center point to target's corner
          .css({position: 'absolute', display: 'none', top: myPos.top-50, left: myPos.left-55})
          .fadeIn({ queue: false, duration: 250 })
          .animate({
              left: (myWidth*.8)+myPos.left-55
          },  defaults.speed, 'linear', function() {
                $(this).animate({
                  opacity: 0,
                  left: myWidth+myPos.left-55
                }, defaults.speed/2, 'linear', function() {
                    $(this).remove();
                });
            });

  }); // end bind
    //to allow chaining
    return this;
  }

})( jQuery );


