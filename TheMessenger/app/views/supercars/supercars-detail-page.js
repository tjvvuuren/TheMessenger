"use strict";
var frame = require("ui/frame");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
}
exports.pageLoaded = pageLoaded;
function navigatingTo(args) {
    var page = args.object;
    var item = args.context;
    //alert("GP");
    page.bindingContext = item;
}
exports.navigatingTo = navigatingTo;
function onNavBtnTap() {
    var topmost = frame.topmost();
    topmost.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=supercars-detail-page.js.map