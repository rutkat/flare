# The Flare jQuery Plugin 

## Description

This is a plugin for jQuery which animates a colored optical flare to slide across elements.
The flare is white in the center and has a customizable colored glow.  The plugin also allows change of speed, glow radius, and event triggering the animation.  The animation is performed by sliding across an element's top-left corner to the top-right corner.

## Features 

* Cool movie-style effect also used in games such as Sleeping Dogs.
* Works in Chrome, Firefox, and Safari, and IE 10 including mobile.
* Uses modern CSS techniques.
* Customizable glow color, speed, glow radius, and trigger event.
* First Optical flare effect without use of images.


## Basic usage 

You need to include the jQuery library and the plugin file:

```html
  <!-- Adjust depending on where you have located the files -->
  <script src="/js/jquery.js"></script>
  <script src="/js/flare.jquery.js"></script>
```

Then add an html element with a class or id for selection.
At the minimum you need a div tag with as a block display and a margin or padding because the flare will slide along the top edge.

```html
  <style>
  .box {
    display: block;
    margin: 40px;
  }
  </style>
  <body>
  <div class="blox">Slide across this box.</div>
  </body>
```

Finally initialise the plugin selecting the element or elements where you want the flare.
The default trigger event is 'click' and the target is the selector itself so the flare will activate when you click the target element.
You'll probably want to change the glow color, so add a parameter to the flare function as in the 2nd line.
```javascript
 $('.box').flare();
 // change color to green
 $('.box').flare({backgroundColor: '#0f0'})
```

## Advanced usage
Here are the advanced settings you can change.  Note that the speed unit is without quotes and the lower the number the faster it is.
For the event action choose one of the many jQuery trigger events available.  Background color is in the standard CSS format. 
The glow radius is actually the density, the lower the number the less glow.

```javascript
$('.box').flare( {target: '#myDiv', action: 'click', backgroundColor: '#0f0', speed: 1000, glowRadius: '15'} );
```

For a demonstration of usage and examples visit [the demo page](http://RunAstartup.com/flare-jquery-plugin/)

## Change Log
1.1.0
```html
  -Made animation smoother by fading out flare before it stops
  -Changed default trigger event to mouse click
  -Added option to separate the triggering event from the target area for the flare
  -Renamed radius to density as it's more accurate
```
1.0.1
```html
  Added CSS styles for other browser support
```
