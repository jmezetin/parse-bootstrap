define([
  'jquery',
  'underscore',
  'parse',
  'scripts/router' // Request router.js
], function($, _, Parse, Router){
  var initialize = function(){
    //Put your parse keys here!
    Parse.initialize("Application ID Key", "Javascript Key");
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
