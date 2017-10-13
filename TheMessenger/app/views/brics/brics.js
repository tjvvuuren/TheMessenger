"use strict";
var viewArticlesViewModel = require("../../view-models/brics-view-model");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
    viewModel = new viewArticlesViewModel.ArticleListViewModel("INNOVATION");
    page.bindingContext = viewModel;
    viewModel.refresh();
}
exports.pageLoaded = pageLoaded;
function navigatingTo(args) {
    var page = args.object;
    viewModel = page.navigationContext;
    if (viewModel == null) {
        viewModel = new viewArticlesViewModel.ArticleListViewModel("INNOVATION");
    }
    page.bindingContext = null;
    page.bindingContext = viewModel;
    viewModel.refresh();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=brics.js.map