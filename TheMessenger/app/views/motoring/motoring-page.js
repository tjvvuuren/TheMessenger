"use strict";
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
//var ObservableArray = require("data/observable-array").ObservableArray;
var buttonViewModelModule = require("../../shared/element-host");
var page;
var source = new observableModule.Observable();
var frame = require("ui/frame");
exports.onNavBtnTap = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/lifestyle/lifestyle-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/lifestyle/lifestyle-page",
            context: null
        });
    }
};
exports.pageLoaded = function (args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("Motoring");
    page.bindingContext = btns;
};
//# sourceMappingURL=motoring-page.js.map