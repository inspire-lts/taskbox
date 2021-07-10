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
import classNames from "classnames";
import React, { useState } from "react";
import { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import Icon from "../Icon/Icon";
import { MenuContext } from "./menu";
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, children = _a.children, className = _a.className;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
    var _b = useState(isOpened), menuOpen = _b[0], setMenuOpen = _b[1];
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });
    var handleOpen = function (e) {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setMenuOpen(toggle);
        }, 300);
    };
    // 这两个事件处理可以写成一个，但是这样分开感觉更好区分
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleOpen
    } : {};
    var hoverEnvents = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    var renderChildren = function () {
        var subMenuClasses = classNames('submenu', {
            'menu-opened': menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: index + "-" + i
                });
            }
            else {
                console.error('Warning: SubMenu has a child which is not a MenuItem');
            }
        });
        return (_jsx(CSSTransition, __assign({ in: menuOpen, timeout: 300, classNames: 'zoom-in-top', appear: true, unmountOnExit: true }, { children: _jsx("ul", __assign({ className: subMenuClasses }, { children: childrenComponent }), void 0) }), void 0));
    };
    return (_jsxs("li", __assign({ className: classes }, hoverEnvents, { children: [_jsxs("div", __assign({ className: 'submenu-title' }, clickEvents, { children: [title, _jsx(Icon, { icon: 'angle-down', className: 'arrow-icon' }, void 0)] }), void 0), renderChildren()] }), index));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
