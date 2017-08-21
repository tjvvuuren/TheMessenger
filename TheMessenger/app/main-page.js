"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viewModelModule = require("./view-models/main-page-model");
//import drawerModule = require("nativescript-telerik-ui-pro/sidedrawer");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModelModule.MainPageViewModel();
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map