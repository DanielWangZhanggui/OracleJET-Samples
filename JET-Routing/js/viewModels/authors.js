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
        
        self.handleActivated = function(){
            document.title = "ojRouter - Authors";
        };
        
    }
    
    return authorsContentViewModel;
});

