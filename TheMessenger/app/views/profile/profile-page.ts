import viewModelModule = require("../../view-models/base-view-model");
import frame = require("ui/frame");

export function pageLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    page.bindingContext = new viewModelModule.ViewModel();
}
