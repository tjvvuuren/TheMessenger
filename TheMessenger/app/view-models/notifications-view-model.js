"use strict";
var serviceModule = require("../shared/service");
var viewModelBaseModule = require("../common/view-model-base");
var observableModule = require("data/observable");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var NotificationsItemData = (function (_super) {
    __extends(NotificationsItemData, _super);
    function NotificationsItemData(id, title, notification, publisheddate) {
        _super.call(this);
        this.Title = title;
        this.Notification = notification;
        this.PublishedDate = this.formatToShortDate(publisheddate);
        this.ID = id;
    }
    NotificationsItemData.prototype.formatDate = function (date) {
        return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
    };
    NotificationsItemData.prototype.formatToShortDate = function (date) {
        var strMonth = months[date.getMonth()];
        var strShortMonth = strMonth.substring(0, 3);
        return date.getDate() + " " + strShortMonth;
    };
    return NotificationsItemData;
}(observableModule.Observable));
exports.NotificationsItemData = NotificationsItemData;
var NotificationsViewModel = (function (_super) {
    __extends(NotificationsViewModel, _super);
    function NotificationsViewModel() {
        _super.call(this);
    }
    Object.defineProperty(NotificationsViewModel.prototype, "Notifications", {
        get: function () {
            return this._notifications;
        },
        set: function (value) {
            if (this._notifications != value) {
                this._notifications = value;
                this.notifyPropertyChange("Notifications", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    NotificationsViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getNotifications().then(function (data) {
            var notifications = new Array();
            for (var i = 0; i < data.length; i++) {
                notifications.push(new NotificationsItemData(i, data[i].Title, data[i].Notification, data[i].PublishedDate));
            }
            _this.Notifications = notifications;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return NotificationsViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.NotificationsViewModel = NotificationsViewModel;
//# sourceMappingURL=notifications-view-model.js.map