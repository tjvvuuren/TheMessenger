import viewModule = require("ui/core/view");
import viewArticlesViewModel = require("../../view-models/brics-view-model");
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
    viewModel = page.navigationContext;

    if(viewModel == null)
    {   
        viewModel = new viewArticlesViewModel.ArticleListViewModel("INNOVATION");
    }
    
    page.bindingContext = null;
    page.bindingContext = viewModel;

    viewModel.refresh();
}

