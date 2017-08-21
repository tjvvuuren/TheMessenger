import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
var frame_1 = require("ui/frame");

export class ClassifiedsViewModel extends viewModelBaseModule.ViewModelBase {
    private _Mode: string;
    constructor(mode:string) {
        super();
        this._Mode = mode;
         
    }

    get Mode(): string
    {
        return this._Mode;
    }
    set Mode(value: string)
    {
        this._Mode = value; 
    }

}