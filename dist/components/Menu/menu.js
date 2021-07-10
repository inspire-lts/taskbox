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
import React, { createContext, useState } from "react";
export var MenuContext = createContext({
    index: '0'
});
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setCurrentActive = _a[1];
    var classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    var handleClick = function (index) {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    // 限制children只能为menuItem
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child; // 断言为menuitem才有type属性
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString() // 添加默认index
                });
            }
            else {
                console.error('Warning: Menu has a child which is not a MenuItem');
            }
        });
    };
    return (_jsx("ul", __assign({ className: classes, style: style }, { children: _jsx(MenuContext.Provider, __assign({ value: passedContext }, { children: renderChildren() }), void 0) }), void 0));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal'
};
export default Menu;
