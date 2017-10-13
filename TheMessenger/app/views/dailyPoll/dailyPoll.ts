var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
//var ObservableArray = require("data/observable-array").ObservableArray;
import buttonViewModelModule = require("../../shared/element-host");
var page;
import viewArticlesViewModel = require("../../view-models/articles-view-model");
import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
var source = new observableModule.Observable();
import * as frame from "ui/frame";

exports.onNavBtnTap= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/surveys/surveys") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/surveys/surveys",
                context: null
            });
        }
    }


exports.pageLoaded = function(args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("DailyPoll");
    page.bindingContext = btns;
}

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