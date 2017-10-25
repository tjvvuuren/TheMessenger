import * as frame from "ui/frame";
import * as viewModule from "ui/core/view";
import * as platform from "platform";

var isIOS: boolean = platform.device.os === platform.platformNames.ios;
var isAndroid: boolean = platform.device.os === platform.platformNames.android;

import viewNotificationsViewModel = require("../view-models/notifications-view-model");

function traceNavigateTo(to: string, context?: string): string {
    var eventText = "Navigate to: " + to + (context ? " (" + context + ")" : "");
    console.log("Track: " + eventText);
    return to;
}

export function navigateToHome() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "main-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("main-page"),
            context: null
        });
    }
}
export function navigatingToProfile() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/profile/profile-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/profile/profile-page"),
            context: null
        });
    }
}
export function navigatingToNotifications(args) {
    var topmost = frame.topmost();
    
    if (topmost.currentEntry.moduleName !== "views/notifications/notifications-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/notifications/notifications-page"),
            context:  null //new viewNotificationsViewModel.NotificationsViewModel()
            //context: new viewNotificationsViewModel.NotificationsViewModel()
        });
    }
}
export function navigatingToArticles() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/articles/articles-page-list") {
        frame.topmost().navigate({
            animated: true,

            moduleName: traceNavigateTo("views/articles/articles-page-list"),
            context: null
        });
    }
}
export function navigatingToEvents() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/events/events-page-list") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/events/events-page-list"),
            context: null
        });
    }
}
export function navigatingToLifestyle() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/lifestyle/lifestyle-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/lifestyle/lifestyle-page"),
            context: null
        });
    }
}
export function navigatingToMarket() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/market/market-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/market/market-page"),
            context: null
        });
    }
}
export function navigatingToOppertunities() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/oppertunities/oppertunities-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/oppertunities/oppertunities-page"),
            context: null
        });
    }
}
export function navigatingToVoicesMain() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/voices-main/voices-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/voices-main/voices-page"),
            context: null
        });
    }
}
export function navigatingToContactCentre() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/contactcentre/contactcentre-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/contactcentre/contactcentre-page"),
            context: null
        });
    }
}
export function navigatingToBrics() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/brics/brics") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/brics/brics"),
            context: null
        });
    }
}
export function navigatingToBusiness() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/business/business-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/business/business-list-page"),
            context: null
        });
    }
}
export function navigatingToDigitalEconomy() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/digitalEconomy/digitalEconomy-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/digitalEconomy/digitalEconomy-list-page"),
            context: null
        });
    }
}
export function navigatingToWater() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/water/water-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/water/water-list-page"),
            context: null
        });
    }
}
export function navigatingToTest() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/test/test-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/test/test-page"),
            context: null
        });
    }
}
export function navigatingToClub() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/club/club-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/club/club-list-page"),
            context: null
        });
    }
}
export function navigatingToImpact() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/impact/impact-list-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/impact/impact-list-page"),
            context: null
        });
    }
}
export function navigatingToAbout() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/about/about") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/about/about"),
            context: null
        });
    }
}
export function navigateBack() {
    frame.goBack();
}
