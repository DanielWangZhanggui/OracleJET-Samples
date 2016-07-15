/// <reference path="../definetelyTyped/knockout.d.ts" />
/// <amd-dependency path="ojs/ojdialog"/> 
/// <amd-dependency path="ojs/ojtoolbar"/> 
/// <amd-dependency path="ojs/ojbutton"/> 
/// <amd-dependency path="ojs/ojmenu"/>

declare var require: any;

class HeaderViewModel {
    /**
     * The view model for the header module
     */

    appName: KnockoutObservable<string>;
    userLogin: KnockoutObservable<string>;
    smScreen;
    menuItemSelect;


    constructor() {
        var $ = require('jquery');
        var oj = require('ojs/ojcore');
        var ko = require('knockout');
        var self = this;

        // Application Name used in Branding Area
        self.appName = ko.observable("QuickStart");

        // User Info used in Global Navigation area
        self.userLogin = ko.observable("john.hancock@oracle.com");

        // Media Queries for repsonsive header
        var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

        // Dropdown menu states
        self.menuItemSelect = function(event, ui) {
            switch (ui.item.attr("id")) {
                case "about":
                    $("#aboutDialog").ojDialog("open");
                    break;
                default:
            }
        };

    }
}
export = new HeaderViewModel();
