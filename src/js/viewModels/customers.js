/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
 function(oj, ko, $) {
    function CustomerViewModel() {
      var self = this;
      /*
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       */
      self.handleAttached = function() {
        document.addEventListener('deviceready', onDeviceReady);
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       */
      self.handleDetached = function() {
        document.removeEventListener('deviceready', onDeviceReady);
      };

      function onDeviceReady() {
        // Will execute when device is ready, or immediately if the device is already ready.
      }
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new CustomerViewModel();
  }
);
