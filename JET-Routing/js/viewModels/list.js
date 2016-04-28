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
    }

    return listContentViewModel;
});

