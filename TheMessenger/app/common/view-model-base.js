"use strict";
var platformModule = require("platform");
var appModule = require("application");
var observableModule = require("data/observable");
var enumsModule = require("ui/enums");
var dialogsModule = require("ui/dialogs");
var connectivity = require("connectivity");
var navigator = require("./navigator");
var drawerModule = require("nativescript-telerik-ui/sidedrawer");
var frame = require("tns-core-modules/ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var shortmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var ViewModelBase = (function (_super) {
    __extends(ViewModelBase, _super);
    function ViewModelBase() {
        _super.call(this);
        this._loadingCount = 0;
    }
    Object.defineProperty(ViewModelBase.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading != value) {
                this._isLoading = value;
                this.notifyPropertyChange("isLoading", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModelBase.prototype, "androidVisibility", {
        get: function () {
            if (platformModule.device.os === platformModule.platformNames.android) {
                return enumsModule.Visibility.visible;
            }
            return enumsModule.Visibility.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModelBase.prototype, "iosVisibility", {
        get: function () {
            if (platformModule.device.os === platformModule.platformNames.ios) {
                return enumsModule.Visibility.visible;
            }
            return enumsModule.Visibility.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    //get strings(): any {
    ViewModelBase.prototype.beginLoading = function () {
        if (connectivity.getConnectionType() === connectivity.connectionType.none) {
            this.showError("No internet connection.");
            return false;
        }
        if (!this._loadingCount) {
            this.isLoading = true;
        }
        this._loadingCount++;
        return true;
    };
    ViewModelBase.prototype.endLoading = function () {
        if (this._loadingCount > 0) {
            this._loadingCount--;
            if (!this._loadingCount) {
                this.isLoading = false;
            }
        }
    };
    ViewModelBase.prototype.formatDate = function (date) {
        return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
    };
    ViewModelBase.prototype.formatToShortDate = function (date) {
        var strMonth = months[date.getMonth()];
        var strShortMonth = strMonth.substring(0, 3);
        return date.getDate() + " " + strShortMonth;
    };
    ViewModelBase.prototype.showError = function (error) {
        dialogsModule.alert({ title: "Error", message: error, okButtonText: "Close" });
    };
    ViewModelBase.prototype.showInfo = function (message) {
        dialogsModule.alert({ title: "Info", message: message, okButtonText: "OK" });
    };
    ViewModelBase.prototype.toggleDrawerState = function () {
        //console.log("toggleDrawerState");
        this.setDrawerTransition(new drawerModule.PushTransition());
        var sideDrawer = frame.topmost().getViewById("sideDrawer");
        sideDrawer.toggleDrawerState();
    };
    ViewModelBase.prototype.setDrawerTransition = function (transition) {
        var sideDrawer = frame.topmost().getViewById("sideDrawer");
        sideDrawer.drawerTransition = transition;
    };
    ViewModelBase.prototype.navigateToHome = function (args) {
        //console.log("navigatingToHome");
        navigator.navigateToHome();
    };
    ViewModelBase.prototype.navigateToNotifications = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToNotifications(args);
    };
    ViewModelBase.prototype.navigateToProfile = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToProfile();
    };
    ViewModelBase.prototype.navigateToArticles = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToArticles();
    };
    ViewModelBase.prototype.navigateToLifestyle = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToLifestyle();
    };
    ViewModelBase.prototype.navigatingToVoicesMain = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToVoicesMain();
    };
    ViewModelBase.prototype.navigateToEvents = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToEvents();
    };
    ViewModelBase.prototype.navigateToOppertunities = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToOppertunities();
    };
    ViewModelBase.prototype.navigateToMarket = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToMarket();
    };
    ViewModelBase.prototype.navigateToContactCentre = function (args) {
        //console.log("navigatingToHome");
        navigator.navigatingToContactCentre();
    };
    return ViewModelBase;
}(observableModule.Observable));
exports.ViewModelBase = ViewModelBase;
var timeDiff = function (date1, date2) {
    var a = new Date(date1).getTime(), b = new Date(date2).getTime(), diff = {};
    diff.milliseconds = a > b ? a % b : b % a;
    diff.seconds = diff.milliseconds / 1000;
    diff.minutes = diff.seconds / 60;
    diff.hours = diff.minutes / 60;
    diff.days = diff.hours / 24;
    diff.weeks = diff.days / 7;
    return diff;
};
var dateConverter = function (value, format) {
    var a = new Date(value).getTime(), b = Date.now(), // new Date(date2).getTime(),
    diff = {};
    //console.log(new Date(value));
    diff.milliseconds = a > b ? a % b : b % a;
    diff.seconds = diff.milliseconds / 1000;
    diff.minutes = diff.seconds / 60;
    diff.hours = diff.minutes / 60;
    diff.days = diff.hours / 24;
    diff.weeks = diff.days / 7;
    //var result = Math.round(diff.days);
    var returnVal = "";
    if (Math.round(diff.weeks) == 0) {
        if (Math.round(diff.days) == 0) {
            if (Math.round(diff.hours) == 0) {
                var result = Math.round(diff.minutes);
                returnVal = result + " mins ago";
                if (result == 1) {
                    returnVal = result + " min ago";
                }
            }
            else {
                var result = Math.round(diff.hours);
                returnVal = result + " hrs ago";
                if (result == 1) {
                    returnVal = result + " hr ago";
                }
            }
        }
        else {
            var result = Math.round(diff.days);
            returnVal = result + " days ago";
            if (result == 1) {
                returnVal = result + " day ago";
            }
        }
    }
    else {
        var result = Math.round(diff.weeks);
        returnVal = result + " weeks ago";
        if (result == 1) {
            returnVal = result + " week ago";
        }
        //.getMonth();
        if (result > 4) {
            //console.log("SHOW DATE");
            var intMonth = new Date(value).getMonth();
            var strMonth = shortmonths[intMonth - 1];
            var intDay = new Date(value).getDate();
            returnVal = intDay + " " + strMonth;
        }
    }
    return returnVal;
};
appModule.resources["dateConverter"] = dateConverter;
appModule.resources["dateFormat"] = "DD.MM.YYYY";
//# sourceMappingURL=view-model-base.js.map