"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("ui/frame");
var viewModel;
function pageNavigatedTo(args) {
    //alert("GO");
    var page = args.object;
    var item = args.context;
    //var sObj = JSON.stringify(item);
    //alert(sObj);
    //context: {
    //actionbarCss: "motoring-action-bar",
    //pageTitle: "Motoring - Classifieds",
    //fromArea: "Motoring"
    //}
    page.bindingContext = item;
}
exports.pageNavigatedTo = pageNavigatedTo;
function onNavBtnTap() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/articles/articles-page-list") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/articles/articles-page-list",
            context: null
        });
    }
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=classifieds-page.js.map