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
    if (topmost.currentEntry.moduleName !== "views/motoring/motoring-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/motoring/motoring-page",
            context: null
        });
    }
};
exports.pageLoaded = function (args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("FandI");
    page.bindingContext = btns;
};
//# sourceMappingURL=motoring-FandI-page.js.map