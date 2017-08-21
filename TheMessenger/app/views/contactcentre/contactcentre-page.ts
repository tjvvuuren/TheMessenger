var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
//var ObservableArray = require("data/observable-array").ObservableArray;
import pageViewModelModule = require("../../view-models/contactcentre-view-model");
var page;

import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
var source = new observableModule.Observable();

exports.pageLoaded = function(args) {
    page = args.object;
    var btns = new pageViewModelModule.ContactCentreViewModel();
    page.bindingContext = btns;
}
