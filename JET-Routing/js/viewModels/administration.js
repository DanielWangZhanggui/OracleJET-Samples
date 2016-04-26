/**
 * collections module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function collectionsContentViewModel() {
        var self = this;

        self.agree = ko.observable("");

        self.handleActivated = function () {
            //Change the page title as the new module is loaded so that 
            //Assistive technology can read the proper page title out
            document.title = "ojRouter - Admin";
        };

        self.canExit = function () {
            // Use this router lifecycle method to tell the router
            // if it's ok to leave this page. As an example, you may want to stop
            // the user from leaving the page if there is a form that hasn't been saved.
            if (self.agree()[0] === 'agree') {
                console.log('yes, you may Exit');
                return true;
            } else {
                alert('You can checkin anytime you like,\n but you can never leave!');
                return false;
            }
        };

    }

    return collectionsContentViewModel;
});

