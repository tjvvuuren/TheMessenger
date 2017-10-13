"use strict";
var frame = require("ui/frame");
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
//# sourceMappingURL=business-details-page.js.map