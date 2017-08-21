"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viewNotificationsViewModel = require("../../view-models/notifications-view-model");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
    //if(!viewModel)
    //{
    //        console.log("pageLoaded: " + JSON.stringify(viewModel.Notifications));
    //    }
    //viewModel = new viewNotificationsViewModel.NotificationsViewModel();
    console.log("pageLoaded: " + JSON.stringify(viewModel.Notifications));
    page.bindingContext = viewModel;
    //viewModel.refresh();
}
exports.pageLoaded = pageLoaded;
function navigatingTo(args) {
    var page = args.object;
    //viewModel = new viewNotificationsViewModel.NotificationsViewModel();
    viewModel = page.navigationContext;
    if (viewModel == null) {
        console.log("navigatingTo: viewModel == null");
        viewModel = new viewNotificationsViewModel.NotificationsViewModel();
    }
    //console.log("navigatingTo: " + JSON.stringify(viewModel.Notifications));
    page.bindingContext = null;
    page.bindingContext = viewModel;
    viewModel.refresh();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=notifications-page.js.map