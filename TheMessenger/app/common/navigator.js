"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("ui/frame");
var platform = require("platform");
var isIOS = platform.device.os === platform.platformNames.ios;
var isAndroid = platform.device.os === platform.platformNames.android;
function traceNavigateTo(to, context) {
    var eventText = "Navigate to: " + to + (context ? " (" + context + ")" : "");
    console.log("Track: " + eventText);
    return to;
}
function navigateToHome() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "main-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("main-page"),
            context: null
        });
    }
}
exports.navigateToHome = navigateToHome;
function navigatingToProfile() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/profile/profile-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/profile/profile-page"),
            context: null
        });
    }
}
exports.navigatingToProfile = navigatingToProfile;
function navigatingToNotifications(args) {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/notifications/notifications-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/notifications/notifications-page"),
            context: null //new viewNotificationsViewModel.NotificationsViewModel()
            //context: new viewNotificationsViewModel.NotificationsViewModel()
        });
    }
}
exports.navigatingToNotifications = navigatingToNotifications;
function navigatingToArticles() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/articles/articles-page-list") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/articles/articles-page-list",
            context: null
        });
    }
}
exports.navigatingToArticles = navigatingToArticles;
function navigatingToEvents() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/events/events-page-list") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/events/events-page-list"),
            context: null
        });
    }
}
exports.navigatingToEvents = navigatingToEvents;
function navigatingToLifestyle() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/lifestyle/lifestyle-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/lifestyle/lifestyle-page"),
            context: null
        });
    }
}
exports.navigatingToLifestyle = navigatingToLifestyle;
function navigatingToMarket() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/market/market-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/market/market-page"),
            context: null
        });
    }
}
exports.navigatingToMarket = navigatingToMarket;
function navigatingToOppertunities() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/oppertunities/oppertunities-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/oppertunities/oppertunities-page"),
            context: null
        });
    }
}
exports.navigatingToOppertunities = navigatingToOppertunities;
function navigatingToVoices() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/voices/voices-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/voices/voices-page"),
            context: null
        });
    }
}
exports.navigatingToVoices = navigatingToVoices;
function navigatingToContactCentre() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/contactcentre/contactcentre-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/contactcentre/contactcentre-page"),
            context: null
        });
    }
}
exports.navigatingToContactCentre = navigatingToContactCentre;
function navigateToAbout() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/about/about") {
        frame.topmost().navigate(traceNavigateTo("views/about/about"));
    }
}
exports.navigateToAbout = navigateToAbout;
function navigateBack() {
    frame.goBack();
}
exports.navigateBack = navigateBack;
//# sourceMappingURL=navigator.js.map