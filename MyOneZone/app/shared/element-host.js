"use strict";
var serviceModule = require("../common/service");
var viewModelBaseModule = require("../common/view-model-base");
var constants = require("../common/constants");
var observableModule = require("data/observable");
var frame = require("ui/frame");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var ElementHostItem = (function (_super) {
    __extends(ElementHostItem, _super);
    function ElementHostItem(id, parentID, uIDisplayID, hostCategoryID, title, fontIconID, navigationLink, navigationContext, actionBarCSS, headerImage, roleID, bannerImage) {
        _super.call(this);
        //navigationContext = { 'imgButtonSrc': '~/images/SABPP_Button.png' };
        this.Id = id;
        this.ParentID = parentID;
        this.UIDisplayID = uIDisplayID;
        this.HostCategoryID = hostCategoryID;
        this.Title = title;
        this.FontIconID = fontIconID;
        this.NavigationLink = navigationLink;
        this.ActionBarCSS = actionBarCSS;
        this.HeaderImage = headerImage;
        this.RoleID = roleID;
        this.BannerImage = bannerImage;
        this.NavigationContext = JSON.stringify(navigationContext);
        if (JSON.stringify(navigationContext) != "") {
            this.NavigationObject = JSON.parse(this.NavigationContext);
            console.log("JSON.stringify(this.NavigationObject): " + JSON.stringify(this.NavigationObject));
        }
    }
    return ElementHostItem;
}(observableModule.Observable));
exports.ElementHostItem = ElementHostItem;
var ElementHost = (function (_super) {
    __extends(ElementHost, _super);
    function ElementHost(elementItem) {
        _super.call(this);
        console.log("GO");
        if (elementItem) {
            this._ElementItem = elementItem;
            //console.log("constructor(elementItem: ElementHostItem) - " + JSON.stringify(elementItem));
            this._ElementItems = this.SetButtonDisplayElements();
        }
    }
    Object.defineProperty(ElementHost.prototype, "ElementItem", {
        get: function () {
            return this._ElementItem;
        },
        set: function (value) {
            if (this._ElementItem != value) {
                this._ElementItem = value;
                this.notifyPropertyChange("ElementItem", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementHost.prototype, "ElementItems", {
        get: function () {
            return this._ElementItems;
        },
        set: function (value) {
            if (this._ElementItems != value) {
                this._ElementItems = value;
                this.notifyPropertyChange("ElementItems", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ElementHost.prototype.SetButtonDisplayElements = function () {
        var elementId = this.ElementItem.Id;
        return this.getElementsForParent(elementId);
    };
    ElementHost.prototype.getElementsForParent = function (parentId) {
        var _this = this;
        if (!this.beginLoading())
            return;
        //console.log("CALL DB");
        serviceModule.service.getChildElements(parentId).then(function (data) {
            console.log("serviceModule.service.getChildElements - data.length:" + data.length);
            var elements = new observable_array_1.ObservableArray();
            for (var i = 0; i < data.length; i++) {
                //console.log("FontIcon: " + data[i].FontIcon + " - " + String.fromCharCode(constants.ELEMENT_ICONS.IconElement[data[i].FontIcon]));
                var naContext;
                if (parentId == "A740A453-074E-4E97-9ECD-6275BAE62803") {
                    naContext = { "imgButtonSrc": "~/images/SABPP_Button.png", "fontButtonVisibility": "collapsed", "imgButtonVisibility": "visible" };
                }
                else {
                    naContext = { "imgButtonSrc": "~/images/SABPP_Button.png", "fontButtonVisibility": "visible", "imgButtonVisibility": "collapsed" };
                }
                elements.push(new ElementHostItem(data[i].Id, data[i].ParentID, data[i].UIDisplayID, data[i].HostCategoryID, data[i].Title, String.fromCharCode(constants.ELEMENT_ICONS.IconElement[data[i].FontIcon]), data[i].NavigationLink, 
                //data[i].NavigationContext,
                naContext, data[i].ActionBarCSS, data[i].HeaderImage, data[i].RoleID, data[i].BannerImage));
            }
            _this.ElementItems = elements;
            _this.endLoading();
            return elements;
        }, function (error) {
            _this.endLoading();
        });
    };
    ElementHost.prototype.hideAll = function () {
    };
    return ElementHost;
}(viewModelBaseModule.ViewModelBase));
exports.ElementHost = ElementHost;
function buttonTap(args) {
    var item = args.object.bindingContext;
    if (item) {
        var elm = new ElementHostItem(item.Id, item.ParentID, item.UIDisplayID, item.HostCategoryID, item.Title, item.FontIconID, item.NavigationLink, item.NavigationContext, item.ActionBarCSS, item.HeaderImage, item.RoleID, item.BannerImage);
        var topmost = frame.topmost();
        var navContext;
        navContext = {
            pageTitle: elm.Title,
            navElem: elm
        };
        //console.log("buttonTap: " + JSON.stringify(navContext));
        //if (topmost.currentEntry.moduleName !== elm.NavModule) {
        frame.topmost().navigate({
            animated: true,
            moduleName: elm.NavigationLink,
            context: navContext
        });
    }
}
exports.buttonTap = buttonTap;
//# sourceMappingURL=element-host.js.map