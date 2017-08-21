var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
//var ObservableArray = require("data/observable-array").ObservableArray;
import buttonViewModelModule = require("../../shared/element-host");
import pageViewModelModule = require("../../view-models/lifestyle-view-model");
var page;

import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
var source = new observableModule.Observable();

exports.pageLoaded = function(args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("Lifestyle");
    page.bindingContext = btns;
}

