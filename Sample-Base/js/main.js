/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': '../bower_components/knockout/dist/knockout',
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'jqueryui-amd': '../bower_components/jquery-ui/ui',
    'ojs': '../bower_components/oraclejet/dist/js/libs/oj/min',
    'ojL10n': '../bower_components/oraclejet/dist/js/libs/oj/ojL10n',
    'ojtranslations': '../bower_components/oraclejet/dist/js/libs/oj/resources',
    'text': '../bower_components/text/text',
    'promise': '../bower_components/es6-promise/promise.min',
    'hammerjs': '../bower_components/hammerjs/hammer.min',
    'signals': '../bower_components/js-signals/dist/signals.min',    
    'ojdnd': '../bower_components/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    }
  },

// This section configures the i18n plugin. It is merging the Oracle JET built-in translation
// resources with a custom translation file.
// Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
// a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
            }
        }
    }
});


/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback.
 *
 * For a listing of which JET component modules are required for each component, see the specific component
 * demo pages in the JET cookbook.
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmodule'], // add additional JET component modules as needed
  function(oj, ko, $) // this callback gets executed when all required modules are loaded
  {
      function viewModel(){
        var self = this;
        
      };
      
      $(document).ready(function(){
          ko.applyBindings(new viewModel(),document.getElementById('globalBody'));
      });     
  }
);

