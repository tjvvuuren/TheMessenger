
//import * as Everlive from 'everlive-sdk';
var ARTICLES = "Articles";
var NOTIFICATIONS = "Notification";
var EVENTS = "Events";
var NEWSFEED = "NewsFeeds";
var MOTORINGARTICLES = "MotoringArticles";
var POSTCATEGORIES = "PostCategories";
var APPLICATIONELEMENTS = "ApplicationElements";
export class Service {
    constructor() {
        this._everlive = new everliveModule({ apiKey: constantsModule.telerikApiKey });
        this.init();
    }
    get EverLive() {
        return this._everlive;
    }
    set EverLive(value) {
        this._everlive = value;
    }
    init() {
        if (!this._everlive) {
            this._everlive = new everliveModule({
                apiKey: constantsModule.telerikApiKey //,
            });
        }
    }
    clearEverlive() {
        if (this._everlive) {
            //this._everlive.offlineStorage.purgeAll();
            this._everlive = null;
        }
    }
    getElements() {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("ElementOrder");
            var everlive = this.createEverlive();
            everlive.data(APPLICATIONELEMENTS).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getArticles() {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().eq('Category', 'Joe');
            query.take(20);
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getCombinedArticles(category) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().isin('Category', [category[0].value, category[1].value]);
            query.take(20);
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getArticlesByCategory(category) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().isin('Category', ['BUSINESS', 'POLITICS']);
            query.take(20);
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getArticlesByCategory2(category) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().isin('Category', ['BREXIT', 'BRICS']);
            query.take(20);
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getArticlesByCategory4(category) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().isin('Category', ['DIGITAL', 'INNOVATION']);
            query.take(20);
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getArticlesByCategory3(category) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            query.where().eq('Category', category);
            query.take(20);
            var everlive = this.createEverlive();
            everlive.data(ARTICLES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getCategoriesByArea(area) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.where().eq('PostArea', area);
            var everlive = this.createEverlive();
            everlive.data(POSTCATEGORIES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getMotoringArticlesByCaterory(category) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            //console.log(category);
            query.where().eq('Category', category);
            query.take(20);
            var everlive = this.createEverlive();
            everlive.data(MOTORINGARTICLES).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getNewsFeedsByCategoryAndPostArea(category, postarea) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            //console.log(category);
            query.take(20);
            var everlive = this.createEverlive();
            if (category == "MOTORING") {
                query.where().eq('Category', postarea);
                everlive.data(MOTORINGARTICLES).get(query).then(data => {
                    resolve(data.result);
                }, error => {
                    Service.showErrorAndReject(error, reject);
                });
            }
            else {
                query.where().eq('Category', category);
                everlive.data(NEWSFEED).get(query).then(data => {
                    resolve(data.result);
                }, error => {
                    Service.showErrorAndReject(error, reject);
                });
            }
        });
    }
    getNewsFeedsByCategory(category) {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            //console.log(category);
            query.take(20);
            var everlive = this.createEverlive();
            if (category == "MOTORING") {
                everlive.data(MOTORINGARTICLES).get(query).then(data => {
                    resolve(data.result);
                }, error => {
                    Service.showErrorAndReject(error, reject);
                });
            }
            else {
                query.where().eq('Category', category);
                everlive.data(NEWSFEED).get(query).then(data => {
                    resolve(data.result);
                }, error => {
                    Service.showErrorAndReject(error, reject);
                });
            }
        });
    }
    getNewsFeeds() {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            var everlive = this.createEverlive();
            everlive.data(NEWSFEED).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getEvents() {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.orderDesc("PostDate");
            var everlive = this.createEverlive();
            everlive.data(EVENTS).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    getNotifications() {
        return new Promise((resolve, reject) => {
            var query = new everliveModule.Query();
            query.order("PublishedDate");
            var everlive = this.createEverlive();
            everlive.data(NOTIFICATIONS).get(query).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    login(user) {
        return new Promise((resolve, reject) => {
            var everlive = this.createEverlive();
            everlive.authentication.login(user.email, user.password).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    register(user) {
        return new Promise((resolve, reject) => {
            var everlive = this.createEverlive();
            var attrs = {
                Email: user.email,
                DisplayName: user.displayname
            };
            everlive.Users.register(user.email, user.password, attrs).then(data => {
                resolve(data.result);
            }, error => {
                Service.showErrorAndReject(error, reject);
            });
        });
    }
    createEverlive() {
        //if (!this._everlive) {
        //  this._everlive = new Everlive({
        //    apiKey: constantsModule.telerikApiKey//,
        //token: applicationSettingsModule.getString(constantsModule.authenticationTokenKey)
        //});
        //}        
        if (!this._everlive) {
            this._everlive = new everliveModule({
                apiKey: constantsModule.telerikApiKey //,
            });
        }
        return this._everlive;
    }
    static showErrorAndReject(error, reject) {
        notificationsModule.showError(error.message);
        reject(error);
    }
    setupLocalSettings(authenticationTokenKey) {
        applicationSettingsModule.setString(constantsModule.authenticationTokenKey, authenticationTokenKey);
    }
    clearLocalSettings() {
        applicationSettingsModule.remove(constantsModule.authenticationTokenKey);
    }
}
export var service = new Service();
