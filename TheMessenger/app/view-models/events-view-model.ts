import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
var frame_1 = require("ui/frame");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export class EventItemData extends observableModule.Observable {
    public Title: string;
    public EventContent: string;
    public Description: string;
    public ID: number;
    public PostDate: string;
    public Category: string;
    public EventDate: string;

    constructor(id: number, title: string, description: string, content: string,  postdate: string, category: string, eventDate: string) {
        super();
        this.Title = title;
        this.EventContent = content;
        this.Description = description;
        this.ID = id;
        this.PostDate = postdate;
        this.Category = category;
        this.EventDate = eventDate;
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

export class EventListViewModel extends viewModelBaseModule.ViewModelBase {
    private _events: Array<EventItemData>;
    private _event: EventItemData;
    constructor() {
        super();
        this._events = new Array<EventItemData>();
        this.getEvents();        
    }

    get Event(): EventItemData {
        return this._event;
    }
    set Event(value: EventItemData) {
        if (this._event != value) {
            this._event = value;
            this.notifyPropertyChange("Event", value);
        }
    }

    get Events(): Array<EventItemData> {
        return this._events;
    }
    set Events(value: Array<EventItemData>) {
        if (this._events != value) {
            this._events = value;
            this.notifyPropertyChange("Events", value);
        }
    }

    onItemTap(args){
        var index = args.index;
        console.log(index);
        this.Event = args.view.bindingContext;
        //console.log("Article List onItemTap CurrentItem: " + JSON.stringify(this.CurrentItem));
        frame_1.topmost().navigate({
            moduleName: "views/events/events-detail-page",
            animated: true,
            context: this.Event
        });
    }

    getEvents() {
        if (!this.beginLoading())return;
        serviceModule.service.getEvents().then((data: any[]) => {
            var events = new Array<EventItemData>();
            console.log("No of Event Records: " + data.length);
            for (var i = 0; i < data.length; i++) {
                console.log("Event Records :" + i + " - " + data[i].Title);
                events.push(new EventItemData(i, data[i].Title, data[i].Description, data[i].EventContent,  data[i].PostDate, data[i].Category, data[i].EventDate));
            }
            this.Events = events;
            this.endLoading();
        },(error: any) => {
                this.endLoading();
            });
    }

    refresh() {
        if (!this.beginLoading())return;
        serviceModule.service.getEvents().then((data: any[]) => {
            var events = new Array<EventItemData>();
            console.log("No of Event Records: " + data.length);
            for (var i = 0; i < data.length; i++) {
                console.log("Event Records :" + i + " - " + data[i].Title);
                events.push(new EventItemData(i, data[i].Title, data[i].Description, data[i].EventContent,  data[i].PostDate, data[i].Category, data[i].EventDate));
            }
            this.Events = events;
            this.endLoading();
        },(error: any) => {
                this.endLoading();
            });
    }

}