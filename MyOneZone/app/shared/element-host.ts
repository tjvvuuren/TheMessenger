import notificationsModule = require("../common/notifications");
import serviceModule = require("../common/service");
import viewModelBaseModule = require("../common/view-model-base");
import constants = require("../common/constants");
import observableModule = require("data/observable");
import * as frame from "ui/frame";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import view = require("ui/core/view");
import buttonModule = require("ui/button");

export class ElementHostItem extends observableModule.Observable {
    public Id: string;
    public ParentID: string;
    public UIDisplayID: number;
    public HostCategoryID: string;
    public Title: string;
    public FontIconID: string;
    public NavigationLink: string;
    public NavigationContext: string;
    public ActionBarCSS: string;
    public HeaderImage: string;
    public RoleID: string;
    public BannerImage: string;
    public NavigationObject: any;
    
    constructor(id: string, parentID: string, uIDisplayID: number, hostCategoryID: string, title: string, fontIconID: string, navigationLink: string, navigationContext: any, actionBarCSS: string, headerImage: string, roleID: string, bannerImage: string) {
        super();
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
        
        if (JSON.stringify(navigationContext) != "")
        {
                this.NavigationObject = JSON.parse(this.NavigationContext);
                console.log("JSON.stringify(this.NavigationObject): " + JSON.stringify(this.NavigationObject));
            
        }
        
    }
}

export class ElementHost extends viewModelBaseModule.ViewModelBase {

    private _ElementItems: ObservableArray<ElementHostItem>;
    private _ElementItem: ElementHostItem;

    private _NavigationArea: string;

    constructor(elementItem: ElementHostItem) {
        super();
        console.log("GO");
        if(elementItem)
        {
            this._ElementItem = elementItem;
            //console.log("constructor(elementItem: ElementHostItem) - " + JSON.stringify(elementItem));
            this._ElementItems = this.SetButtonDisplayElements();
        }
    }

    get ElementItem(): ElementHostItem {
        return this._ElementItem;
    }
    set ElementItem(value: ElementHostItem) {
        if (this._ElementItem != value) {
            this._ElementItem = value;
            this.notifyPropertyChange("ElementItem", value);
        }
    }

    get ElementItems(): ObservableArray<ElementHostItem> {
        return this._ElementItems;
    }
    set ElementItems(value: ObservableArray<ElementHostItem>) {
        if (this._ElementItems != value) {
            this._ElementItems = value;
            this.notifyPropertyChange("ElementItems", value);
        }
    }
    
    public SetButtonDisplayElements(): ObservableArray<ElementHostItem> {
        var elementId = this.ElementItem.Id; 
        return this.getElementsForParent(elementId);
    }

    getElementsForParent(parentId: string): ObservableArray<ElementHostItem> {
        if (!this.beginLoading()) return;
        //console.log("CALL DB");
        serviceModule.service.getChildElements(parentId).then((data: any[]) => {
            console.log("serviceModule.service.getChildElements - data.length:" + data.length);
            var elements = new ObservableArray<ElementHostItem>();
            for (var i = 0; i < data.length; i++) {

                //console.log("FontIcon: " + data[i].FontIcon + " - " + String.fromCharCode(constants.ELEMENT_ICONS.IconElement[data[i].FontIcon]));
                var naContext; 
                if(parentId == "A740A453-074E-4E97-9ECD-6275BAE62803")
                {
                    naContext = { "imgButtonSrc": "~/images/SABPP_Button.png", "fontButtonVisibility": "collapsed", "imgButtonVisibility": "visible" };
                }else{
                    naContext = { "imgButtonSrc": "~/images/SABPP_Button.png", "fontButtonVisibility": "visible", "imgButtonVisibility": "collapsed" };
                }
                
                
                elements.push(new ElementHostItem(
                    data[i].Id,
                    data[i].ParentID,
                    data[i].UIDisplayID,
                    data[i].HostCategoryID,
                    data[i].Title,
                    String.fromCharCode(constants.ELEMENT_ICONS.IconElement[data[i].FontIcon]),
                    data[i].NavigationLink,
                    //data[i].NavigationContext,
                    naContext,
                    data[i].ActionBarCSS,
                    data[i].HeaderImage,
                    data[i].RoleID,
                    data[i].BannerImage) 
                );
            }

            this.ElementItems = elements;
            this.endLoading();
            return elements;
        }, (error: any) => {
            this.endLoading();
        });

    }
    
    private hideAll() {

    }
          
}


export function buttonTap(args: observableModule.EventData) {
    let item = <ElementHostItem>(<buttonModule.Button>args.object).bindingContext;
    
    if (item)
    {
        
        var elm = new ElementHostItem(
            item.Id,
            item.ParentID,
            item.UIDisplayID,
            item.HostCategoryID,
            item.Title,
            item.FontIconID,
            item.NavigationLink, 
            item.NavigationContext,
            item.ActionBarCSS,
            item.HeaderImage, 
            item.RoleID,
            item.BannerImage);

        

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
        //}
    }
    
}
