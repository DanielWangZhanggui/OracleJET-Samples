/// <reference path="../definetelyTyped/knockout.d.ts" />

declare var require: any;

class mainContentViewModel {
    /*
    * The view model for the main content view template
    */
    
    public something: KnockoutObservable<string>;

    constructor() {
        var ko = require('knockout');
        var self = this;
        self.something = ko.observable("This section uses content from it's own 'home' ViewModel. The module is found in the /js/viewModules folder");
    }
};
export = new mainContentViewModel();
