import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
import * as frame from "ui/frame";

export class MainPageViewModel extends viewModelBaseModule.ViewModelBase {
    constructor() {
        super();
    }

    navigateToLogin(){
        var topmost = frame.topmost();
        //if (topmost.currentEntry.moduleName !== "views/samples/dataform") {
            //frame.topmost().navigate({
                //animated: true,
                //moduleName: "views/samples/dataform",
                //context: null
            //});
        //}
        if (topmost.currentEntry.moduleName !== "views/login/login-view-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/login/login-view-page",
                context: null
            });
        }
    }
}
