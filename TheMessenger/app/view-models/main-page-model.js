"use strict";
var viewModelBaseModule = require("../common/view-model-base");
var frame = require("ui/frame");
var MainPageViewModel = (function (_super) {
    __extends(MainPageViewModel, _super);
    function MainPageViewModel() {
        _super.call(this);
    }
    MainPageViewModel.prototype.navigateToLogin = function () {
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
    };
    return MainPageViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.MainPageViewModel = MainPageViewModel;
//# sourceMappingURL=main-page-model.js.map