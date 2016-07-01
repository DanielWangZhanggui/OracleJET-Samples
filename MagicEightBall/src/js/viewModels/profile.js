/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'shake'],
        function (oj, ko, $, shake) {
            function ProfileViewModel() {
                var self = this;

                self.error = ko.observable();
                var watchID = null;
                /*
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                };

                /*
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 */
                self.handleAttached = function () {
                    document.addEventListener('deviceready', onDeviceReady);
                    self.startWatch = function () {
                        self.error('in startWatch');
                        shake.startWatch(onSuccess);
//                        var options = {frequency: 1000};
//                        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
                    };

                    self.stopWatch = function () {
                        shake.stopWatch();
                        self.error('stopWatch called');
                        console.log('stopWatch called');
//                        if (watchID) {
//                            navigator.accelerometer.clearWatch(watchID);
//                            watchID = null;
//                        }
                    };
                    function onSuccess(acceleration) {
                        self.error('onSuccess Called');
                        $('#shakeImg').focus();
                        setTimeout(function () {
                            $('#shakeImg').blur();
                            self.error('shake finished');
                        }, 5000);
                    }
                    function onError() {
                        self.error('Failed to start Watch');
                    }

                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 */
                self.handleDetached = function () {
                    document.removeEventListener('deviceready', onDeviceReady);
                };

                function onDeviceReady() {
                    // Will execute when device is ready, or immediately if the device is already ready.

                }
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new ProfileViewModel;
        }
);

