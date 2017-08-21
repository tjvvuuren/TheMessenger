"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var everlive_sdk_1 = require("everlive-sdk");
//var Everlive = require('everlive-sdk');
var BackendService = (function () {
    function BackendService() {
        var options = {
            appId: '9fi6b79u9cyuqehq',
            scheme: 'https'
        };
        this._everlive = new everlive_sdk_1.default(options);
    }
    BackendService.prototype.getArticleData = function () {
        var el = new everlive_sdk_1.default({
            appId: '9fi6b79u9cyuqehq',
            scheme: 'https'
        });
        var data = el.data("Articles");
        var query = new everlive_sdk_1.default.Query();
        query.select('Title');
        data.get(query, function (data) {
            //this._todoItems.push(new ListItem("Call Brian Ingram regarding the hotel reservations", false, false));
            //this._todoItems.push(new ListItem("See weather forecast for London", true, false));
            //console.log("QUERY COMPLETED");
            for (var i = 0; i < 10; i++) {
                //this._todoItems.push(new ListItem(data.result[i].Title, false, false));
                //this._items.push(new ArticleDataItem(data.result[i].Id,data.result[i].Title,data.result[i].ArticleContent));
            }
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    Object.defineProperty(BackendService.prototype, "instance", {
        get: function () {
            return this._everlive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService.prototype, "query", {
        // Optional
        get: function () {
            return new everlive_sdk_1.default.Query();
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data-access.js.map