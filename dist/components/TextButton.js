var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { jsxs as _jsxs, jsx as _jsx } from "@emotion/react/jsx-runtime";
import styled from "@emotion/styled";
import palette from "../styles/palette";
/**
 * 텍스트 버튼 컴포넌트
 * @param children 버튼에 들어갈 요소
 * @param {'small' |  'large'} [size='small'] 버튼 크기
 * @param {'black' | 'blue' | 'gray'} primaryColor 버튼 색상
 * @param underline 텍스트 언더라인 유무
 * @param icon 아이콘 컴포넌트
 * @returns
 */
export var TextButton = function (_a) {
    var children = _a.children, size = _a.size, primaryColor = _a.primaryColor, underline = _a.underline, icon = _a.icon, props = __rest(_a, ["children", "size", "primaryColor", "underline", "icon"]);
    return (_jsx(TextButtonDiv, { children: _jsxs("button", __assign({}, props, { className: "".concat(size, " ").concat(primaryColor, " ").concat(underline ? "underline" : "") }, { children: [icon, children] })) }));
};
var TextButtonDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  button {\n    display: flex;\n    align-items: center;\n    border: none;\n    padding: 0;\n    background-color: #ffffff;\n    cursor: pointer;\n  }\n  .small {\n    height: 20px;\n\n    font-weight: 500;\n    font-size: 13;\n    line-height: 16px;\n  }\n  .large {\n    font-size: 15px;\n    line-height: 19px;\n  }\n\n  .black {\n    color: ", ";\n  }\n  .gray {\n    color: ", ";\n  }\n  .blue {\n    color: ", ";\n  }\n\n  .underline {\n    text-decoration: underline;\n  }\n"], ["\n  button {\n    display: flex;\n    align-items: center;\n    border: none;\n    padding: 0;\n    background-color: #ffffff;\n    cursor: pointer;\n  }\n  .small {\n    height: 20px;\n\n    font-weight: 500;\n    font-size: 13;\n    line-height: 16px;\n  }\n  .large {\n    font-size: 15px;\n    line-height: 19px;\n  }\n\n  .black {\n    color: ", ";\n  }\n  .gray {\n    color: ", ";\n  }\n  .blue {\n    color: ", ";\n  }\n\n  .underline {\n    text-decoration: underline;\n  }\n"])), palette.gray[800], palette.gray[600], palette.blue[700]);
var templateObject_1;
