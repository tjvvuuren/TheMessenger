"use strict";
var serviceModule = require("../shared/service");
var viewModelBaseModule = require("../common/view-model-base");
var observableModule = require("data/observable");
var frame_1 = require("ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var NewsItemData = (function (_super) {
    __extends(NewsItemData, _super);
    function NewsItemData(id, title, description, content, postdate, category, creator, actionbarcss, pagetitle, fromarea, mediaurl) {
        _super.call(this);
        this.Title = title;
        this.NewsContent = content;
        this.Description = description;
        this.ID = id;
        this.PostDate = postdate;
        this.Category = category;
        this.Creator = creator;
        this.ActionbarCss = actionbarcss;
        this.PageTitle = pagetitle;
        this.FromArea = fromarea;
        this.MediaUrl = mediaurl;
    }
    Object.defineProperty(NewsItemData.prototype, "ActionbarCss", {
        get: function () {
            return this.actionbarCss;
        },
        set: function (value) {
            //this._actionbarCss = value; 
            if (this.actionbarCss != value) {
                this.actionbarCss = value;
                this.notifyPropertyChange("ActionbarCss", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsItemData.prototype, "PageTitle", {
        get: function () {
            return this.pageTitle;
        },
        set: function (value) {
            //this._pageTitle = value; 
            if (this.pageTitle != value) {
                this.pageTitle = value;
                this.notifyPropertyChange("PageTitle", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsItemData.prototype, "FromArea", {
        get: function () {
            return this.fromArea;
        },
        set: function (value) {
            //this._fromArea = value; 
            if (this.fromArea != value) {
                this.fromArea = value;
                this.notifyPropertyChange("FromArea", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    NewsItemData.prototype.formatDate = function (date) {
        return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
    };
    NewsItemData.prototype.formatToShortDate = function (date) {
        var strMonth = months[date.getMonth()];
        var strShortMonth = strMonth.substring(0, 3);
        return date.getDate() + " " + strShortMonth;
    };
    return NewsItemData;
}(observableModule.Observable));
exports.NewsItemData = NewsItemData;
var CategoriesData = (function (_super) {
    __extends(CategoriesData, _super);
    function CategoriesData(id, postarea, categoryname) {
        _super.call(this);
        this.PostArea = postarea;
        this.CategoryName = categoryname;
    }
    return CategoriesData;
}(observableModule.Observable));
exports.CategoriesData = CategoriesData;
var NewsListViewModel = (function (_super) {
    __extends(NewsListViewModel, _super);
    function NewsListViewModel(mode, postarea, actionbarcss, pagetitle, fromarea) {
        _super.call(this);
        this._Mode = mode;
        this._PostArea = postarea;
        this._actionbarCss = actionbarcss;
        this._pageTitle = pagetitle;
        this._fromArea = fromarea;
        if (mode == "MOTORING") {
            this.getNewsFeedsByCategoryAndPostArea(mode, postarea);
        }
        else {
            this.getNewsFeedsForCategory(mode);
        }
    }
    Object.defineProperty(NewsListViewModel.prototype, "ActionbarCss", {
        get: function () {
            return this._actionbarCss;
        },
        set: function (value) {
            //this._actionbarCss = value; 
            if (this._actionbarCss != value) {
                this._actionbarCss = value;
                this.notifyPropertyChange("ActionbarCss", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsListViewModel.prototype, "PageTitle", {
        get: function () {
            return this._pageTitle;
        },
        set: function (value) {
            //this._pageTitle = value; 
            if (this._pageTitle != value) {
                this._pageTitle = value;
                this.notifyPropertyChange("PageTitle", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsListViewModel.prototype, "FromArea", {
        get: function () {
            return this._fromArea;
        },
        set: function (value) {
            //this._fromArea = value; 
            if (this._fromArea != value) {
                this._fromArea = value;
                this.notifyPropertyChange("FromArea", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsListViewModel.prototype, "Mode", {
        get: function () {
            return this._Mode;
        },
        set: function (value) {
            //this._Mode = value; 
            if (this._Mode != value) {
                this._Mode = value;
                this.notifyPropertyChange("Mode", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsListViewModel.prototype, "PostArea", {
        get: function () {
            return this._PostArea;
        },
        set: function (value) {
            //this._Mode = value; 
            if (this._PostArea != value) {
                this._PostArea = value;
                this.notifyPropertyChange("PostArea", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsListViewModel.prototype, "Newsfeed", {
        get: function () {
            return this._newsfeed;
        },
        set: function (value) {
            if (this._newsfeed != value) {
                this._newsfeed = value;
                this.notifyPropertyChange("Newsfeed", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsListViewModel.prototype, "AreaCategories", {
        get: function () {
            return this._areaCategories;
        },
        set: function (value) {
            if (this._areaCategories != value) {
                this._areaCategories = value;
                this.notifyPropertyChange("AreaCategories", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsListViewModel.prototype, "Newsfeeds", {
        get: function () {
            return this._newsfeeds;
        },
        set: function (value) {
            if (this._newsfeeds != value) {
                this._newsfeeds = value;
                this.notifyPropertyChange("Newsfeeds", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    NewsListViewModel.prototype.onItemTap = function (args) {
        var index = args.index;
        //console.log(index);
        this.Newsfeed = args.view.bindingContext;
        //this.Newsfeed.ActionbarCss = this.ActionbarCss;
        //this.Newsfeed.PageTitle = this.PageTitle + " - Detail";
        //this.Newsfeed.FromArea = this.FromArea;
        console.log("NewsFeed List onItemTap CurrentItem: " + this.Newsfeed.PageTitle);
        frame_1.topmost().navigate({
            moduleName: "views/reviews/reviews-detail-page",
            animated: true,
            context: this.Newsfeed
        });
    };
    NewsListViewModel.prototype.getAreaCategories = function (area) {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getCategoriesByArea(area).then(function (data) {
            var areaCategories = new Array();
            for (var i = 0; i < data.length; i++) {
                areaCategories.push(new CategoriesData(i, data[i].PostArea, data[i].CategoryName));
            }
            _this.AreaCategories = areaCategories;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    NewsListViewModel.prototype.getNewsFeedsByCategoryAndPostArea = function (category, postarea) {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getNewsFeedsByCategoryAndPostArea(category, postarea).then(function (data) {
            var newsfeeds;
            newsfeeds = new Array();
            for (var i = 0; i < data.length; i++) {
                newsfeeds.push(new NewsItemData(i, data[i].Title, data[i].Description, data[i].NewsContent, data[i].PostDate, data[i].Category, data[i].Creator, _this.ActionbarCss, _this.PageTitle, _this.FromArea, data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.Newsfeeds = newsfeeds;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    NewsListViewModel.prototype.getNewsFeedsForCategory = function (category) {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getNewsFeedsByCategory(category).then(function (data) {
            var newsfeeds = new Array();
            for (var i = 0; i < data.length; i++) {
                newsfeeds.push(new NewsItemData(i, data[i].Title, data[i].Description, data[i].NewsContent, data[i].PostDate, data[i].Category, data[i].Creator, _this.ActionbarCss, _this.PageTitle, _this.FromArea, data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.Newsfeeds = newsfeeds;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    NewsListViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getNewsFeeds().then(function (data) {
            var newsfeeds = new Array();
            for (var i = 0; i < data.length; i++) {
                newsfeeds.push(new NewsItemData(i, data[i].Title, data[i].Description, data[i].NewsContent, data[i].PostDate, data[i].Category, data[i].Creator, _this.ActionbarCss, _this.PageTitle, _this.FromArea, data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.Newsfeeds = newsfeeds;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return NewsListViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.NewsListViewModel = NewsListViewModel;
//# sourceMappingURL=news-view-model.js.map