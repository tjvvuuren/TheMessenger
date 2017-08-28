"use strict";
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
//var ObservableArray = require("data/observable-array").ObservableArray;
var pageViewModelModule = require("../../view-models/contactcentre-view-model");
var page;
var source = new observableModule.Observable();
exports.pageLoaded = function (args) {
    page = args.object;
    var btns = new pageViewModelModule.ContactCentreViewModel();
    page.bindingContext = btns;
};
//# sourceMappingURL=contactcentre-page.js.map