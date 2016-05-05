/**
 * list module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function listContentViewModel(params) {
        var self = this;
        self.books = params.books();
        self.router = params.ojRouter;
        self.moduleConfig = ko.observable();
        // var original = params.ojRouter.parentRouter.moduleConfig;

        self.bookRouter = self.router.parentRouter.createChildRouter('book').configure(function (stateId)
        {
            var state;

            if (stateId) {
                state = new oj.RouterState(stateId,
                        {
                            enter: function () {
                                console.log('book router entered');
                            },
                            value: stateId
                        },
                        self.bookRouter);
            }
            return state;
        });


        function mergeConfig(original, value)
        {
            return $.extend(true, {}, original,
                    {
                        'params': {'myId': value}
                    });
        }

        self.gotoContent = function (event, ui) {
            if (ui.option === 'currentItem' && ui.value != null)
            {
               self.moduleConfig(mergeConfig(self.bookRouter.moduleConfig, ui.value));
               self.bookRouter.go(ui.value);
            }
        };
        
        self.handleActivated = function(){
            oj.Router.sync();
        };
        
        self.dispose = function(){
            self.bookRouter.dispose();
        }
        
    }

    return listContentViewModel;
});

