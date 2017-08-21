"use strict";
var everliveModule = require("../lib/everlive.all.min");
var applicationSettingsModule = require("application-settings");
var constantsModule = require("./constants");
var notificationsModule = require("./notifications");
//import * as Everlive from 'everlive-sdk';
var ARTICLES = "Articles";
var NOTIFICATIONS = "Notification";
var EVENTS = "Events";
var NEWSFEED = "NewsFeeds";
var Service = (function () {
    function Service() {
        this._everlive = new everliveModule({ apiKey: constantsModule.telerikApiKey });
        this.init();
    }
    Object.defineProperty(Service.prototype, "EverLive", {
        get: function () {
            return this._everlive;
        },
        set: function (value) {
            this._everlive = value;
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.init = function () {
        if (!this._everlive) {
            this._everlive = new everliveModule({
                apiKey: constantsModule.telerikApiKey //,
            });
        }
    };
    Service.prototype.clearEverlive = function () {
        if (this._everlive) {
            //this._everlive.offlineStorage.purgeAll();
            this._everlive = null;
        }
    };
    Service.prototype.getArticles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().eq('Category', 'Joe');
            query.take(10);
            var everlive = _this.createEverlive();
            everlive.data(ARTICLES).get(query).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.getArticlesByCategory = function (category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().eq('Category', category);
            query.take(10);
            var everlive = _this.createEverlive();
            everlive.data(ARTICLES).get(query).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.getNewsFeedsByCategory = function (category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            //console.log(category);
            query.where().eq('Category', category);
            query.take(10);
            var everlive = _this.createEverlive();
            everlive.data(NEWSFEED).get(query).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.getNewsFeeds = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            var everlive = _this.createEverlive();
            everlive.data(NEWSFEED).get(query).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            var everlive = _this.createEverlive();
            everlive.data(EVENTS).get(query).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.getNotifications = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new everliveModule.Query();
            query.order("PublishedDate");
            var everlive = _this.createEverlive();
            everlive.data(NOTIFICATIONS).get(query).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var everlive = _this.createEverlive();
            everlive.authentication.login(user.email, user.password).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var everlive = _this.createEverlive();
            var attrs = {
                Email: user.email,
                DisplayName: user.displayname
            };
            everlive.Users.register(user.email, user.password, attrs).then(function (data) {
                resolve(data.result);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.prototype.createEverlive = function () {
        //if (!this._everlive) {
        //  this._everlive = new Everlive({
        //    apiKey: constantsModule.telerikApiKey//,
        //token: applicationSettingsModule.getString(constantsModule.authenticationTokenKey)
        //});
        //}        
        if (!this._everlive) {
            this._everlive = new everliveModule({
                apiKey: constantsModule.telerikApiKey //,
            });
        }
        return this._everlive;
    };
    Service.showErrorAndReject = function (error, reject) {
        notificationsModule.showError(error.message);
        reject(error);
    };
    Service.prototype.setupLocalSettings = function (authenticationTokenKey) {
        applicationSettingsModule.setString(constantsModule.authenticationTokenKey, authenticationTokenKey);
    };
    Service.prototype.clearLocalSettings = function () {
        applicationSettingsModule.remove(constantsModule.authenticationTokenKey);
    };
    return Service;
}());
exports.Service = Service;
exports.service = new Service();
//# sourceMappingURL=service.js.map