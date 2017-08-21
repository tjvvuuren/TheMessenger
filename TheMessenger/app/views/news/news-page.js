"use strict";
var viewNewsViewModel = require("../../view-models/news-view-model");
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
    if (item.fromArea == "FOODANDWINE") {
        item.fromArea = "FOOD &AMP; WINE";
        item.pageTitle = "Food and Wine - News";
    }
    if (item.fromArea == "BOOKREVIEWS") {
        item.fromArea = "BOOK REVIEWS";
        item.pageTitle = "Book Reviews - News";
    }
    //viewModel = page.navigationContext;
    //if(viewModel == null)
    //{   
    viewModel = new viewNewsViewModel.NewsListViewModel(item.fromArea, item.actionbarCss, item.pageTitle, item.fromArea);
    //}
    page.bindingContext = null;
    page.bindingContext = viewModel;
    //page.bindingContext = item;
    viewModel.getNewsFeedsForCategory(item.fromArea);
    //viewModel.refresh();
}
exports.navigatingTo = navigatingTo;
function onNavBtnTap() {
    var topmost = frame.topmost();
    topmost.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=news-page.js.map