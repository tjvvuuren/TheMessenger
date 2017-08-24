"use strict";
var navigator = require("../../common/navigator");
var frame_1 = require("ui/frame");
var effects_1 = require("../../common/effects");
var application = require("application");
var observable_1 = require("data/observable");
var SidedrawerViewModel = (function (_super) {
    __extends(SidedrawerViewModel, _super);
    function SidedrawerViewModel() {
        _super.apply(this, arguments);
    }
    return SidedrawerViewModel;
}(observable_1.Observable));
function onLoaded(args) {
    args.object.bindingContext = new SidedrawerViewModel();
}
exports.onLoaded = onLoaded;
function tileTouch(args) {
    effects_1.grayTouch(args);
}
exports.tileTouch = tileTouch;
function sideDrawer() {
    return frame_1.topmost().currentPage.getViewById("side-drawer");
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
function showSlideout(args) {
    toggleDrawerState();
}
exports.showSlideout = showSlideout;
function tapHome(args) {
    closeDrawer();
    navigator.navigateToHome();
}
exports.tapHome = tapHome;
function tapAbout(args) {
    closeDrawer();
    if (application.android) {
        setTimeout(function () { return navigator.navigateToAbout(); }, 600);
    }
    else {
        navigator.navigateToAbout();
    }
}
exports.tapAbout = tapAbout;
//# sourceMappingURL=side-drawer.js.map