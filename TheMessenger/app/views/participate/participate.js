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
    if (topmost.currentEntry.moduleName !== "views/surveys/surveys") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/surveys/surveys",
            context: null
        });
    }
};
exports.pageLoaded = function (args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("Participate");
    page.bindingContext = btns;
};
//# sourceMappingURL=participate.js.map