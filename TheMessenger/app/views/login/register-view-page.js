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
//# sourceMappingURL=register-view-page.js.map