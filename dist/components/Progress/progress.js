var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, width = props.width, theme = props.theme;
    return (_jsx("div", __assign({ className: "viking-progress-bar", style: { width: width + "px" } }, { children: _jsx("div", __assign({ className: "viking-progress-bar-outer", style: { height: strokeHeight + "px" } }, { children: _jsx("div", __assign({ className: "viking-progress-bar-inner color-" + theme, style: { width: percent + "%" } }, { children: showText && _jsx("span", __assign({ className: "inner-text" }, { children: percent + "%" }), void 0) }), void 0) }), void 0) }), void 0));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary",
    width: 500
};
export default Progress;
