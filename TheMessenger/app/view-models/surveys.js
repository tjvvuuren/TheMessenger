"use strict";
var serviceModule = require("../shared/service");
var viewModelBaseModule = require("../common/view-model-base");
var observableModule = require("data/observable");
var frame_1 = require("ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var SurveyItemData = (function (_super) {
    __extends(SurveyItemData, _super);
    function SurveyItemData(id, content, postdate, category, mediaurl) {
        _super.call(this);
        this.SurveyContent = content;
        this.ID = id;
        this.PostDate = postdate;
        this.Category = category;
        this.MediaUrl = mediaurl;
    }
    SurveyItemData.prototype.formatDate = function (date) {
        return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
    };
    SurveyItemData.prototype.formatToShortDate = function (date) {
        var strMonth = months[date.getMonth()];
        var strShortMonth = strMonth.substring(0, 3);
        return date.getDate() + " " + strShortMonth;
    };
    return SurveyItemData;
}(observableModule.Observable));
exports.SurveyItemData = SurveyItemData;
var SurveyListViewModel = (function (_super) {
    __extends(SurveyListViewModel, _super);
    function SurveyListViewModel(mode) {
        _super.call(this);
        this._Mode = mode;
        this._businesssurveys = new Array();
        this.getSurveysForCategory("DAILYPOLL");
    }
    Object.defineProperty(SurveyListViewModel.prototype, "Mode", {
        get: function () {
            return this._Mode;
        },
        set: function (value) {
            this._Mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyListViewModel.prototype, "Surveys", {
        get: function () {
            return this._Survey;
        },
        set: function (value) {
            if (this._Survey != value) {
                this._Survey = value;
                this.notifyPropertyChange("Survey", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyListViewModel.prototype, "Surveys", {
        get: function () {
            return this._surveys;
        },
        set: function (value) {
            if (this._surveys != value) {
                this._surveys = value;
                this.notifyPropertyChange("Surveys", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyListViewModel.prototype, "SurveySurveys", {
        get: function () {
            return this._businesssurveys;
        },
        set: function (value) {
            if (this._businesssurveys != value) {
                this._businesssurveys = value;
                this.notifyPropertyChange("surveys", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    SurveyListViewModel.prototype.onTap_DailypollMode = function (args) {
        this._Mode = "DAILYPOLL";
        this.getsurveysForCategory("DAILYPOLL");
    };
    SurveyListViewModel.prototype.onTap_SummarysMode = function (args) {
        this._Mode = "SUMMARY";
        this.getsurveysForCategory("SUMMARY");
    };
    
    SurveyListViewModel.prototype.onItemTap = function (args) {
        var index = args.index;
        //console.log(index);
        this.Survey = args.view.bindingContext;
        //console.log("Survey List onItemTap CurrentItem: " + this.Survey.Title);
        frame_1.topmost().navigate({
            moduleName: "views/dailyPoll/dailyPoll",
            animated: true,
            context: this.Survey
        });
    };
    SurveyListViewModel.prototype.getSurveysForCategory = function (category) {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getSurveysByCategory(category).then(function (data) {
            var surveys = new Array();
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].Title);
                surveys.push(new SurveyItemData(i, data[i].Title, data[i].Description, data[i].SurveyContent, data[i].PostDate, data[i].Category, data[i].Creator, data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.surveys = surveys;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    
    surveysListViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getSurveys().then(function (data) {
            var surveys = new Array();
            for (var i = 0; i < data.length; i++) {
                surveys.push(new surveysItemData(i,  data[i].SurveyContent, data[i].PostDate, data[i].Category,  data[i].MediaUrl));
            }
            _this.Mode = _this._Mode;
            _this.Surveys = surveys;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return SurveyListViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.SurveyListViewModel = SurveyListViewModel;
//# sourceMappingURL=surveys-view-model.js.map