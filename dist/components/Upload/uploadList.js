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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '../Icon/Icon';
import Progress from '../Progress';
export var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (_jsx("ul", __assign({ className: "viking-upload-list" }, { children: fileList.map(function (item) {
            return (_jsxs("li", __assign({ className: "viking-upload-list-item" }, { children: [_jsxs("span", __assign({ className: "file-name file-name-" + item.status }, { children: [_jsx(Icon, { icon: "file-alt", theme: "secondary" }, void 0), item.name] }), void 0),
                    _jsxs("span", __assign({ className: "file-status" }, { children: [(item.status === 'uploading' || item.status === 'ready') && _jsx(Icon, { icon: "spinner", spin: true, theme: "primary" }, void 0),
                            item.status === 'success' && _jsx(Icon, { icon: "check-circle", theme: "success" }, void 0),
                            item.status === 'error' && _jsx(Icon, { icon: "times-circle", theme: "danger" }, void 0)] }), void 0),
                    _jsx("span", __assign({ className: "file-actions" }, { children: _jsx(Icon, { icon: "times", onClick: function () { onRemove(item); } }, void 0) }), void 0),
                    item.status === 'uploading' &&
                        _jsx(Progress, { percent: item.percent || 0 }, void 0)] }), item.uid));
        }) }), void 0));
};
export default UploadList;
