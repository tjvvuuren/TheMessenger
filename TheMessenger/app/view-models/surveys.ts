import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
var frame_1 = require("ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export class SurveyItemData extends observableModule.Observable {
   
    public SurveyContent: string;
    public ID: number;
    public Category: string;
    public PostDate: string;
    public MediaUrl: string;

    constructor(id: number, content: string,  postdate: string, category: string, mediaurl: string) {
        super();        
        this.SurveyContent = content;
        this.ID = id;
        this.PostDate = postdate;
        this.Category = category;
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

export class SurveyListViewModel extends viewModelBaseModule.ViewModelBase {
    private _Mode: string;
    private _surveys: Array<SurveyItemData>;
    private _dailypollSurveys: Array<SurveyItemData>;
    private _survey: SurveyItemData;
    constructor(mode:string) {
        super();
        this._Mode = mode;
        this._dailypollSurveys = new Array<SurveyItemData>();
        this.getSurveysForCategory("DAILYPOLL");
        
         
    }

    get Mode(): string
    {
        return this._Mode;
    }
    set Mode(value: string)
    {
        this._Mode = value; 
    }

    get Survey(): SurveyItemData {
        return this._survey;
    }
    set Survey(value: SurveyItemData) {
        if (this._survey != value) {
            this._survey = value;
            this.notifyPropertyChange("Survey", value);
        }
    }

    

    get Surveys(): Array<SurveyItemData> {
        return this._surveys;
    }
    set Surveys(value: Array<SurveyItemData>) {
        if (this._surveys != value) {
            this._surveys = value;
            this.notifyPropertyChange("Surveys", value);
        }
    }


    onTap_DailypollMode(args)
    {
        this._Mode = "DAILYPOLL";
        this.getSurveysForCategory("DAILYPOLL");
    }
    onTap_SummaryMode(args)
    {
        this._Mode = "SUMMARY";
        this.getSurveysForCategory("SUMMARY");
    }
   
    onItemTap(args){
        var index = args.index;
        //console.log(index);
        this.Survey = args.view.bindingContext;
        //console.log("Article List onItemTap CurrentItem: " + this.Article.Title);
        frame_1.topmost().navigate({
            moduleName: "views/dailyPoll/dailyPoll",
            animated: true,
            context: this.Survey
        });
    }

    getSurveysForCategory(category: string) {
        if (!this.beginLoading())return;
            serviceModule.service.getSurveysByCategory(category).then((data: any[]) => {
                var surveys = new Array<SurveyItemData>();
                for (var i = 0; i < data.length; i++) {
                    //console.log(data[i].Title);
                    surveys.push(new SurveyItemData(i, data[i].SurveyContent,  data[i].PostDate, data[i].Category, data[i].MediaUrl));
                }
                this.Mode = this._Mode;
                this.Surveys = surveys;
                this.endLoading();
            },(error: any) => {
                this.endLoading();
            });
    }

    
    refresh() {
        if (!this.beginLoading())return;
        serviceModule.service.getSurveys().then((data: any[]) => {
            var surveys = new Array<SurveyItemData>();
            for (var i = 0; i < data.length; i++) {
                surveys.push(new SurveyItemData(i, data[i].SurveyContent,  data[i].PostDate, data[i].Category, data[i].MediaUrl));
            }
            this.Mode = this._Mode;
            this.Surveys = surveys;
            this.endLoading();
        },(error: any) => {
                this.endLoading();
            });
    }

}