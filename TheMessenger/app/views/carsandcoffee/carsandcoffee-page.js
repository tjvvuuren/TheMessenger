"use strict";
var viewInnovationViewModel = require("../../view-models/carsandcoffee-view-model");
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
    viewModel = new viewInnovationViewModel.NewsListViewModel(item.fromArea, "CARS &AMP; COFFEE", item.actionbarCss, item.pageTitle, item.fromArea);
    page.bindingContext = null;
    page.bindingContext = viewModel;
    viewModel.getNewsFeedsByCategoryAndPostArea(item.fromArea, "CARS &AMP; COFFEE");
}
exports.navigatingTo = navigatingTo;
function onNavBtnTap() {
    var topmost = frame.topmost();
    topmost.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=carsandcoffee-page.js.map