import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export class NotificationsItemData extends observableModule.Observable {
    private Title: string;
    private Notification: string;
    private PublishedDate: string;
    private ID: number;
    
    constructor(id: number, title: string, notification: string, publisheddate: Date) {
        super();
        this.Title = title;
        this.Notification = notification;
        this.PublishedDate = this.formatToShortDate(publisheddate);
        this.ID = id;
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

export class NotificationsViewModel extends viewModelBaseModule.ViewModelBase {
    private _notifications: Array<NotificationsItemData>;
    
    constructor() {
        super();
    }

    get Notifications(): Array<NotificationsItemData> {
        return this._notifications;
    }
    set Notifications(value: Array<NotificationsItemData>) {
        if (this._notifications != value) {
            this._notifications = value;
            this.notifyPropertyChange("Notifications", value);
        }
    }
    
    refresh() {
        if (!this.beginLoading())return;

        serviceModule.service.getNotifications().then((data: any[]) => {
            var notifications = new Array<NotificationsItemData>();
            for (var i = 0; i < data.length; i++) {
                notifications.push(new NotificationsItemData(i, data[i].Title, data[i].Notification,  data[i].PublishedDate));
            }
            this.Notifications = notifications;
            this.endLoading();
        },(error: any) => {
                this.endLoading();
            });
    }
}