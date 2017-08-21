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

            moduleName: "views/articles/articles-page-list",
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
export function navigatingToVoices() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/voices/voices-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: traceNavigateTo("views/voices/voices-page"),
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
export function navigateToAbout() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/about/about") {
        frame.topmost().navigate(traceNavigateTo("views/about/about"));
    }
}
export function navigateBack() {
    frame.goBack();
}
