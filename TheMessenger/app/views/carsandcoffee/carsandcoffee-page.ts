import viewModule = require("ui/core/view");
import viewInnovationViewModel = require("../../view-models/carsandcoffee-view-model");
import * as frame from "ui/frame";

var viewModel: viewInnovationViewModel.NewsListViewModel;
export function pageLoaded(args) {
    var page = args.object;
}

export function navigatingTo(args) {
    var page = args.object;
    var item = args.context;
    console.log(item.fromArea);
       
    viewModel = new viewInnovationViewModel.NewsListViewModel(item.fromArea, "CARS &AMP; COFFEE", item.actionbarCss, item.pageTitle, item.fromArea);
    
    page.bindingContext = null;
    page.bindingContext = viewModel;
    viewModel.getNewsFeedsByCategoryAndPostArea(item.fromArea, "CARS &AMP; COFFEE");
    
}

export function onNavBtnTap() {
        var topmost = frame.topmost();
        topmost.goBack();
    }
