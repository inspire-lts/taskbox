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
import classNames from "classnames";
import { useContext } from "react";
import { MenuContext } from "./menu";
var MenuItem = function (props) {
    var children = props.children, index = props.index, className = props.className, style = props.style, disabled = props.disabled;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        // 调用父组件方法，改变父组件index为当前index
        // typeof将其index限制为string，不是undefined,这样才可以传入函数
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (_jsx("li", __assign({ className: classes, style: style, onClick: handleClick }, { children: children }), void 0));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
