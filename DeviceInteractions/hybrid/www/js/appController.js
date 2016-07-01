/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'ojs/ojrouter', 'ojs/ojarraytabledatasource'],
  function(oj) {
     function ControllerViewModel() {
       var self = this;

       // Router setup
       self.router = oj.Router.rootInstance;
       self.router.configure({
         'dashboard': {label: 'Dashboard', isDefault: true},
         'suppliers': {label: 'Suppliers'},
         'camera': {label: 'Camera'},
         'location': {label: 'Location'},
         'motion': {label: 'Motion'}
       });
       oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

       // Navigation setup
       var navData = [
         {name: 'Dashboard', id: 'dashboard',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-dashboard-icon'},
         {name: 'Suppliers', id: 'suppliers',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-suppliers-icon'},
         {name: 'Camera', id: 'camera',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-incidents-icon'},
         {name: 'Location', id: 'location',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-customers-icon'},
         {name: 'Motion', id: 'motion',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-profile-icon'},
       ];
       self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});
       self.navChangeHandler = function (event, data) {
         if (data.option === 'selection' && data.value !== self.router.stateId()) {
           self.router.go(data.value);
         }
       };
     }

     return new ControllerViewModel();
  }
);
