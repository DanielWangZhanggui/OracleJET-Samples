/**
 * books module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojbutton', 'ojs/ojrouter'],
        function (oj, ko) {
            /**
             * The view model for the main content view template
             */

            function booksContentViewModel(params) {
                var self = this;
                self.books = ko.observableArray([]);
                self.layoutType = ko.observable('card');
                self.layout = null;

                if (!parentRouter) {
                    var parentRouter = params.ojRouter.parentRouter;

                    if (parentRouter.getChildRouter('layout')) {
                        self.layout = parentRouter.getChildRouter('layout');
                    } else {
                        self.layout = parentRouter.createChildRouter('layout')
                                .configure(
                                        {
                                            'card': {label: 'card', value: 'card', isDefault: true},
                                            'list': {label: 'list', value: 'list', isDefault: false}
                                        });
                    }
                }

                self.handleActivated = function () {
                    //Change the page title as the new module is loaded so that 
                    //Assistive technology can read the proper page title
                    document.title = "ojRouter - Books";

                    self.allData = $.getJSON('js/data/productData.json').then(function (data) {
                        $.each(data, function (idx, val) {
                            self.books().push({"title": val.TITLE});
                        });
                        self.books.valueHasMutated();
                    });

                    oj.Router.sync();
                };

                self.canExit = function () {
                    // Use this router lifecycle method to tell the router
                    // if it's ok to leave this page. As an example, you may want to stop
                    // the user from leaving the page if there is a form that hasn't been saved.
                    return true;
                };

//                self.dispose = function(){
//                    this.router.dispose();
//                };

            }

            return booksContentViewModel;
        });

