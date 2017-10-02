import platformModule = require("platform");
import appModule = require("application");
import observableModule = require("data/observable");

import enumsModule = require("ui/enums");
import dialogsModule = require("ui/dialogs");
import connectivity = require("connectivity");

import * as navigator from "./navigator";
import drawerModule = require("nativescript-telerik-ui/sidedrawer");
//import frame = require("tns-core-modules/ui/frame");
import frame = require("ui/frame");

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var shortmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export class ViewModelBase extends observableModule.Observable {
    private _loadingCount: number;
    private _isLoading: boolean;

    constructor() {
        super();

        this._loadingCount = 0;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    set isLoading(value: boolean) {
        if (this._isLoading != value) {
            this._isLoading = value;
            this.notifyPropertyChange("isLoading", value);
        }
    }

    get androidVisibility(): string {
        if (platformModule.device.os === platformModule.platformNames.android) {
            return enumsModule.Visibility.visible;
        }

        return enumsModule.Visibility.collapsed;
    }

    get iosVisibility(): string {
        if (platformModule.device.os === platformModule.platformNames.ios) {
            return enumsModule.Visibility.visible;
        }

        return enumsModule.Visibility.collapsed;
    }

    //get strings(): any {

    beginLoading(): boolean {
        if (connectivity.getConnectionType() === connectivity.connectionType.none){
            this.showError("No internet connection.");
            return false;
        }

        if (!this._loadingCount) {
            this.isLoading = true;
        }

        this._loadingCount++;
        return true;
    }

    endLoading() {
        if (this._loadingCount > 0) {
            this._loadingCount--;
            if (!this._loadingCount) {
                this.isLoading = false;
            }
        }
    }
    
    formatDate(date: Date): string {
        return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
    }
    formatToShortDate(date: Date): string {
        var strMonth = months[date.getMonth()];
        var strShortMonth = strMonth.substring(0,3); 
        return date.getDate() + " " + strShortMonth;
    }

    showError(error: string) {
        dialogsModule.alert({ title: "Error", message: error, okButtonText: "Close" });
    }

    showInfo(message: string) {
        dialogsModule.alert({ title: "Info", message: message, okButtonText: "OK" });
    }

    toggleDrawerState() {
        //console.log("toggleDrawerState");

        this.setDrawerTransition(new drawerModule.PushTransition());
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frame.topmost().getViewById("sideDrawer");
        sideDrawer.toggleDrawerState();
    }

    setDrawerTransition(transition: drawerModule.DrawerTransitionBase) {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frame.topmost().getViewById("sideDrawer");
        sideDrawer.drawerTransition = transition;
    }

    navigateToHome(args) {
	    //console.log("navigatingToHome");
	    navigator.navigateToHome();
    }

    navigateToNotifications(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToNotifications(args);
    }

    navigateToProfile(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToProfile();
    }

    navigateToArticles(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToArticles();
    }

    navigateToLifestyle(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToLifestyle();
    }

    navigatingToVoicesMain(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToVoicesMain();
    }

    navigateToEvents(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToEvents();
    }

    navigateToOppertunities(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToOppertunities();
    }

    navigateToMarket(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToMarket();
    }

    navigateToContactCentre(args) {
	    //console.log("navigatingToHome");
	    navigator.navigatingToContactCentre();
    }

    

}
var timeDiff = function (date1, date2) {
        var a = new Date(date1).getTime(),
            b = new Date(date2).getTime(),
            diff = {};

        diff.milliseconds = a > b ? a % b : b % a;
        diff.seconds = diff.milliseconds / 1000;
        diff.minutes = diff.seconds / 60;
        diff.hours = diff.minutes / 60;
        diff.days = diff.hours / 24;
        diff.weeks = diff.days / 7;

        return diff;
    }

var dateConverter = function(value, format) {
    var a = new Date(value).getTime(),
    b = Date.now(),// new Date(date2).getTime(),
    diff = {};
    //console.log(new Date(value));

    diff.milliseconds = a > b ? a % b : b % a;
    diff.seconds = diff.milliseconds / 1000;
    diff.minutes = diff.seconds / 60;
    diff.hours = diff.minutes / 60;
    diff.days = diff.hours / 24;
    diff.weeks = diff.days / 7;

    //var result = Math.round(diff.days);
    var returnVal = "";
    if(Math.round(diff.weeks) == 0)
    {
        if(Math.round(diff.days) == 0)
        {
            if(Math.round(diff.hours) == 0)
            {
                var result = Math.round(diff.minutes);
                returnVal = result + " mins ago";
                if(result == 1)
                {
                    returnVal = result + " min ago";
                }
            }else
            {
                var result = Math.round(diff.hours);
                returnVal = result + " hrs ago";
                if(result == 1)
                {
                    returnVal = result + " hr ago";
                }
            }
            
        }else{
            var result = Math.round(diff.days);
            returnVal = result + " days ago";
            if(result == 1)
            {
                returnVal = result + " day ago";
            }    
        }   
    }else{
        var result = Math.round(diff.weeks);
        returnVal = result + " weeks ago";
        if(result == 1)
        {
            returnVal = result + " week ago";
        }
        //.getMonth();
        if(result > 4)
        {
            //console.log("SHOW DATE");
            var intMonth = new Date(value).getMonth();
            var strMonth = shortmonths[intMonth-1];
            var intDay = new Date(value).getDate();

            returnVal = intDay + " " + strMonth;
        }
    }
    return returnVal;
};

appModule.resources["dateConverter"] = dateConverter;
appModule.resources["dateFormat"] = "DD.MM.YYYY";