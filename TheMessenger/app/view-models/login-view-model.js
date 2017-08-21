"use strict";
var serviceModule = require("../shared/service");
var viewModelBaseModule = require("../common/view-model-base");
var frame = require("ui/frame");
var LoginViewModel = (function (_super) {
    __extends(LoginViewModel, _super);
    function LoginViewModel() {
        _super.call(this);
        this.userlogin = new UserLogin("", "");
        this.userregister = new UserRegister("", "", "");
    }
    Object.defineProperty(LoginViewModel.prototype, "userlogin", {
        get: function () {
            return this.get("_userlogin");
        },
        set: function (value) {
            this.set("_userlogin", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginViewModel.prototype, "userregister", {
        get: function () {
            return this.get("_userregister");
        },
        set: function (value) {
            this.set("_userregister", value);
        },
        enumerable: true,
        configurable: true
    });
    LoginViewModel.prototype.login = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.login(this.userlogin).then(function (data) {
            console.log("worked");
            var topmost = frame.topmost();
            if (topmost.currentEntry.moduleName !== "./main-page") {
                frame.topmost().navigate({
                    animated: true,
                    moduleName: "./main-page",
                    context: null
                });
            }
            _this.endLoading();
        }, function (error) {
            console.log("failed");
            _this.endLoading();
        });
    };
    LoginViewModel.prototype.register = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.register(this.userregister).then(function (data) {
            console.log("worked");
            var topmost = frame.topmost();
            if (topmost.currentEntry.moduleName !== "./main-page") {
                frame.topmost().navigate({
                    animated: true,
                    moduleName: "./main-page",
                    context: null
                });
            }
            _this.endLoading();
        }, function (error) {
            console.log("failed");
            _this.endLoading();
        });
    };
    return LoginViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.LoginViewModel = LoginViewModel;
var UserRegister = (function () {
    function UserRegister(displayname, email, password) {
        this.displayname = displayname;
        this.email = email;
        this.password = password;
    }
    return UserRegister;
}());
exports.UserRegister = UserRegister;
var UserLogin = (function () {
    function UserLogin(email, password) {
        this.email = email;
        this.password = password;
    }
    return UserLogin;
}());
exports.UserLogin = UserLogin;
//# sourceMappingURL=login-view-model.js.map