var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
//var ObservableArray = require("data/observable-array").ObservableArray;
import buttonViewModelModule = require("../../shared/element-host");
var page;

import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
var source = new observableModule.Observable();
import * as frame from "ui/frame";

exports.onNavBtnTap= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/motoring/motoring-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/motoring/motoring-page",
                context: null
            });
        }
    }


exports.pageLoaded = function(args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("FandI");
    page.bindingContext = btns;
}
