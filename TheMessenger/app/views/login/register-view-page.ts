import viewModel = require("../../view-models/login-view-model");
import * as frame from "ui/frame";
//var viewModel: viewUserViewModel.AuthenticationViewModel;
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.LoginViewModel();
}

export function onNavBtnTap() {
       var topmost = frame.topmost();
        topmost.goBack();
    }
