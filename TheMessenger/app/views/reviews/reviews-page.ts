import viewModule = require("ui/core/view");
import viewNewsViewModel = require("../../view-models/reviews-view-model");
import * as frame from "ui/frame";

var viewModel: viewNewsViewModel.NewsListViewModel;
export function pageLoaded(args) {
    var page = args.object;
}

export function navigatingTo(args) {
    var page = args.object;
    var item = args.context;
    console.log(item.fromArea);
       
    viewModel = new viewNewsViewModel.NewsListViewModel(item.fromArea, "REVIEWS", item.actionbarCss, item.pageTitle, item.fromArea);
    
    page.bindingContext = null;
    page.bindingContext = viewModel;
    viewModel.getNewsFeedsByCategoryAndPostArea(item.fromArea, "REVIEWS");
    
}

export function onNavBtnTap() {
        var topmost = frame.topmost();
        topmost.goBack();
    }
