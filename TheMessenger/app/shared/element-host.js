"use strict";
var viewModelBaseModule = require("../common/view-model-base");
var frame = require("ui/frame");
exports.navigatingToTravel = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/travel/travel-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/travel/travel-page",
            context: null
        });
    }
};
exports.navigatingToPartnering = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/partnering/partnering-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/partnering/partnering-page",
            context: null
        });
    }
};
exports.navigatingToMusic = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/music/music-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/music/music-page",
            context: null
        });
    }
};
exports.navigatingToHealth = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/health/health-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/health/health-page",
            context: null
        });
    }
};
exports.navigatingToFoodAndWine = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/foodandwine/foodandwine-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/foodandwine/foodandwine-page",
            context: null
        });
    }
};
exports.navigatingToFashion = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/fashion/fashion-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/fashion/fashion-page",
            context: null
        });
    }
};
exports.navigatingToEducation = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/education/education-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/education/education-page",
            context: null
        });
    }
};
exports.navigatingToBookReviews = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/bookreviews/bookreviews-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/bookreviews/bookreviews-page",
            context: null
        });
    }
};
exports.navigatingToArt = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/art/art-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/art/art-page",
            context: null
        });
    }
};
exports.navigatingToSports = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/sport/sport-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/sport/sport-page",
            context: null
        });
    }
};
exports.navigatingToProperty = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/property/property-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/property/property-page",
            context: null
        });
    }
};
exports.navigatingToMotoring = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/motoring/motoring-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/motoring/motoring-page",
            context: null
        });
    }
};
exports.navigatingToClassifieds = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/motoring/motoring-classifieds-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/motoring/motoring-classifieds-page",
            context: null
        });
    }
};
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
exports.navigatingToNews = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    if (strPageTitle.capitalize() == "FOODANDWINE") {
        fromArea = "FOOD &AMP; WINE";
        strPageTitle = "Food and Wine - News";
    }
    else if (strPageTitle.capitalize() == "BOOKREVIEWS") {
        fromArea = "BOOK REVIEWS";
        strPageTitle = "Book Reviews - News";
    }
    else {
        strPageTitle = strPageTitle.capitalize() + " - News";
        fromArea = fromArea.toUpperCase();
    }
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
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
};
exports.navigatingToReviews = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    if (strPageTitle.capitalize() == "CARS &AMP; COFFEE") {
        fromArea = "CARS &AMP; COFFEE";
        strPageTitle = "Cars and Coffee - Reviews";
    }
    else {
        strPageTitle = strPageTitle.capitalize() + " - Reviews";
        fromArea = fromArea.toUpperCase();
    }
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
    var navContext;
    navContext = {
        actionbarCss: strPageCss,
        pageTitle: strPageTitle,
        fromArea: fromArea
    };
    if (topmost.currentEntry.moduleName !== "views/reviews/reviews-page") {
        console.log("before navigate");
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/reviews/reviews-page",
            context: navContext
        });
    }
};
exports.navigatingToInnovation = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    strPageTitle = strPageTitle.capitalize() + " - Innovation";
    fromArea = fromArea.toUpperCase();
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
    var navContext;
    navContext = {
        actionbarCss: strPageCss,
        pageTitle: strPageTitle,
        fromArea: fromArea
    };
    if (topmost.currentEntry.moduleName !== "views/innovation/innovation-page") {
        console.log("before navigate");
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/innovation/innovation-page",
            context: navContext
        });
    }
};
exports.navigatingToSupercars = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    strPageTitle = strPageTitle.capitalize() + " - Supercars";
    fromArea = fromArea.toUpperCase();
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
    var navContext;
    navContext = {
        actionbarCss: strPageCss,
        pageTitle: strPageTitle,
        fromArea: fromArea
    };
    if (topmost.currentEntry.moduleName !== "views/supercars/supercars-page") {
        console.log("before navigate");
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/supercars/supercars-page",
            context: navContext
        });
    }
};
exports.navigatingToClassics = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    strPageTitle = strPageTitle.capitalize() + " - Classics";
    fromArea = fromArea.toUpperCase();
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
    var navContext;
    navContext = {
        actionbarCss: strPageCss,
        pageTitle: strPageTitle,
        fromArea: fromArea
    };
    if (topmost.currentEntry.moduleName !== "views/classics/classics-page") {
        console.log("before navigate");
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/classics/classics-page",
            context: navContext
        });
    }
};
exports.navigatingToCarsAndCoffee = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    strPageTitle = strPageTitle.capitalize() + " - Cars and Coffee";
    fromArea = fromArea.toUpperCase();
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
    var navContext;
    navContext = {
        actionbarCss: strPageCss,
        pageTitle: strPageTitle,
        fromArea: fromArea
    };
    if (topmost.currentEntry.moduleName !== "views/carsandcoffee/carsandcoffee-page") {
        console.log("before navigate");
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/carsandcoffee/carsandcoffee-page",
            context: navContext
        });
    }
};
exports.navigatingToVoices = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    strPageTitle = strPageTitle.capitalize() + " - Voices";
    fromArea = fromArea.toUpperCase();
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
    var navContext;
    navContext = {
        actionbarCss: strPageCss,
        pageTitle: strPageTitle,
        fromArea: fromArea
    };
    if (topmost.currentEntry.moduleName !== "views/voices/voices-page") {
        console.log("before navigate");
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/voices/voices-page",
            context: navContext
        });
    }
};
exports.navigatingToClassified = function () {
    var topmost = frame.topmost();
    var str = topmost.currentEntry.moduleName;
    var res = str.split("/");
    var strPageTitle = "";
    strPageTitle = res[1];
    var fromArea = "";
    fromArea = res[1];
    if (strPageTitle.capitalize() == "FOODANDWINE") {
        fromArea = "FOOD &AMP; WINE";
        strPageTitle = "Food and Wine - Classifieds";
    }
    else if (strPageTitle.capitalize() == "BOOKREVIEWS") {
        fromArea = "BOOK REVIEWS";
        strPageTitle = "Book Reviews - Classifieds";
    }
    else {
        strPageTitle = strPageTitle.capitalize() + " - Classifieds";
        fromArea = fromArea.toUpperCase();
    }
    var strPageCss = "";
    strPageCss = res[1];
    strPageCss = strPageCss + "-action-bar";
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
};
exports.navigatingToFandI = function () {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/motoring/motoring-FandI-page") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/motoring/motoring-FandI-page",
            context: null
        });
    }
};
var ElementHost = (function (_super) {
    __extends(ElementHost, _super);
    function ElementHost(pagetitle) {
        _super.call(this);
        this._PageTitle = pagetitle;
        this._DisplayTitle = pagetitle;
        this.SetButtonDisplayElements();
    }
    Object.defineProperty(ElementHost.prototype, "DisplayTitle", {
        get: function () {
            console.log(this._DisplayTitle);
            if (this._DisplayTitle == "FoodAndWine") {
                this._DisplayTitle = "Food and Wine";
            }
            else if (this._DisplayTitle == "BookReviews") {
                this._DisplayTitle = "Book Reviews";
            }
            return this._DisplayTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "PageTitle", {
        get: function () {
            return this._PageTitle;
        },
        enumerable: true,
        configurable: true
    });
    ElementHost.prototype.SetButtonDisplayElements = function () {
        switch (this._PageTitle) {
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
    };
    ElementHost.prototype.hideAll = function () {
    };
    ElementHost.prototype.setLifeStyleButtons = function () {
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
    };
    ElementHost.prototype.setVoicesButtons = function () {
        this._Newsletters = true;
        this._SocialMedia = true;
        this._TV = true;
        this._Surveys = true;
    };
    ElementHost.prototype.setOpportunitiesButtons = function () {
        this._Deals = true;
        this._Tenders = true;
        this._Greenhouse = true;
    };
    ElementHost.prototype.setSportButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setArtButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.seBookReviewsButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setEducationButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setFashionButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setFoodAndWineButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setHealthButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setMusicButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setPartneringButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setTravelButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setMotoringButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
        this._FandI = true;
        this._Supercars = true;
        this._CarsAndCoffee = true;
        this._Classics = true;
    };
    ElementHost.prototype.setPropertyButtons = function () {
        this._News = true;
        this._Innovation = true;
        this._Reviews = true;
        this._Voices = true;
        this._Classifieds = true;
    };
    ElementHost.prototype.setFandIButtons = function () {
        this._Compare = true;
        this._Finance = true;
        this._FinePrint = true;
        this._Insurance = true;
        this._Insure = true;
    };
    Object.defineProperty(ElementHost.prototype, "FoodandWine", {
        get: function () {
            if (this._FoodandWine) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Property", {
        get: function () {
            if (this._Property) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Motoring", {
        get: function () {
            if (this._Motoring) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Arts", {
        get: function () {
            if (this._Arts) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "BookReviews", {
        get: function () {
            if (this._BookReviews) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Education", {
        get: function () {
            if (this._Education) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Fashion", {
        get: function () {
            if (this._Fashion) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Health", {
        get: function () {
            if (this._Health) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Music", {
        get: function () {
            if (this._Music) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Partnering", {
        get: function () {
            if (this._Partnering) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Sport", {
        get: function () {
            if (this._Sport) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Travel", {
        get: function () {
            if (this._Travel) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Newsletters", {
        get: function () {
            if (this._Newsletters) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "SocialMedia", {
        get: function () {
            if (this._SocialMedia) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "TV", {
        get: function () {
            if (this._TV) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Surveys", {
        get: function () {
            if (this._Surveys) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Deals", {
        get: function () {
            if (this._Deals) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Tenders", {
        get: function () {
            if (this._Tenders) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Greenhouse", {
        get: function () {
            if (this._Greenhouse) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "News", {
        get: function () {
            if (this._News) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Innovation", {
        get: function () {
            if (this._Innovation) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Reviews", {
        get: function () {
            if (this._Reviews) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Voices", {
        get: function () {
            if (this._Voices) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Classifieds", {
        get: function () {
            if (this._Classifieds) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "FandI", {
        get: function () {
            if (this._FandI) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Compare", {
        get: function () {
            if (this._Compare) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Finance", {
        get: function () {
            if (this._Finance) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "FinePrint", {
        get: function () {
            if (this._FinePrint) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Insurance", {
        get: function () {
            if (this._Insurance) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Insure", {
        get: function () {
            if (this._Insure) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "CarsAndCoffee", {
        get: function () {
            if (this._CarsAndCoffee) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Classics", {
        get: function () {
            if (this._Classics) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "Supercars", {
        get: function () {
            if (this._Supercars) {
                return "visible";
            }
            else {
                return "collapsed";
            }
        },
        enumerable: true,
        configurable: true
    });
    return ElementHost;
}(viewModelBaseModule.ViewModelBase));
exports.ElementHost = ElementHost;
//# sourceMappingURL=element-host.js.map