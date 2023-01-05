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
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "@emotion/react/jsx-runtime";
import styled from "@emotion/styled";
import palette from "../styles/palette";
/**
 * 버튼 컴포넌트
 * @param children 버튼에 들어갈 요소
 * @param icon 아이콘 컴포넌트
 * @param {'small' | 'medium' | 'large'} [size='medium'] 버튼 크기
 * @param solid 버튼 스타일
 * @param primaryColor 버튼 색상
 * @param htmlType
 * @returns
 */
export var Button = function (_a) {
    var children = _a.children, icon = _a.icon, size = _a.size, type = _a.type, htmlType = _a.htmlType, props = __rest(_a, ["children", "icon", "size", "type", "htmlType"]);
    return (_jsx(ButtonDiv, __assign({ className: props.className, disabled: props.disabled }, { children: _jsx("button", __assign({}, props, { className: "".concat(size, " ").concat(type, " ").concat(props.disabled ? "disabled" : ""), type: htmlType }, { children: _jsxs(_Fragment, { children: [icon, children] }) })) })));
};
var ButtonDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  width: auto;\n  button {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 6px 12px;\n    gap: 4px;\n    border: 1px solid #d4d4d4;\n    border-radius: 8px;\n    transition: 0.3s border;\n\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 20px;\n\n    cursor: ", ";\n  }\n  .small {\n    border-radius: 4px;\n    height: 32px;\n\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 19px;\n\n    background-color: #ffffff;\n    color: ", ";\n    border: 1px solid ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n    &.disabled {\n      border-color: ", ";\n      color: ", ";\n    }\n    &.selected {\n      border-color: ", ";\n\n      &:hover {\n        background-color: #ffffff;\n      }\n      &.disabled {\n        border-color: ", ";\n        color: ", ";\n      }\n    }\n  }\n  .medium {\n    border-radius: 4px;\n    height: 40px;\n\n    &.solid {\n      background-color: ", ";\n      color: white;\n\n      &.disabled {\n        background-color: ", ";\n        border: none;\n        color: #ffffff;\n      }\n    }\n    &.default {\n      background-color: #ffffff;\n      border: 1px solid ", ";\n\n      &.disabled {\n        background-color: #ffffff;\n        color: ", ";\n      }\n    }\n    &.secondary {\n      background-color: #ffffff;\n      border: 1px solid ", ";\n      font-weight: 500;\n\n      &.disabled {\n        background-color: #ffffff;\n        color: ", ";\n      }\n    }\n  }\n  .large {\n    height: 56px;\n\n    &.solid {\n      background-color: ", ";\n      color: white;\n\n      &.disabled {\n        background-color: ", ";\n        border: none;\n        color: #ffffff;\n      }\n    }\n    &.default {\n      background-color: #ffffff;\n      color: ", ";\n      border: 1px solid ", ";\n\n      &:hover {\n        background-color: ", ";\n        border: 1px solid ", ";\n      }\n      &.disabled {\n        background-color: #ffffff;\n        color: ", ";\n      }\n    }\n  }\n"], ["\n  display: inline-block;\n  width: auto;\n  button {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 6px 12px;\n    gap: 4px;\n    border: 1px solid #d4d4d4;\n    border-radius: 8px;\n    transition: 0.3s border;\n\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 20px;\n\n    cursor: ", ";\n  }\n  .small {\n    border-radius: 4px;\n    height: 32px;\n\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 19px;\n\n    background-color: #ffffff;\n    color: ", ";\n    border: 1px solid ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n    &.disabled {\n      border-color: ", ";\n      color: ", ";\n    }\n    &.selected {\n      border-color: ", ";\n\n      &:hover {\n        background-color: #ffffff;\n      }\n      &.disabled {\n        border-color: ", ";\n        color: ", ";\n      }\n    }\n  }\n  .medium {\n    border-radius: 4px;\n    height: 40px;\n\n    &.solid {\n      background-color: ", ";\n      color: white;\n\n      &.disabled {\n        background-color: ", ";\n        border: none;\n        color: #ffffff;\n      }\n    }\n    &.default {\n      background-color: #ffffff;\n      border: 1px solid ", ";\n\n      &.disabled {\n        background-color: #ffffff;\n        color: ", ";\n      }\n    }\n    &.secondary {\n      background-color: #ffffff;\n      border: 1px solid ", ";\n      font-weight: 500;\n\n      &.disabled {\n        background-color: #ffffff;\n        color: ", ";\n      }\n    }\n  }\n  .large {\n    height: 56px;\n\n    &.solid {\n      background-color: ", ";\n      color: white;\n\n      &.disabled {\n        background-color: ", ";\n        border: none;\n        color: #ffffff;\n      }\n    }\n    &.default {\n      background-color: #ffffff;\n      color: ", ";\n      border: 1px solid ", ";\n\n      &:hover {\n        background-color: ", ";\n        border: 1px solid ", ";\n      }\n      &.disabled {\n        background-color: #ffffff;\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) { return (props.disabled ? "not-allowed" : "pointer"); }, palette.gray[800], palette.gray[300], palette.gray[100], palette.gray[300], palette.gray[300], palette.red[600], palette.gray[300], palette.gray[300], palette.red[600], palette.gray[300], palette.red[600], palette.gray[300], palette.gray[300], palette.gray[300], palette.red[600], palette.gray[300], palette.gray[800], palette.gray[300], palette.gray[100], palette.red[600], palette.gray[300]);
var templateObject_1;
