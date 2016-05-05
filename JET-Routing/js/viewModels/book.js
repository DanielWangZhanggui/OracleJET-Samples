/**
 * book module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function bookContentViewModel(params) {
        var self = this;

        // Create and configure the router for this model, the name is 'id'
        self.router = params.ojRouter.parentRouter.createChildRouter('id');

        self.router.configure(function (stateId)
        {
            var state;

            if (stateId) {
                state = new oj.RouterState(stateId,
                        {
                            enter: function () {
                                return self.loadData(stateId);
                            },
                            value: stateId
                        },
                        self.router);
            }
            return state;
        });

        // This is where the data will be stored.
        this.emp = ko.observable();

        this.loadData = function (stateId)
        {
            // Replace the search in the array with ajax call.
            return new Promise(function (resolve, reject) {
                //TODO: get that data for the specific book 
                resolve();
            });
        };
        
        
        self.dispose = function(){
            self.router.dispose();
        };
        
    }

    return bookContentViewModel;
});

