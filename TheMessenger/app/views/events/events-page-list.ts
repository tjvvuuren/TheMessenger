import viewModule = require("ui/core/view");
import viewArticlesViewModel = require("../../view-models/events-view-model");

var viewModel: viewArticlesViewModel.EventListViewModel;
export function pageLoaded(args) {
    var page = args.object;
    viewModel = new viewArticlesViewModel.EventListViewModel();
    page.bindingContext = viewModel;
    viewModel.refresh(); 
}


export function navigatingTo(args) {
    var page = args.object;
    viewModel = page.navigationContext;

    if(viewModel == null)
    {   
        viewModel = new viewArticlesViewModel.EventListViewModel();
    }
    
    page.bindingContext = null;
    page.bindingContext = viewModel;

    viewModel.refresh();
}

