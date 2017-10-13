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
    var btns = new buttonViewModelModule.ElementHost("DailyPoll");
    page.bindingContext = btns;
};
var viewModel;
function pageNavigatedTo(args) {
    var page = args.object;
    var item = args.context;
    page.bindingContext = item;
}
exports.pageNavigatedTo = pageNavigatedTo;
function pageLoaded(args) {
    var page = args.object;
}
exports.pageLoaded = pageLoaded;
function onNavBtnTap() {
    var topmost = frame.topmost();
    topmost.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=dailyPoll.js.map