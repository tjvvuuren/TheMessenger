"use strict";
var viewArticlesViewModel = require("../../view-models/articles-view-model");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
    viewModel = new viewArticlesViewModel.ArticleListViewModel("CLUB");
    page.bindingContext = viewModel;
    viewModel.refresh();
}
exports.pageLoaded = pageLoaded;
function navigatingTo(args) {
    var page = args.object;
    //viewModel = new viewNotificationsViewModel.NotificationsViewModel();
    viewModel = page.navigationContext;
    if (viewModel == null) {
        console.log("navigatingTo: viewModel == null");
        viewModel = new viewArticlesViewModel.ArticleListViewModel("CLUB");
    }
    //console.log("navigatingTo: " + JSON.stringify(viewModel.Notifications));
    page.bindingContext = null;
    page.bindingContext = viewModel;
    viewModel.refresh();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=club-list-page.js.map