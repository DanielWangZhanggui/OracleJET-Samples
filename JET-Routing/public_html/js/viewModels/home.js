/**
 * Home content module, example of singleton view model object.
 */
define(['knockout'],
function(ko)
{
  var viewModel =
  {
    title: 'Responsive Web Application with router',

    description:
    [
      {
        line: 'This application demonstrate the Responsive Web Application patter using the \
JET router for navigation.'
      },
      {
        line: 'This is the home module.'
      }
    ]
  };

  return viewModel;
});