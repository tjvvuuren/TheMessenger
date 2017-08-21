//import application = require("application");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("application");
//var Everlive = require('everlive-sdk');
var everliveModule = require("./lib/everlive.all.min");
//import * as Everlive from 'everlive-sdk';
var constantsModule = require("./shared/constants");
// Remove this in the AppBuilder templates
//applicationOn.cssFile = "./app.css"
application_1.setCssFileName("./app.css");
application_1.on(application_1.launchEvent, function (args) {
    var _everlive;
    if (!this._everlive) {
        this._everlive = new everliveModule({
            apiKey: constantsModule.telerikApiKey
        });
    }
});
application_1.start({ moduleName: "main-page" });
//document.addEventListener("deviceready", function() {
//var everlive = new Everlive({
//appId: "9fi6b79u9cyuqehq",
//scheme: "https"
//});
//}); 
//# sourceMappingURL=app.js.map