"use strict";
var frame = require("ui/frame");
var viewModel;
function pageNavigatedTo(args) {
    var page = args.object;
    var item = args.context;
    page.bindingContext = item;
}
exports.pageNavigatedTo = pageNavigatedTo;
function onNavBtnTap() {
    var topmost = frame.topmost();
    if (topmost.currentEntry.moduleName !== "views/events/events-page-list") {
        frame.topmost().navigate({
            animated: true,
            moduleName: "views/events/events-page-list",
            context: null
        });
    }
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=events-detail-page.js.map