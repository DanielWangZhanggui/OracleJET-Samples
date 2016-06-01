define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojlistview', 'ojs/ojarraytabledatasource',
        'ojs/ojrouter'],
function(oj, ko)
{
  function viewModel(params)
  {
    this.dataSource = new oj.ArrayTableDataSource(params.data, {idAttribute: 'id'});

    this.gotoContent = function(event, ui)
    {
      if (ui.option === 'currentItem' && ui.value !== null)
      {
        var orderRouter = params.ojRouter.parentRouter;
        orderRouter.go(ui.value.toString());
      }
    };

    this.goBack = function()
    {
      // Could also do this.parentRouter.go();
      window.history.back();
    };

    this.goCust = function()
    {
      oj.Router.rootInstance.go('customers');
    };

  }

  // Return constructor function
  return viewModel;
});