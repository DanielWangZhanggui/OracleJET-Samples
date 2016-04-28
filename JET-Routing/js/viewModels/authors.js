/**
 * authors module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function authorsContentViewModel() {
        var self = this;

        self.sendToSpace = function(){
            $('#appNav').ojNavigationList('option', 'selection', '');
        };

        self.handleActivated = function () {
            //Change the page title as the new module is loaded so that 
            //Assistive technology can read the proper page title out
            document.title = "ojRouter - Authors";
        };

         self.canExit = function () {
            // Use this router lifecycle method to tell the router
            // if it's ok to leave this page. As an example, you may want to stop
            // the user from leaving the page if there is a form that hasn't been saved.
            return true;
        };
    }

    return authorsContentViewModel;
});

