"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
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
    page.bindingContext = source;
};
//# sourceMappingURL=motoring-classifieds-page.js.map