import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
var frame_1 = require("ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export class ArticleItemData extends observableModule.Observable {
    public Title: string;
    public ArticleContent: string;
    public Description: string;
    public ID: number;
    public PostDate: string;
    public Category: string;
    public Creator: string;
    public MediaUrl: string;

    constructor(id: number, title: string, description: string, content: string,  postdate: string, category: string, creator: string, mediaurl: string) {
        super();
        this.Title = title;
        this.ArticleContent = content;
        this.Description = description;
        this.ID = id;
        this.PostDate = postdate;
        this.Category = category;
        this.Creator = creator;
        this.MediaUrl = mediaurl;
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

export class ArticleListViewModel extends viewModelBaseModule.ViewModelBase {
    private _Mode: string;
    private _articles: Array<ArticleItemData>;
    private _businessArticles: Array<ArticleItemData>;
    private _article: ArticleItemData;
    constructor(mode:string) {
        super();
        this._Mode = mode;
        this._businessArticles = new Array<ArticleItemData>();
        this.getArticlesForCategory("BUSINESS");
    }
     
    get Mode(): string
    {
        return this._Mode;
    }
    set Mode(value: string)
    {
        this._Mode = value; 
    }

    get Article(): ArticleItemData {
        return this._article;
    }
    set Article(value: ArticleItemData) {
        if (this._article != value) {
            this._article = value;
            this.notifyPropertyChange("Article", value);
        }
    }

    

    get Articles(): Array<ArticleItemData> {
        return this._articles;
    }
    set Articles(value: Array<ArticleItemData>) {
        if (this._articles != value) {
            this._articles = value;
            this.notifyPropertyChange("Articles", value);
        }
    }

    get BusinessArticles(): Array<ArticleItemData> {
        return this._businessArticles;
    }
    set BusinessArticles(value: Array<ArticleItemData>) {
        if (this._businessArticles != value) {
            this._businessArticles = value;
            this.notifyPropertyChange("Articles", value);
        }
    }

    onTap_BussinesMode(args)
    {
        this._Mode = "BUSINESS";
        this.getArticlesForCategory("BUSINESS");
    }
    onTap_PoliticsMode(args)
    {
        this._Mode = "POLITICS";
        this.getArticlesForCategory("POLITICS");
    }
    onTap_InnovationMode(args)
    {
        this._Mode = "INNOVATION";
        this.getArticlesForCategory("INNOVATION");
    }
    onTap_WaterMode(args)
    {
        this._Mode = "WATER";
        this.getArticlesForCategory("WATER");
    }
    onTap_BrexitMode(args)
    {
        this._Mode = "BRICS";
        this.getArticlesForCategory("BRICS");
    }
     
    onItemTap(args){
        var index = args.index;
        //console.log(index);
        this.Article = args.view.bindingContext;
        //console.log("Article List onItemTap CurrentItem: " + this.Article.Title);
        frame_1.topmost().navigate({
            moduleName: "views/articles/articles-detail-page",
            animated: true,
            context: this.Article
        });
    }

    getCombinedArticles() {
        var categories = [{ value: "BUSINESS" },{ value: "POLITICS" } ];
        
        if (!this.beginLoading())return;
            serviceModule.service.getCombinedArticles(categories).then((data: any[]) => {
                var articles = new Array<ArticleItemData>();
                for (var i = 0; i < data.length; i++) {
                    //console.log(data[i].Title);
                    articles.push(new ArticleItemData(i, data[i].Title, data[i].Description, data[i].ArticleContent,  data[i].PostDate, data[i].Category, data[i].Creator, data[i].MediaUrl));
                }
                this.Mode = this._Mode;
                this.Articles = articles;
                this.endLoading();
            },(error: any) => {
                this.endLoading();
            });
    }

    getArticlesForCategory(category: string) {
        if (!this.beginLoading())return;
            serviceModule.service.getArticlesByCategory(category).then((data: any[]) => {
                var articles = new Array<ArticleItemData>();
                for (var i = 0; i < data.length; i++) {
                    //console.log(data[i].Title);
                    articles.push(new ArticleItemData(i, data[i].Title, data[i].Description, data[i].ArticleContent,  data[i].PostDate, data[i].Category, data[i].Creator, data[i].MediaUrl));
                }
                this.Mode = this._Mode;
                this.Articles = articles;
                this.endLoading();
            },(error: any) => {
                this.endLoading();
            });
    }

    refreshTest(){
        if (!this.beginLoading())return;
        var articles = new Array<ArticleItemData>();
        for (var i = 0; i < this.BusinessArticles.length; i++) {
            articles.push(new ArticleItemData(i, this.BusinessArticles[i].Title, this.BusinessArticles[i].Description, this.BusinessArticles[i].ArticleContent,  this.BusinessArticles[i].PostDate, this.BusinessArticles[i].Category, this.BusinessArticles[i].Creator, this.BusinessArticles[i].MediaUrl));
        }
    }

    refresh() {
        if (!this.beginLoading())return;
        serviceModule.service.getArticles().then((data: any[]) => {
            var articles = new Array<ArticleItemData>();
            for (var i = 0; i < data.length; i++) {
                articles.push(new ArticleItemData(i, data[i].Title, data[i].Description, data[i].ArticleContent,  data[i].PostDate, data[i].Category, data[i].Creator, data[i].MediaUrl));
            }
            this.Mode = this._Mode;
            this.Articles = articles;
            this.endLoading();
        },(error: any) => {
                this.endLoading();
            });
    }

}
