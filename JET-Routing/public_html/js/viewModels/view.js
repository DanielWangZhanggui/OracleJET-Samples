/*jslint browser: true*/
/*global define */
define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext',
        'ojs/ojrouter'],
function(oj, ko)
{
  'use strict';

  function viewModel(params)
  {
    this.parentRouter = params.ojRouter.parentRouter;

    // Value for this view is injected using the module param
    this.cust = params.data;

    this.goBack = function()
    {
      // Could also do this.parentRouter.go(); but this preserve history
      window.history.back();
    };

    this.gotoOrders = function()
    {
      this.parentRouter.go(this.cust.id + '/orders');
    };
  }

  // Return constructor function
  return viewModel;
});