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
import { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import Input from "../Input/input";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
library.add(fas);
export var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, renderOption = props.renderOption, value = props.value, restProps = __rest(props, ["fetchSuggestions", "onSelect", "renderOption", "value"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(-1), highlightIndex = _d[0], setHighlightIndex = _d[1]; // 下来菜单高亮
    var triggerSearch = useRef(false);
    var componentRef = useRef(null);
    var debouncedValue = useDebounce(inputValue, 500);
    useClickOutside(componentRef, function () { setSuggestions([]); });
    useEffect(function () {
        if (debouncedValue && triggerSearch.current) {
            var results = fetchSuggestions(debouncedValue);
            if (results instanceof Promise) {
                console.log('trigger');
                setLoading(true);
                results.then(function (data) {
                    setSuggestions(data);
                    setLoading(false);
                });
            }
            else {
                setSuggestions(results);
            }
        }
        else {
            setSuggestions([]);
        }
        setHighlightIndex(-1);
    }, [debouncedValue]);
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropDown = function () {
        return (_jsx("ul", { children: suggestions.map(function (item, index) {
                var cnames = classNames('suggestion-item', {
                    'item-highlighted': index === highlightIndex
                });
                return (_jsx("li", __assign({ onClick: function () { return handleSelect(item); }, className: cnames }, { children: renderTemplate(item) }), index));
            }) }, void 0));
    };
    var highLight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    var handleKeyDown = function (e) {
        console.log("键盘事件");
        switch (e.keyCode) {
            case 13:
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 38:
                console.log(highlightIndex, '向上');
                highLight(highlightIndex - 1);
                break;
            case 40:
                console.log(highlightIndex, '向下');
                highLight(highlightIndex + 1);
                break;
            case 27:
                console.log("esc键");
                setSuggestions([]);
                break;
            default:
                break;
        }
    };
    return (_jsxs("div", __assign({ className: 'auto-complete', ref: componentRef }, { children: [_jsx(Input, __assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown }, restProps), void 0),
            loading && _jsx("ul", { children: _jsx(Icon, { icon: "spinner", spin: true }, void 0) }, void 0), (suggestions.length > 0) && generateDropDown()] }), void 0));
};
export default AutoComplete;
