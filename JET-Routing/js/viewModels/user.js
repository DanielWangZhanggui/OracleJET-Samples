define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojrouter'],
function(oj, ko)
{
  function viewModel(params)
  {
    this.parentRouter = params.ojRouter.parentRouter;

    this.content = 'This is the user module';
  }

  // Return constructor function
  return viewModel;
});