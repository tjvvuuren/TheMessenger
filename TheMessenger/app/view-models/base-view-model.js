"use strict";
var serviceModule = require("../shared/service");
var viewModelBaseModule = require("../common/view-model-base");
var observableModule = require("data/observable");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
    }
    Object.defineProperty(ViewModel.prototype, "Elements", {
        get: function () {
            return this._elements;
        },
        set: function (value) {
            if (this._elements != value) {
                this._elements = value;
                this.notifyPropertyChange("Elements", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.geElements = function (area) {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getCategoriesByArea(area).then(function (data) {
            var elements = new Array();
            for (var i = 0; i < data.length; i++) {
                elements.push(new ApplicationElementData(i, data[i].Parent, data[i].ElementName, data[i].ElementNav, data[i].ElementDisplayText, data[i].ElementOrder, data[i].PageTitle, data[i].PageCSS, data[i].Visible, data[i].Enabled, data[i].Animated, data[i].RequiresAuth));
            }
            _this.Elements = elements;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return ViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.ViewModel = ViewModel;
var ApplicationElementData = (function (_super) {
    __extends(ApplicationElementData, _super);
    function ApplicationElementData(id, parent, elementname, elementnav, elementdisplaytext, elementorder, pagetitle, pagecss, visible, enabled, animated, requiresauth) {
        _super.call(this);
        this.Parent = parent;
        this.ElementName = elementname;
        this.ElementNav = elementnav;
        this.ElementDisplayText = elementdisplaytext;
        this.ElementOrder = elementorder;
        this.PageTitle = pagetitle;
        this.PageCSS = pagecss;
        this.Visible = visible;
        this.Enabled = enabled;
        this.Animated = animated;
        this.RequiresAuth = requiresauth;
    }
    return ApplicationElementData;
}(observableModule.Observable));
exports.ApplicationElementData = ApplicationElementData;
//# sourceMappingURL=base-view-model.js.map