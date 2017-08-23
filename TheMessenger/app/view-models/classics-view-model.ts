import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
var frame_1 = require("ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export class NewsItemData extends observableModule.Observable {
    public Title: string;
    public NewsContent: string;
    public Description: string;
    public ID: number;
    public PostDate: string;
    public Category: string;
    public Creator: string;
    public actionbarCss: string;
    public pageTitle: string;
    public fromArea: string;
    public MediaUrl: string;

    constructor(id: number, title: string, description: string, content: string,  postdate: string, category: string, creator: string,  actionbarcss: string, pagetitle: string, fromarea: string, mediaurl: string) {
        super();
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

    get ActionbarCss(): string
    {
        return this.actionbarCss;
    }
    set ActionbarCss(value: string)
    {
        //this._actionbarCss = value; 
        if (this.actionbarCss != value) {
            this.actionbarCss = value;
            this.notifyPropertyChange("ActionbarCss", value);
        }
    }

    get PageTitle(): string
    {
        return this.pageTitle;
        
    }
    set PageTitle(value: string)
    {
        //this._pageTitle = value; 
        if (this.pageTitle != value) {
            this.pageTitle = value;
            this.notifyPropertyChange("PageTitle", value);
        }
    }

    get FromArea(): string
    {
        return this.fromArea;
    }

    set FromArea(value: string)
    {
        //this._fromArea = value; 
        if (this.fromArea != value) {
            this.fromArea = value;
            this.notifyPropertyChange("FromArea", value);
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
}
export class CategoriesData extends observableModule.Observable {
    public PostArea: string;
    public CategoryName: string;
    
    constructor(id: number, postarea: string, categoryname: string) {
        super();
        this.PostArea = postarea;
        this.CategoryName = categoryname;
    
    }
}
export class NewsListViewModel extends viewModelBaseModule.ViewModelBase {
    private _Mode: string;
    private _PostArea: string;
    private _actionbarCss: string;
    private _pageTitle: string;
    private _fromArea: string;
    private _newsfeeds: Array<NewsItemData>;
    private _areaCategories: Array<CategoriesData>;
    private _newsfeed: NewsItemData;
    constructor(mode:string, postarea:string, actionbarcss:string, pagetitle:string, fromarea:string) {
        super();
        this._Mode = mode;
        this._PostArea = postarea;
        this._actionbarCss = actionbarcss;
        this._pageTitle = pagetitle;
        this._fromArea = fromarea;
        this.getNewsFeedsByCategoryAndPostArea(mode, postarea);
         
    }


    get ActionbarCss(): string
    {
        return this._actionbarCss;
    }
    set ActionbarCss(value: string)
    {
        //this._actionbarCss = value; 
        if (this._actionbarCss != value) {
            this._actionbarCss = value;
            this.notifyPropertyChange("ActionbarCss", value);
        }
    }


    get PageTitle(): string
    {
        return this._pageTitle;
        
    }
    set PageTitle(value: string)
    {
        //this._pageTitle = value; 
        if (this._pageTitle != value) {
            this._pageTitle = value;
            this.notifyPropertyChange("PageTitle", value);
        }
    }

    get FromArea(): string
    {
        return this._fromArea;
    }
    set FromArea(value: string)
    {
        //this._fromArea = value; 
        if (this._fromArea != value) {
            this._fromArea = value;
            this.notifyPropertyChange("FromArea", value);
        }
    }

    get Mode(): string
    {
        return this._Mode;
    }
    set Mode(value: string)
    {
        //this._Mode = value; 
        if (this._Mode != value) {
            this._Mode = value;
            this.notifyPropertyChange("Mode", value);
        }
    }

get PostArea(): string
    {
        return this._PostArea;
    }
    set PostArea(value: string)
    {
        //this._Mode = value; 
        if (this._PostArea != value) {
            this._PostArea = value;
            this.notifyPropertyChange("PostArea", value);
        }
    }
    get Newsfeed(): NewsItemData {
        return this._newsfeed;
    }
    set Newsfeed(value: NewsItemData) {
        if (this._newsfeed != value) {
            this._newsfeed = value;
            this.notifyPropertyChange("Newsfeed", value);
        }
    }

    get AreaCategories(): Array<CategoriesData> {
        return this._areaCategories;
    }
    set AreaCategories(value: Array<CategoriesData>) {
        if (this._areaCategories != value) {
            this._areaCategories = value;
            this.notifyPropertyChange("AreaCategories", value);
        }
    }

    get Newsfeeds(): Array<NewsItemData> {
        return this._newsfeeds;
    }
    set Newsfeeds(value: Array<NewsItemData>) {
        if (this._newsfeeds != value) {
            this._newsfeeds = value;
            this.notifyPropertyChange("Newsfeeds", value);
        }
    }

    onItemTap(args){
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
    }

    getAreaCategories(area: string){
        if (!this.beginLoading())return;
            serviceModule.service.getCategoriesByArea(area).then((data: any[]) => {
                var areaCategories = new Array<CategoriesData>();
                for (var i = 0; i < data.length; i++) {
                    areaCategories.push(new CategoriesData(i, data[i].PostArea, data[i].CategoryName));
                }
                this.AreaCategories = areaCategories;
                this.endLoading();
            },(error: any) => {
                this.endLoading();
            });
    }

    getNewsFeedsByCategoryAndPostArea(category: string, postarea: string) {
        if (!this.beginLoading())return;
            serviceModule.service.getNewsFeedsByCategoryAndPostArea(category, postarea).then((data: any[]) => {
                var newsfeeds;
                newsfeeds = new Array<NewsItemData>();

                for (var i = 0; i < data.length; i++) {
                    newsfeeds.push(new NewsItemData(i, data[i].Title, data[i].Description, data[i].NewsContent,  data[i].PostDate, data[i].Category, data[i].Creator, this.ActionbarCss, this.PageTitle, this.FromArea, data[i].MediaUrl));
                }
                this.Mode = this._Mode;
                this.Newsfeeds = newsfeeds;
                this.endLoading();
            },(error: any) => {
                this.endLoading();
            });
    }

    getNewsFeedsForCategory(category: string) {
        if (!this.beginLoading())return;
            serviceModule.service.getNewsFeedsByCategory(category).then((data: any[]) => {
                var newsfeeds = new Array<NewsItemData>();
                for (var i = 0; i < data.length; i++) {
                    newsfeeds.push(new NewsItemData(i, data[i].Title, data[i].Description, data[i].NewsContent,  data[i].PostDate, data[i].Category, data[i].Creator, this.ActionbarCss, this.PageTitle, this.FromArea, data[i].MediaUrl));
                }
                this.Mode = this._Mode;
                this.Newsfeeds = newsfeeds;
                this.endLoading();
            },(error: any) => {
                this.endLoading();
            });
    }

    refresh() {
        if (!this.beginLoading())return;
        serviceModule.service.getNewsFeeds().then((data: any[]) => {
            var newsfeeds = new Array<NewsItemData>();
            for (var i = 0; i < data.length; i++) {
                newsfeeds.push(new NewsItemData(i, data[i].Title, data[i].Description, data[i].NewsContent,  data[i].PostDate, data[i].Category, data[i].Creator, this.ActionbarCss, this.PageTitle, this.FromArea, data[i].MediaUrl));
            }
            this.Mode = this._Mode;
            this.Newsfeeds = newsfeeds;
            this.endLoading();
        },(error: any) => {
                this.endLoading();
            });
    }

}