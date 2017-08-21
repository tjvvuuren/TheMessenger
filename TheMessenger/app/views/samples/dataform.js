"use strict";
var viewModel = require("./person-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonViewModel();
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=dataform.js.map