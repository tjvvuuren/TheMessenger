import viewModule = require("ui/core/view");
import viewArticlesViewModel = require("../../view-models/classifieds-view-model");
import * as frame from "ui/frame";

var viewModel: viewArticlesViewModel.ClassifiedsViewModel;
export function pageNavigatedTo(args) {
    //alert("GO");
    var page = args.object;

    var item = args.context;
    //var sObj = JSON.stringify(item);
    //alert(sObj);

     //context: {
            //actionbarCss: "motoring-action-bar",
            //pageTitle: "Motoring - Classifieds",
            //fromArea: "Motoring"
        //}

    page.bindingContext = item;
}


export function onNavBtnTap() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/articles/articles-page-list") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/articles/articles-page-list",
                context: null
            });
        }
    }
