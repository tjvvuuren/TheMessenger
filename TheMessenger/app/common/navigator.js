"use strict";
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
        });
    }
}
exports.navigatingToNotifications = navigatingToNotifications;
function navigatingToArticles() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/articles/articles-page-list") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/articles/articles-page-list"),
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
function navigatingToVoicesMain() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/voices-main/voices-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/voices-main/voices-page"),
            context: null
        });
    }
}
exports.navigatingToVoicesMain = navigatingToVoicesMain;
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
function navigateToBrics() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/brics/brics") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/brics/brics"),
            context: null
        });
    }
}
exports.navigateToBrics = navigateToBrics;
function navigateToBusiness() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/business/business-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/business/business-list-page"),
            context: null
        });
    }
}
exports.navigateToBusiness = navigateToBusiness;
function navigateToDigitalEconomy() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/digitalEconomy/digitalEconomy-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/digitalEconomy/digitalEconomy-list-page"),
            context: null
        });
    }
}
exports.navigateToDigitalEconomy = navigateToDigitalEconomy;
function navigateToWater() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/water/water-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/water/water-list-page"),
            context: null
        });
    }
}
exports.navigateToWater = navigateToWater;
function navigateTest() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/test/test-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/test/test-page"),
            context: null
        });
    }
}
exports.navigateTest = navigateTest;
function navigateToClub() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/club/club-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/club/club-list-page"),
            context: null
        });
    }
}
exports.navigateToClub = navigateToClub;
function navigateToImpact() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/impact/impact-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/impact/impact-list-page"),
            context: null
        });
    }
}
exports.navigateToImpact = navigateToImpact;
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