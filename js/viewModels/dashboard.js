/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojlistview',
    'ojs/ojdatacollection-common',
    'ojs/ojbutton',
    'ojs/ojinputtext',
    'ojs/ojpagingcontrol',
    'ojs/ojpagingcontrol-model',
    'ojs/ojselectcombobox',
    'ojs/ojdialog'
],
        function (oj, ko, $) {

            function DashboardViewModel() {
                var self = this;
                self.data = ko.observable();

                self.clampLog = function (data) {
                    console.log("Logging" + data);
                };
                self.thread = function (data) {
                    console.log("Thread" + data);
                };
                self.targetStates = function (data) {
                    console.log("TargetStates" + data);
                };
                self.dataSources = function (data) {
                    console.log("dataSources" + data);
                };
                self.workManagerss = function (data) {
                    console.log("workManagerss" + data);
                };

                self.addItem = function (data) {
                    console.log("Add called");
                    $("#addMoniterPanelPopUp").ojDialog("open");
                };
                
                self.refresh = function(data){
                  console.log("refresh");  
                };
                self.nameSearch = ko.observable('');

                self.envOption = ko.observable();
                self.envSearch = ko.observable();
                self.appName = ko.observable();
                self.appOption = ko.observable();
                
                self.addEnvPanel = function(){
                    
                };

                $.ajax({
                    url: 'data.json', //'exception.json', //resourceURL,
                    type: 'GET',
                    async: false,
                    success: function (data) {
                        self.data(data);
                    },
                    error: function () {

                    }
                });

                self.dataSource = new oj.JsonTreeDataSource(self.data()),
                        this.selectTemplate = function (file, bindingContext)
                        {
                            if (bindingContext.$itemContext.leaf)
                                return self.activeLayout() == "thumbView" ? 'item_grid_template' : 'item_template';
                            else
                                return 'group_template';
                        };

                this.activeLayout = ko.observable("thumbView");



                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additionaly available methods.

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed
                };


                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View. 
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new DashboardViewModel();
        }
);
