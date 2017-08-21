import viewModule = require("ui/core/view");
import viewArticlesViewModel = require("../../view-models/events-view-model");
import * as frame from "ui/frame";

var viewModel: viewArticlesViewModel.EventListViewModel;
export function pageNavigatedTo(args) {
    var page = args.object;
    var item = args.context;
    page.bindingContext = item;
}


export function onNavBtnTap() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/events/events-page-list") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/events/events-page-list",
                context: null
            });
        }
    }
