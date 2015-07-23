//Declare animations module
var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);

//Define animations mdoule
phonecatAnimations.animation('.phone', function() {

  var animateUp = function(element, className, done) {

    //Ignore for non-active classes
    if(className != 'active') {
      return;
    }

    element.css({
      position: 'absolute',
      top: 500,
      left: 0,
      display: 'block'
    });

    // Shift the element up by 500 pixels
    jQuery(element).animate({
      top: 0
    }, done);
    
    //To cancel the function
    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  var animateDown = function(element, className, done) {
    
    //Ignore for non-active classes
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    // Shift the element down by 500 pixels
    jQuery(element).animate({
      top: -500
    }, done);

    //To cancel the function
    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  return {
    addClass: animateUp,
    removeClass: animateDown
  };
});
