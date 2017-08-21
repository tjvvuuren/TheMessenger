import viewModelModule = require("./view-models/main-page-model");
import frame = require("ui/frame");
//import drawerModule = require("nativescript-telerik-ui-pro/sidedrawer");

export function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModelModule.MainPageViewModel();
}
