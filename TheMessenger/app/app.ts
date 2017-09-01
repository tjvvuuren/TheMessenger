//import application = require("application");
import "./bundle-config";
import * as app from 'application';
import { on as applicationOn, launchEvent, ApplicationEventData, setCssFileName,start as applicationStart } from "application";
var Analytics = require('nativescript-telerik-analytics');
//var Everlive = require('everlive-sdk');
var everliveModule = require("./lib/everlive.all.min");
//import * as Everlive from 'everlive-sdk';
import constantsModule = require("./shared/constants");
// Remove this in the AppBuilder templates
//applicationOn.cssFile = "./app.css"
setCssFileName("./app.css");

applicationOn(launchEvent, function (args: ApplicationEventData) {
    var _everlive: any;
    if (!this._everlive) {
            this._everlive = new everliveModule({
                apiKey: constantsModule.telerikApiKey
            });
        }

    // Initialize the Analytics plugin and start a new session when the application starts
    Analytics.init({ appId: '9fi6b79u9cyuqehq' });
    Analytics.start();
});


app.start({ moduleName: 'main-page' });

//document.addEventListener("deviceready", function() {
    //var everlive = new Everlive({
        //appId: "9fi6b79u9cyuqehq",
        //scheme: "https"
    //});
//});