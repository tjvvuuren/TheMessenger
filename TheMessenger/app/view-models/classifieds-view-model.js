"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viewModelBaseModule = require("../common/view-model-base");
var frame_1 = require("ui/frame");
var ClassifiedsViewModel = (function (_super) {
    __extends(ClassifiedsViewModel, _super);
    function ClassifiedsViewModel(mode) {
        var _this = _super.call(this) || this;
        _this._Mode = mode;
        return _this;
    }
    Object.defineProperty(ClassifiedsViewModel.prototype, "Mode", {
        get: function () {
            return this._Mode;
        },
        set: function (value) {
            this._Mode = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClassifiedsViewModel;
}(viewModelBaseModule.ViewModelBase));
exports.ClassifiedsViewModel = ClassifiedsViewModel;
//# sourceMappingURL=classifieds-view-model.js.map