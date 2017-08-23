"use strict";
var viewNewsViewModel = require("../../view-models/reviews-view-model");
var frame = require("ui/frame");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
}
exports.pageLoaded = pageLoaded;
function navigatingTo(args) {
    var page = args.object;
    var item = args.context;
    console.log(item.fromArea);
    viewModel = new viewNewsViewModel.NewsListViewModel(item.fromArea, "REVIEWS", item.actionbarCss, item.pageTitle, item.fromArea);
    page.bindingContext = null;
    page.bindingContext = viewModel;
    viewModel.getNewsFeedsByCategoryAndPostArea(item.fromArea, "REVIEWS");
}
exports.navigatingTo = navigatingTo;
function onNavBtnTap() {
    var topmost = frame.topmost();
    topmost.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=reviews-page.js.map