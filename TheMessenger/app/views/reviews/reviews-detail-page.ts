import viewModule = require("ui/core/view");
import viewNewsViewModel = require("../../view-models/reviews-view-model");
import * as frame from "ui/frame";
import appModule = require("application");


var viewModel: viewNewsViewModel.NewsListViewModel;
export function pageLoaded(args) {
    var page = args.object;
}
export function navigatingTo(args) {
    var page = args.object;
    var item = args.context;
    page.bindingContext = item;
}

 
export function onNavBtnTap() {
       var topmost = frame.topmost();
        topmost.goBack();
    }

