import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
import * as frame from "ui/frame";

exports.navigatingToTravel= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/travel/travel-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/travel/travel-page",
                context: null
            });
        }
    }
exports.navigatingToPartnering= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/partnering/partnering-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/partnering/partnering-page",
                context: null
            });
        }
    }
    
exports.navigatingToMusic= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/music/music-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/music/music-page",
                context: null
            });
        }
    }
    
exports.navigatingToHealth= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/health/health-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/health/health-page",
                context: null
            });
        }
    }
    
exports.navigatingToFoodAndWine= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/foodandwine/foodandwine-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/foodandwine/foodandwine-page",
                context: null
            });
        }
    }
    
exports.navigatingToFashion= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/fashion/fashion-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/fashion/fashion-page",
                context: null
            });
        }
    }
    
exports.navigatingToEducation= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/education/education-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/education/education-page",
                context: null
            });
        }
    }
    
exports.navigatingToBookReviews= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/bookreviews/bookreviews-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/bookreviews/bookreviews-page",
                context: null
            });
        }
    }
    
exports.navigatingToArt= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/art/art-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/art/art-page",
                context: null
            });
        }
    }
exports.navigatingToSports= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/sport/sport-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/sport/sport-page",
                context: null
            });
        }
    }
exports.navigatingToProperty= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/property/property-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/property/property-page",
                context: null
            });
        }
    }

exports.navigatingToMotoring= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/motoring/motoring-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/motoring/motoring-page",
                context: null
            });
        }
    }

exports.navigatingToClassifieds= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/motoring/motoring-classifieds-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/motoring/motoring-classifieds-page",
                context: null
            });
        }
    }
    
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

exports.navigatingToNews= function() {
    var topmost = frame.topmost();
    
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");

    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];

    if(strPageTitle.capitalize() == "FOODANDWINE")
    {
        fromArea = "FOOD &AMP; WINE";
        strPageTitle = "Food and Wine - News";
    }else if(strPageTitle.capitalize() == "BOOKREVIEWS")
    {
        fromArea = "BOOK REVIEWS";
        strPageTitle = "Book Reviews - News";
    }else
    {
        strPageTitle = strPageTitle.capitalize()  + " - News";
        fromArea = fromArea.toUpperCase();
    }

    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss  + "-action-bar";

    var navContext;
    navContext = {
                    actionbarCss: strPageCss,
                    pageTitle: strPageTitle,
                    fromArea: fromArea
                };

    if (topmost.currentEntry.moduleName !== "views/news/news-page") {
        console.log("before navigate");
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/news/news-page",
            context: navContext
        });
    }
}
exports.navigatingToClassified= function() {
    var topmost = frame.topmost();
    
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");

    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];

    if(strPageTitle.capitalize() == "FOODANDWINE")
    {
        fromArea = "FOOD &AMP; WINE";
        strPageTitle = "Food and Wine - Classifieds";
    }else if(strPageTitle.capitalize() == "BOOKREVIEWS")
    {
        fromArea = "BOOK REVIEWS";
        strPageTitle = "Book Reviews - Classifieds";
    }else
    {
        strPageTitle = strPageTitle.capitalize()  + " - Classifieds";
        fromArea = fromArea.toUpperCase();
    }

    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss  + "-action-bar";

    var navContext;
    navContext = {
                    actionbarCss: strPageCss,
                    pageTitle: strPageTitle,
                    fromArea: fromArea
                };

    if (topmost.currentEntry.moduleName !== "views/classifieds/classifieds-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/classifieds/classifieds-page",
            context: navContext
        });
    }
} 
exports.navigatingToFandI= function() {
        var topmost = frame.topmost();
        if (topmost.currentEntry.moduleName !== "views/motoring/motoring-FandI-page") {
            frame.topmost().navigate({
                animated: true,
                moduleName: "views/motoring/motoring-FandI-page",
                context: null
            });
        }
    }


export class ElementHost extends viewModelBaseModule.ViewModelBase 
{

    private _PageTitle: string;
    private _DisplayTitle: string;
    private _FoodandWine: boolean;
    private _Property: boolean;
    private _Motoring: boolean;
    private _Arts: boolean;
    private _BookReviews: boolean;
    private _Education: boolean;
    private _Fashion: boolean;
    private _Health: boolean;
    private _Music: boolean;
    private _Partnering: boolean;
    private _Sport: boolean;
    private _Travel: boolean;

    private _Newsletters: boolean;
    private _SocialMedia: boolean;
    private _TV: boolean;
    private _Surveys: boolean;

    private _Deals: boolean;
    private _Tenders: boolean;
    private _Greenhouse: boolean;

    private _News: boolean;
    private _Innovation: boolean;
    private _Reviews: boolean;
    private _Voices: boolean;
    private _Classifieds: boolean;
    private _FandI: boolean;

    private _Compare: boolean;
private _Finance: boolean;
private _FinePrint: boolean;
private _Insurance: boolean;
private _Insure: boolean;
    


    constructor(pagetitle:string) {
        super();
        this._PageTitle = pagetitle;
        this._DisplayTitle = pagetitle;
        this.SetButtonDisplayElements();
    }

    get DisplayTitle(): string {
        console.log(this._DisplayTitle);
        if(this._DisplayTitle == "FoodAndWine")
        {
            this._DisplayTitle = "Food and Wine";
        }
        else if(this._DisplayTitle == "BookReviews")
        {
            this._DisplayTitle = "Book Reviews";
        }
        return this._DisplayTitle;
    }

    get PageTitle(): string {
        return this._PageTitle;
    }

    private SetButtonDisplayElements()
    {
        switch(this._PageTitle) {
            case "Lifestyle":
                this.setLifeStyleButtons();
                break;
            case "Voices":
                this.setVoicesButtons();
                break;
            case "Opportunities":
                this.setOpportunitiesButtons();
                break;
            case "Sport":
                this.setSportButtons();
                break;
            case "Motoring":
                this.setMotoringButtons();
                break;
            case "Property":
                this.setPropertyButtons();
                break;
            case "FandI":
                this.setFandIButtons();
                break;
            case "Art":
                this.setArtButtons();
                break;
            case "BookReviews":
                this.seBookReviewsButtons();
                break;
            case "Education":
                this.setEducationButtons();
                break;
            case "Fashion":
                this.setFashionButtons();
                break;
            case "FoodAndWine":
                this.setFoodAndWineButtons();
                break;
            case "Health":
                this.setHealthButtons();
                break;
            case "Music":
                this.setMusicButtons();
                break;
            case "Partnering":
                this.setPartneringButtons();
                break;
            case "Travel":
                this.setTravelButtons();
                break;
            default:
                this.hideAll();
        }
    }
    private hideAll()
    {

    }
    private setLifeStyleButtons()
    {
        this._FoodandWine = true;
        this._Property = true;
        this._Motoring = true;
        this._Arts = true;
        this._BookReviews = true;
        this._Education = true;
        this._Fashion = true;
        this._Health = true;
        this._Music = true;
        this._Partnering = true;
        this._Sport = true;
        this._Travel = true;
    }

    
    private setVoicesButtons()
    {
        this._Newsletters = true;
        this._SocialMedia = true;
        this._TV = true;
        this._Surveys = true;
    }
    private setOpportunitiesButtons()
    {
        this._Deals = true;
        this._Tenders = true;
        this._Greenhouse = true;
    }
    private setSportButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
    private setArtButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private seBookReviewsButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private setEducationButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private setFashionButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private setFoodAndWineButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private setHealthButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private setMusicButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private setPartneringButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
                private setTravelButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
    private setMotoringButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
        this._FandI = true;
    }
    private setPropertyButtons()
    {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    }
    private setFandIButtons()
    {
        this._Compare = true;
this._Finance = true;
this._FinePrint = true;
this._Insurance = true;
this._Insure = true;
    }
    get FoodandWine(): string {
        if(this._FoodandWine)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Property(): string {
        if(this._Property)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Motoring(): string {
        if(this._Motoring)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Arts(): string {
            if(this._Arts)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get BookReviews(): string {
            if(this._BookReviews)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get Education(): string {
            if(this._Education)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get Fashion(): string {
            if(this._Fashion)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get Health(): string {
            if(this._Health)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get Music(): string {
            if(this._Music)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get Partnering(): string {
            if(this._Partnering)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get Sport(): string {
            if(this._Sport)
            {
                return "visible";
            }else
            {
                return "collapsed";
            }
        }
    get Travel(): string {
        if(this._Travel)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }

    get Newsletters(): string {
        if(this._Newsletters)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get SocialMedia(): string {
        if(this._SocialMedia)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get TV(): string {
        if(this._TV)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Surveys(): string {
        if(this._Surveys)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }



    get Deals(): string {
        if(this._Deals)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Tenders(): string {
        if(this._Tenders)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Greenhouse(): string {
        if(this._Greenhouse)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }

    get News(): string {
        if(this._News)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Innovation(): string {
        if(this._Innovation)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Reviews(): string {
        if(this._Reviews)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Voices(): string {
        if(this._Voices)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get Classifieds(): string {
        if(this._Classifieds)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
    get FandI(): string {
        if(this._FandI)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }

    get Compare(): string {
        if(this._Compare)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
get Finance(): string {
        if(this._Finance)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
get FinePrint(): string {
        if(this._FinePrint)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
get Insurance(): string {
        if(this._Insurance)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }
get Insure(): string {
        if(this._Insure)
        {
            return "visible";
        }else
        {
            return "collapsed";
        }
    }

    }