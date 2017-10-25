"use strict";
var serviceModule = require("../shared/service");
var viewModelBaseModule = require("../common/view-model-base");
var observableModule = require("data/observable");
var frame_1 = require("ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ArticleItemData = (function (_super) {
    __extends(ArticleItemData, _super);
    function ArticleItemData(id, title, description, content, postdate, category, creator, mediaurl) {
        _super.call(this);
        this.Title = title;
        this.ArticleContent = content;
        this.Description = description;
        this.ID = id;
        this.PostDate = postdate;
        this.Category = category;
        this.Creator = creator;
        this.MediaUrl = mediaurl;
    }
    ArticleItemData.prototype.formatDate = function (date) {
        return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
    };
    ArticleItemData.prototype.formatToShortDate = function (date) {
        var strMonth = months[date.getMonth()];
        var strShortMonth = strMonth.substring(0, 3);
        return date.getDate() + " " + strShortMonth;
    };
    return ArticleItemData;
}(observableModule.Observable));
exports.ArticleItemData = ArticleItemData;
var ArticleListViewModel = (function (_super) {
    __extends(ArticleListViewModel, _super);
    function ArticleListViewModel(mode) {
        _super.call(this);
        this._Mode = mode;
        this._bricsArticles = new Array();
        this.getArticlesForCategory("BRICS");
    }
    Object.defineProperty(ArticleListViewModel.prototype, "Mode", {
        get: function () {
            return this._Mode;
        },
        set: function (value) {
            this._Mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleListViewModel.prototype, "Article", {
        get: function () {
            return this._article;
        },
        set: function (value) {
            if (this._article != value) {
                this._article = value;
                this.notifyPropertyChange("Article", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleListViewModel.prototype, "Articles", {
        get: function () {
            return this._articles;
        },
        set: function (value) {
            if (this._articles != value) {
                this._articles = value;
                this.notifyPropertyChange("Articles", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ArticleListViewModel.prototype.onTap_BricsMode = function (args) {
        this._Mode = "BRICS";
        this.getArticlesForCategory("BRICS");
    };
    ArticleListViewModel.prototype.onTap_BrexitMode = function (args) {
        this._Mode = "BREXIT";
        this.getArticlesForCategory("BREXIT");
    };
    ArticleListViewModel.prototype.onItemTap = function (args) {
        var index = args.index;
        //console.log(index);
        this.Article = args.view.bindingContext;
        //console.log("Article List onItemTap CurrentItem: " + this.Article.Title);
        frame_1.topmost().navigate({
            moduleName: "views/articles/articles-detail-page",
            animated: true,
            context: this.Article
        });
    };
    ArticleListViewModel.prototype.getCombinedArticles = function () {
        var _this = this;
        var categories = [{ value: "BRICS" }, { value: "BREXIT" }];
        if (!this.beginLoading())
            return;
        serviceModule.service.getCombinedArticles(categories).then(function (data) {
            var articles = new Array();
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].Title);
                articles.push(new ArticleItemData(i, data[i].Title, data[i].Description, data[i].ArticleContent, data[i].PostDate, data[i].Category, data[i].Creator, data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.Articles = articles;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    ArticleListViewModel.prototype.getArticlesForCategory = function (category) {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getArticlesByCategory2(category).then(function (data) {
            var articles = new Array();
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].Title);
                articles.push(new ArticleItemData(i, data[i].Title, data[i].Description, data[i].ArticleContent, data[i].PostDate, data[i].Category, data[i].Creator, data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.Articles = articles;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    ArticleListViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getArticles().then(function (data) {
            var articles = new Array();
            for (var i = 0; i < data.length; i++) {
                articles.push(new ArticleItemData(i, data[i].Title, data[i].Description, data[i].ArticleContent, data[i].PostDate, data[i].Category, data[i].Creator, data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.Articles = articles;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return ArticleListViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.ArticleListViewModel = ArticleListViewModel;
//# sourceMappingURL=brics-view-model.js.map