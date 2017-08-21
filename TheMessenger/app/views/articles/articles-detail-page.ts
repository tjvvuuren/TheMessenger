import viewModule = require("ui/core/view");
import viewArticlesViewModel = require("../../view-models/articles-view-model");
import * as frame from "ui/frame";

var viewModel: viewArticlesViewModel.ArticleListViewModel;
export function pageNavigatedTo(args) {
    var page = args.object;
    var item = args.context;
    page.bindingContext = item;
}

export function pageLoaded(args) {
    var page = args.object;
 
}


export function onNavBtnTap() {
       var topmost = frame.topmost();
        topmost.goBack();
    }
