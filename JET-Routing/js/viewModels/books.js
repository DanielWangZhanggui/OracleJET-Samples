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
                self.dataReady = ko.observable(false);

                var parentRouter = params.ojRouter.parentRouter;

                /*
                 * TODO:  Which is the best practice when working with child
                 * routers? destroy and create new each time, or write an if
                 * block to see if the child already exists?
                 */


//                    if (parentRouter.getChildRouter('layout')) {
//                        self.layout = parentRouter.getChildRouter('layout');
//                    } else {
                self.router = parentRouter.createChildRouter('layout')
                        .configure(
                                {
                                    'card': {label: 'Card', value: 'card', isDefault: true},
                                    'list': {label: 'List', value: 'list', isDefault: false}
                                });
//                    }

//                self.bookRouter = self.router.createChildRouter('book').configure(function (stateId)
//                {
//                    var state;
//
//                    if (stateId) {
//                        state = new oj.RouterState(stateId,
//                                {
//                                    enter: function () {
//                                        return self.loadData(stateId);
//                                    },
//                                    value: stateId
//                                },
//                                self.router);
//                    }
//                    return state;
//                });
//                
                
                function mergeConfig(original)
                {
                    return $.extend(true, {}, original,
                            {
                                'params': {'data': self.allData, 'books': self.books}
                            });
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
                        self.dataReady(true);
                    });

                    self.moduleConfig = mergeConfig(self.router.moduleConfig);

                    /*
                     * Once all of the JavaScript is loaded, sync the Router to
                     * contain the new childer router definitions from above
                     */
                    oj.Router.sync();
                };

                self.canExit = function () {
                    // Use this router lifecycle method to tell the router
                    // if it's ok to leave this page. As an example, you may want to stop
                    // the user from leaving the page if there is a form that hasn't been saved.
                    return true;
                };

                self.dispose = function () {
                    self.router.dispose();
                };

            }

            return booksContentViewModel;
        });

