import Everlive from 'everlive-sdk';
//var Everlive = require('everlive-sdk');

export class BackendService {
    private _everlive: Everlive;

    getArticleData() {
        
        var el = new Everlive({
            appId: '9fi6b79u9cyuqehq',
            scheme: 'https'
        });

        var data = el.data("Articles");
        var query = new Everlive.Query();
        query.select('Title');
        data.get(query,
            function(data){
                
                //this._todoItems.push(new ListItem("Call Brian Ingram regarding the hotel reservations", false, false));
                //this._todoItems.push(new ListItem("See weather forecast for London", true, false));
                //console.log("QUERY COMPLETED");
                for (var i = 0; i < 10; i++)
                {
                    //this._todoItems.push(new ListItem(data.result[i].Title, false, false));
                    //this._items.push(new ArticleDataItem(data.result[i].Id,data.result[i].Title,data.result[i].ArticleContent));
                }
                
            },
            function(error){
                console.log(JSON.stringify(error));
            });
    }
    constructor() {
        const options = {
            appId: '9fi6b79u9cyuqehq',
            scheme: 'https'
        }

        this._everlive = new Everlive(options);
    }

    get instance() {
        return this._everlive;
    }

    // Optional
    get query() {
        return new Everlive.Query();
    }

}