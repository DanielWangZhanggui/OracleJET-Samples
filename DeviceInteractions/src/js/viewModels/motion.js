/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojchart', 'ojs/ojbutton'],
        function (oj, ko, $) {
            function ProfileViewModel() {
                var self = this;

                self.watchID = "";
                self.notice = ko.observable('nothing yet');
                self.seriesData = ko.observable('nothing also');

                /* chart data */
                self.scatterSeries = [];

                self.scatterGroups = ["Group A"];
                self.scatterSeriesValue = ko.observableArray(self.scatterSeries);
                self.scatterGroupsValue = ko.observableArray(self.scatterGroups);




                /*
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                }

                /*
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 */
                self.handleAttached = function () {
                    document.addEventListener('deviceready', onDeviceReady);

                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 */
                self.handleDetached = function () {
                    document.removeEventListener('deviceready', onDeviceReady);
                };

                function onDeviceReady() {

                    self.accelWatch = function () {
                        if (navigator.accelerometer) {
                            var options = {'frequency': 3000};
                            self.watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
                            self.notice('accelerometer loaded');
                        } else {
                            self.notice('Error: Could not load Accelerometer');
                        }
                    };

                    function onSuccess(acceleration) {
                        var x = acceleration.x;
                        var y = acceleration.y;
                        var z = acceleration.z;
                        var t = new Date(acceleration.timestamp);
                        var name = t.getDate() + " " + t.getMonth() + " " + t.getFullYear() + " : " + t.getTime();
                        self.notice(name);
                        self.scatterSeries.push({"name": name, "items": [{"x": Math.round(x), "y": Math.round(y)}]});
//                        self.notice(JSON.stringify(self.scatterSeries));
                        self.scatterSeriesValue(self.scatterSeries);
//                        self.seriesData(JSON.stringify(self.scatterSeriesValue));
                    }

                    function onError(error) {
                        self.notice('Error doing something with Accelerometer: ' + error);
                    }

                    self.stopWatch = function () {
                        navigator.accelerometer.clearWatch(self.watchID);
                        self.notice('Stop clicked');
                    };

                    self.clearChart = function () {
                        self.scatterSeries.length = 0;
                        self.scatterGroupsValue(self.scatterSeries);
                    };
                }
            }


            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new ProfileViewModel();
        }
);
