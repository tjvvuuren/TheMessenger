"use strict";
var viewModelModule = require("../../view-models/base-view-model");
function pageLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    page.bindingContext = new viewModelModule.ViewModel();
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=profile-page.js.map