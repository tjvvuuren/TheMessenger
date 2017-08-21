var everliveModule = require("../lib/everlive.all.min");
import applicationSettingsModule = require("application-settings");
import constantsModule = require("./constants");
import notificationsModule = require("./notifications");
import userModel = require("../view-models/login-view-model");
//import * as Everlive from 'everlive-sdk';

var ARTICLES = "Articles";
var NOTIFICATIONS = "Notification";
var EVENTS = "Events";
var NEWSFEED = "NewsFeeds";

export class Service {
    private _everlive: any;
    constructor() {
        this._everlive = new everliveModule({ apiKey: constantsModule.telerikApiKey });
        this.init();
    }

    get EverLive(): any
    {
        return this._everlive;
    }
    set EverLive(value: any)
    {
        this._everlive = value; 
    }

    init(){
        if (!this._everlive) {
            this._everlive = new everliveModule({
                apiKey: constantsModule.telerikApiKey//,
                //token: applicationSettingsModule.getString(constantsModule.authenticationTokenKey)
            });
        }
    }

    clearEverlive() {
        if (this._everlive) {
            //this._everlive.offlineStorage.purgeAll();
            this._everlive = null;
        }
    }
    
    getArticles(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().eq('Category', 'Joe')
            query.take(10)
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                    Service.showErrorAndReject(error, reject);
                })
        });
    }

    getArticlesByCategory(category: string): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().eq('Category', category)
            query.take(10)
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                    Service.showErrorAndReject(error, reject);
                })
        });
    }

    getNewsFeedsByCategory(category: string): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            //console.log(category);
            query.where().eq('Category', category)
            query.take(10)
            var everlive = this.createEverlive();
            everlive.data(NEWSFEED).get(query).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                    Service.showErrorAndReject(error, reject);
                })
        });
    }

    getNewsFeeds(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            var everlive = this.createEverlive();
            everlive.data(NEWSFEED).get(query).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                    Service.showErrorAndReject(error, reject);
                })
        });
    }

    getEvents(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            var everlive = this.createEverlive();
            everlive.data(EVENTS).get(query).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                    Service.showErrorAndReject(error, reject);
                })
        });
    }

    getNotifications(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var query = new everliveModule.Query();
            query.order("PublishedDate");
            var everlive = this.createEverlive();
            everlive.data(NOTIFICATIONS).get(query).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                   Service.showErrorAndReject(error, reject);
                })
        });
    }

    login(user: userModel.UserLogin): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var everlive = this.createEverlive();
            everlive.authentication.login(user.email, user.password).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                   Service.showErrorAndReject(error, reject);
                })
        });
    }

    register(user: userModel.UserRegister): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            var everlive = this.createEverlive();
            var attrs = {
                Email: user.email,
                DisplayName: user.displayname
            };
            everlive.Users.register(user.email, user.password, attrs).then(data => {
                resolve(<any[]>data.result);
            }, error => {
                   Service.showErrorAndReject(error, reject);
                })
        });
    }


    private createEverlive(): any {
        //if (!this._everlive) {
          //  this._everlive = new Everlive({
            //    apiKey: constantsModule.telerikApiKey//,
                //token: applicationSettingsModule.getString(constantsModule.authenticationTokenKey)
            //});
        //}        

        if (!this._everlive) {
            this._everlive = new everliveModule({
                apiKey: constantsModule.telerikApiKey//,
                //token: applicationSettingsModule.getString(constantsModule.authenticationTokenKey)
            });
        }

        return this._everlive;
    }
    
    private static showErrorAndReject(error: any, reject: (e: any) => void) {
        notificationsModule.showError(error.message);
        reject(error);
    }

    private setupLocalSettings(authenticationTokenKey: string) {
        applicationSettingsModule.setString(constantsModule.authenticationTokenKey, authenticationTokenKey);
    }

    private clearLocalSettings() {
        applicationSettingsModule.remove(constantsModule.authenticationTokenKey);
    }

}
export var service = new Service();