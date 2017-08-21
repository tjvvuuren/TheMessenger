import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");
import { Observable } from "tns-core-modules/data/observable";
import * as frame from "ui/frame";
export class LoginViewModel extends viewModelBaseModule.ViewModelBase {

    constructor() {
        super();
        this.userlogin = new UserLogin("", "");
        this.userregister = new UserRegister("", "", "");
    }

    set userlogin(value: UserLogin) {
        this.set("_userlogin", value);
    }

    get userlogin(): UserLogin {
        return this.get("_userlogin");
    }

    set userregister(value: UserRegister) {
        this.set("_userregister", value);
    }

    get userregister(): UserRegister {
        return this.get("_userregister");
    }

    
    login() {
        if (!this.beginLoading())return;
        serviceModule.service.login(this.userlogin).then((data: any[]) => {
            console.log("worked");
            var topmost = frame.topmost();
            if (topmost.currentEntry.moduleName !== "./main-page") {
                    frame.topmost().navigate({
                        animated: true,
                        moduleName: "./main-page",
                        context: null
                    });
                }
            this.endLoading();
        },(error: any) => {
                console.log("failed");
                this.endLoading();
            });
    }

    register() {
        if (!this.beginLoading())return;
        serviceModule.service.register(this.userregister).then((data: any[]) => {
            console.log("worked");
            var topmost = frame.topmost();
            if (topmost.currentEntry.moduleName !== "./main-page") {
                    frame.topmost().navigate({
                        animated: true,
                        moduleName: "./main-page",
                        context: null
                    });
                }
            this.endLoading();
        },(error: any) => {
                console.log("failed");
                this.endLoading();
            });
    }
}

export class UserRegister {
    public displayname: string;
    public email: string;
    public password: string;
    
    constructor(displayname, email, password) {
        this.displayname = displayname;
        this.email = email;
        this.password = password;
    }
}
export class UserLogin {
    public email: string;
    public password: string;
    
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}