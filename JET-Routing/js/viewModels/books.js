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

                if (!parentRouter) {
                    var parentRouter = params.ojRouter.parentRouter;

                    if (parentRouter.getChildRouter('layout')) {
                        this.router = parentRouter.getChildRouter('layout');
                    } else {
                        this.router = parentRouter.createChildRouter('layout')
                                .configure(
                                        {
                                            'card': {label: 'Card', isDefault: true},
                                            'list': {label: 'List'}
                                        });
                    }
                }
//    function mergeConfig(original)
//    {
//        return $.extend(true, {}, original,
//                {
//                    'params': {'data': empArray}
//                });
//    }
//
//    this.moduleConfig = mergeConfig(this.router.moduleConfig);


                self.handleActivated = function () {
                    //Change the page title as the new module is loaded so that 
                    //Assistive technology can read the proper page title
                    document.title = "ojRouter - Books";
                };

                self.allData = $.getJSON('js/data/productData.json').then(function (data) {
                    $.each(data, function (idx, val) {
                        self.books().push({"title": val.TITLE});
                    });
                    self.books.valueHasMutated();
                });

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

