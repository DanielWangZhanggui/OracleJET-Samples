/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function cardContentViewModel(params) {
        var self = this;
        
        self.handleActivated = function(){
            self.books = params.books();
        };
        

    }

    return cardContentViewModel;
});



