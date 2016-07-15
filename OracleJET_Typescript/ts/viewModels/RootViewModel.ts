/// <reference path="../definetelyTyped/knockout.d.ts" />
/// <amd-dependency path="promise"/>
/// <amd-dependency path="ojs/ojlistview"/>
/// <amd-dependency path="ojs/ojoffcanvas"/>
/// <amd-dependency path="ojs/ojinputnumber"/>
/// <amd-dependency path="ojs/ojbutton"/>
/// <amd-dependency path="ojs/ojmodule"/>
/// <amd-dependency path="ojs/ojrouter"/>
/// <amd-dependency path="ojs/ojnavigationlist"/>
/// <amd-dependency path="ojs/ojarraytabledatasource"/>


declare var require: any;

class RootViewModel {
    oj; ko; $; router; navDataSource; smScreen; navChange;
    drawerParams; toggleDrawer; mdScreen;

    constructor() {
        var oj = require('ojs/ojcore');
        var self = this;

        self.router = oj.Router.rootInstance;

        // Shared navigation data and callbacks for nav bar (medium+ screens) and nav list (small screens)
        var navData = [
            {
                name: 'Home', id: 'home',
                iconClass: 'demo-home-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'
            },
            {
                name: 'People', id: 'people',
                iconClass: 'demo-education-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'
            },
            {
                name: 'Library', id: 'library',
                iconClass: 'demo-library-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'
            },
            {
                name: 'Graphics', id: 'graphics',
                iconClass: 'demo-palette-icon-24  demo-icon-font-24 oj-navigationlist-item-icon'
            },
            {
                name: 'Performance', id: 'performance',
                iconClass: 'demo-grid-icon-16 demo-icon-font-24 oj-navigationlist-item-icon'
            }
        ];
        self.navDataSource = new oj.ArrayTableDataSource(navData, { idAttribute: 'id' });
        var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
        self.navChange = function(event, ui) {
            if (ui.option === 'selection' && ui.value !== self.router.stateId()) {
                // Only toggle navigation drawer when it's shown on small screens
                if (self.smScreen())
                    self.toggleDrawer();
                self.router.go(ui.value);
            }
        };
        var drawerParams = {
            displayMode: 'push',
            selector: '#offcanvas',
        };
        // Called by navigation drawer toggle button and after selection of nav drawer item
        self.toggleDrawer = function() {
            return oj.OffcanvasUtils.toggle(drawerParams);
        };
        // Close the drawer for medium and up screen sizes
        var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
        self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
        self.mdScreen.subscribe(function() { oj.OffcanvasUtils.close(drawerParams); });

    }
}
export = RootViewModel;
