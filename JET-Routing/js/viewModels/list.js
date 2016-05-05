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

        self.gotoContent = function (event, ui)
        {
            if (ui.option === 'currentItem' && ui.value != null)
            {
                params.ojRouter.parentRouter.go('book/' + ui.value);
            }
        };
    }

    return listContentViewModel;
});

