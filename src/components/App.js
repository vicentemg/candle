"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var React = require("react");
function App() {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    return (React.createElement("div", null,
        React.createElement("button", { onClick: function () { return setCount(count + 1); } }, "Clickeame"),
        React.createElement("div", null,
            " ",
            count)));
}
;
exports.default = App;
//# sourceMappingURL=App.js.map