"use strict";
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
//var ObservableArray = require("data/observable-array").ObservableArray;
var buttonViewModelModule = require("../../shared/element-host");
var page;
var source = new observableModule.Observable();
exports.pageLoaded = function (args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("Lifestyle");
    page.bindingContext = btns;
};
//# sourceMappingURL=impact-list-page.js.map