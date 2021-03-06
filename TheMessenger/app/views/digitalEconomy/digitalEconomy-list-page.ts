import viewModule = require("ui/core/view");
import viewArticlesViewModel = require("../../view-models/digitalEconomy-view-model");
import observable = require("data/observable");

var viewModel: viewArticlesViewModel.ArticleListViewModel;

export function pageLoaded(args) {
    var page = args.object;

    viewModel = new viewArticlesViewModel.ArticleListViewModel("INNOVATION");

    page.bindingContext = viewModel;
    viewModel.refresh(); 
}

export function navigatingTo(args) {
    var page = args.object;
    //viewModel = new viewNotificationsViewModel.NotificationsViewModel();
    viewModel = page.navigationContext;
    if(viewModel == null)
    {   
        console.log("navigatingTo: viewModel == null");
        viewModel = new viewArticlesViewModel.ArticleListViewModel("INNOVATION");
    }
    //console.log("navigatingTo: " + JSON.stringify(viewModel.Notifications));

    page.bindingContext = null;
    page.bindingContext = viewModel;

    viewModel.refresh();
}

