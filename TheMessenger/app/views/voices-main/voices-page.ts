var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
//var ObservableArray = require("data/observable-array").ObservableArray;
import buttonViewModelModule = require("../../shared/element-host");
import viewArticlesViewModel = require("../../view-models/articles-view-model");
import pageViewModelModule = require("../../view-models/voices-view-model");
var page;

import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
var source = new observableModule.Observable();

exports.pageLoaded = function(args) {
    page = args.object;
    var btns = new buttonViewModelModule.ElementHost("Voices");
    page.bindingContext = btns;
}

