"use strict";
var viewModel = require("../../view-models/login-view-model");
var frame = require("ui/frame");
//var viewModel: viewUserViewModel.AuthenticationViewModel;
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.LoginViewModel();
}
exports.onPageLoaded = onPageLoaded;
function onNavBtnTap() {
    var topmost = frame.topmost();
    topmost.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
function onRegisterTap() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/login/register-view-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/login/register-view-page",
            context: null
        });
    }
}
exports.onRegisterTap = onRegisterTap;
//# sourceMappingURL=login-view-page.js.map