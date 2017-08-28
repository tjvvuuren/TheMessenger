"use strict";
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
//var ObservableArray = require("data/observable-array").ObservableArray;
var buttonViewModelModule = require("../../shared/element-host");
var page;
var source = new observableModule.Observable();
exports.pageLoaded = function (args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("Voices");
    page.bindingContext = btns;
};
//# sourceMappingURL=voices-page.js.map