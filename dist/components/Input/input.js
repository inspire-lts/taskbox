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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import Icon from "../Icon/Icon";
var Input = function (props) {
    var _a;
    var style = props.style, disabled = props.disabled, size = props.size, icon = props.icon, prepend = props.prepend, append = props.append, width = props.width, restProps = __rest(props, ["style", "disabled", "size", "icon", "prepend", "append", "width"]);
    var classes = classNames('input-wrapper', (_a = {},
        _a["input-size-" + size] = size,
        _a['is-disabled'] = disabled,
        _a['input-group'] = prepend || append,
        _a['input-group-append'] = !!append,
        _a['input-group-prepend'] = !!prepend,
        _a));
    // 当value为空的时候组件会由非受控组件变成受控组件，会报错 
    var fixControlledValue = function (value) {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value;
    };
    // defaultValue和 value不能同时存在
    if ('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value);
    }
    return (_jsxs("div", __assign({ className: classes, style: { width: width + "px" } }, { children: [prepend && _jsx("div", __assign({ className: 'input-group-prepend' }, { children: prepend }), void 0),
            icon && _jsx("div", __assign({ className: 'icon-wrapper' }, { children: _jsx(Icon, { icon: icon, title: "title-" + icon }, void 0) }), void 0),
            _jsx("input", __assign({ className: 'input-inner', disabled: disabled }, restProps), void 0),
            append && _jsx("div", __assign({ className: 'input-group-append' }, { children: append }), void 0)] }), void 0));
};
export default Input;
