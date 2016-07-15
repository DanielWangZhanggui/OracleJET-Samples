import RootViewModel = require('./viewModels/RootViewModel')

declare var require: any;

export class Main {
    ko; oj; router;

    constructor() {
        
        var self = this;
        var ko = require('knockout');
        var oj = require('ojs/ojcore');
        self.router = oj.Router.rootInstance;
        self.router.configure({
            'home': { label: 'Home', isDefault: true },
            'people': { label: 'People' },
            'library': { label: 'Library' },
            'graphics': { label: 'Graphics' },
            'performance': { label: 'Performance' }
        });
        oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
        oj.Router.sync().then(
            function() {
                // bind your ViewModel for the content of the whole page body.
                ko.applyBindings(new RootViewModel(), document.getElementById('globalBody'));
            },
            function(error) {
                oj.Logger.error('Error in root start: ' + error.message);
            }
        );
    }
}

