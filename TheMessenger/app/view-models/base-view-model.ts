import notificationsModule = require("../shared/notifications");
import serviceModule = require("../shared/service");
import viewModelBaseModule = require("../common/view-model-base");
import observableModule = require("data/observable");

export class ViewModel extends viewModelBaseModule.ViewModelBase {
    private _elements: Array<ApplicationElementData>;
    constructor() {
        super();
    }

    get Elements(): Array<ApplicationElementData> {
        return this._elements;
    }
    set Elements(value: Array<ApplicationElementData>) {
        if (this._elements != value) {
            this._elements = value;
            this.notifyPropertyChange("Elements", value);
        }
    }

    geElements(area: string){
        if (!this.beginLoading())return;
            serviceModule.service.getCategoriesByArea(area).then((data: any[]) => {
                var elements = new Array<ApplicationElementData>();
                for (var i = 0; i < data.length; i++) {
                    elements.push(new ApplicationElementData(i, data[i].Parent,	data[i].ElementName, data[i].ElementNav,	data[i].ElementDisplayText,	data[i].ElementOrder, data[i].PageTitle, data[i].PageCSS, data[i].Visible, data[i].Enabled, data[i].Animated, data[i].RequiresAuth));
                }
                this.Elements = elements;
                this.endLoading();
            },(error: any) => {
                this.endLoading();
            });
    }
}

export class ApplicationElementData extends observableModule.Observable {
    public Parent: string;
	public ElementName: string;
	public ElementNav: string;
	public ElementDisplayText: string;
	public ElementOrder: number;
	public PageTitle: string;
	public PageCSS: string;
	public Visible: boolean;
	public Enabled: boolean;
	public Animated: boolean;
	public RequiresAuth: boolean;
    
    constructor(id: number, parent: string, elementname: string, elementnav: string, elementdisplaytext: string, elementorder: number, pagetitle: string, pagecss: string, visible: boolean, enabled: boolean, animated: boolean, requiresauth: boolean) {
        super();
        this.Parent = parent;
        this.ElementName = elementname;
        this.ElementNav = elementnav;
        this.ElementDisplayText = elementdisplaytext;
        this.ElementOrder = elementorder;
        this.PageTitle = pagetitle;
        this.PageCSS = pagecss;
        this.Visible = visible;
        this.Enabled = enabled;
        this.Animated = animated;
        this.RequiresAuth = requiresauth;
    }
}