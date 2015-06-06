define([
  'jquery',
  'underscore',
  'parse',
  'scripts/router' // Request router.js
], function($, _, Parse, Router){
  var initialize = function(){
    //Put your parse keys here!
     Parse.initialize("TlB2CnmQw3BEQ6g6Uop571mR5jCI57HwuePqIg9I",
                   "1vD7kFLP9yKHv2dtQWRmapkR6vre06zRbsnKrLYY");
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
