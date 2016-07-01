/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
{
  baseUrl: 'js',
  
  // Path mappings for the logical module names
  paths:
  //injector:mainReleasePaths
  {
    'knockout': 'libs/knockout/knockout-3.4.0.debug',
    'jquery': 'libs/jquery/jquery-2.1.3',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4',
    'promise': 'libs/es6-promise/promise-1.0.0',
    'hammerjs': 'libs/hammer/hammer-2.0.4',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
    'ojs': 'libs/oj/v2.0.2/debug',
    'ojL10n': 'libs/oj/v2.0.2/ojL10n',
    'ojtranslations': 'libs/oj/v2.0.2/resources',
    'text': 'libs/require/text',
    'signals': 'libs/js-signals/signals'
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    'jquery':
    {
      exports: ['jQuery', '$']
    }
  }
}
);

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore', 'knockout', 'appController', 'ojs/ojknockout',
'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojnavigationlist'],
  function (oj, ko, app) { // this callback gets executed when all required modules are loaded
    function MainViewModel() {
      var self = this;
      self.router = app.router;
      self.navDataSource = app.navDataSource;
      self.navChangeHandler = app.navChangeHandler;
      self.toggleDrawer = app.toggleDrawer;
    }

    oj.Router.sync().then(
      function () {
        // bind your ViewModel for the content of the whole page body.
        ko.applyBindings(new MainViewModel(), document.getElementById('globalBody'));
      },
      function (error) {
        oj.Logger.error('Error in root start: ' + error.message);
      }
    );

  }
);
