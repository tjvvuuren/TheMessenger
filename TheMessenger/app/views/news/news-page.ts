import viewModule = require("ui/core/view");
import viewNewsViewModel = require("../../view-models/news-view-model");
import * as frame from "ui/frame";

var viewModel: viewNewsViewModel.NewsListViewModel;
export function pageLoaded(args) {
    var page = args.object;
}

export function navigatingTo(args) {
    var page = args.object;
    var item = args.context;
    console.log(item.fromArea);
    if(item.fromArea == "FOODANDWINE")
    {
        item.fromArea = "FOOD &AMP; WINE";
        item.pageTitle = "Food and Wine - News";
    }
    if(item.fromArea == "BOOKREVIEWS")
    {
        item.fromArea = "BOOK REVIEWS";
        item.pageTitle = "Book Reviews - News";
    }
    if(item.fromArea == "MOTORING")
    {
        viewModel = new viewNewsViewModel.NewsListViewModel(item.fromArea, "NEWS", item.actionbarCss, item.pageTitle, item.fromArea);
        page.bindingContext = null;
        page.bindingContext = viewModel;
        viewModel.getNewsFeedsByCategoryAndPostArea(item.fromArea, "NEWS");;
    }else
    {
        viewModel = new viewNewsViewModel.NewsListViewModel(item.fromArea, "", item.actionbarCss, item.pageTitle, item.fromArea);
        page.bindingContext = null;
        page.bindingContext = viewModel;
        viewModel.getNewsFeedsForCategory(item.fromArea);
    }
}

export function onNavBtnTap() {
        var topmost = frame.topmost();
        topmost.goBack();
    }
