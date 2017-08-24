import * as navigator from "../../common/navigator"
import * as gestures from "ui/gestures";
import { topmost } from "ui/frame"
import { grayTouch } from "../../common/effects";
import * as application from "application";
import * as applicationSettings from "application-settings";
import { Observable } from "data/observable";

class SidedrawerViewModel extends Observable {

}

export function onLoaded(args) {
    args.object.bindingContext = new SidedrawerViewModel();
}

export function tileTouch(args: gestures.TouchGestureEventData) {
    grayTouch(args);
}

function sideDrawer(): any {
    return topmost().currentPage.getViewById("side-drawer");
}

function closeDrawer() {
    var instance = sideDrawer();
    if (instance) {
        instance.closeDrawer();
    }
}

function toggleDrawerState() {
    var instance = sideDrawer();
    if (instance) {
        instance.toggleDrawerState();
    }
}

export function showSlideout(args) {
    toggleDrawerState();
}

export function tapHome(args) {
    closeDrawer();
    navigator.navigateToHome();
}

export function tapAbout(args) {
    closeDrawer();
    if (application.android) {
        setTimeout(() => navigator.navigateToAbout(), 600);
    } else {
        navigator.navigateToAbout()
    }
}
