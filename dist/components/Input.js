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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import styled from "@emotion/styled";
import { DatePicker } from "antd";
import palette from "../styles/palette";
import Icons from "./icons";
export var Input = function (_a) {
    var type = _a.type, onPressEnter = _a.onPressEnter, setValue = _a.setValue, 
    //   disabled,
    props = __rest(_a, ["type", "onPressEnter", "setValue"]);
    var onKeyDown = function (event) {
        // lodash 수정
        if (event.key === "Enter" &&
            event.nativeEvent.isComposing === false &&
            onPressEnter) {
            onPressEnter();
        }
    };
    if (type === "date") {
        // TODO dayjs config
        return (_jsx(DatePickerDiv, { children: _jsx(DatePicker, { placeholder: "0000/00/00", suffixIcon: _jsx(Icons, { icon: "calendar" }), onChange: function (event) { return setValue(event !== null && event !== void 0 ? event : ""); } }) }));
    }
    else
        return (_jsxs(InputDiv, __assign({ className: props.disabled ? "disabled" : "" }, { children: [type === "search" ? _jsx(Icons, { icon: "search" }) : _jsx(_Fragment, {}), _jsx("input", __assign({}, props, { onKeyDown: onKeyDown, onChange: function (event) { return setValue(event.target.value); } }))] })));
};
var InputDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 232px;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  padding: 0 0 0 16px;\n  cursor: text;\n\n  &:focus-within {\n    // \uC790\uC2DD\uC694\uC18C \uD3EC\uCEE4\uC2A4 \uC778\uC2DD\n    border-color: ", ";\n  }\n\n  input {\n    border: none;\n\n    &:focus {\n      outline: none;\n    }\n    &::placeholder {\n      font-size: 15px;\n      font-weight: 500;\n      line-height: 19px;\n      color: ", ";\n    }\n  }\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n\n    input {\n      color: ", ";\n      cursor: not-allowed;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 232px;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  padding: 0 0 0 16px;\n  cursor: text;\n\n  &:focus-within {\n    // \uC790\uC2DD\uC694\uC18C \uD3EC\uCEE4\uC2A4 \uC778\uC2DD\n    border-color: ", ";\n  }\n\n  input {\n    border: none;\n\n    &:focus {\n      outline: none;\n    }\n    &::placeholder {\n      font-size: 15px;\n      font-weight: 500;\n      line-height: 19px;\n      color: ", ";\n    }\n  }\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n\n    input {\n      color: ", ";\n      cursor: not-allowed;\n    }\n  }\n"])), palette.gray[300], palette.gray[600], palette.gray[400], palette.gray[100], palette.gray[300], palette.gray[600]);
var DatePickerDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .ant-picker {\n    width: 232px;\n    height: 40px;\n    border-radius: 2px;\n    border-color: ", ";\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    .ant-picker-input {\n      input {\n        font-weight: 500;\n        font-size: 15px;\n        line-height: 19px;\n\n        &::placeholder {\n          color: ", ";\n        }\n      }\n    }\n    .ant-picker-suffix {\n      color: ", ";\n    }\n  }\n  .ant-picker-focused {\n    box-shadow: none;\n    border-color: ", ";\n\n    .ant-picker-input input {\n      color: ", ";\n    }\n  }\n  .ant-picker-clear {\n    right: 20px;\n  }\n"], ["\n  .ant-picker {\n    width: 232px;\n    height: 40px;\n    border-radius: 2px;\n    border-color: ", ";\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    .ant-picker-input {\n      input {\n        font-weight: 500;\n        font-size: 15px;\n        line-height: 19px;\n\n        &::placeholder {\n          color: ", ";\n        }\n      }\n    }\n    .ant-picker-suffix {\n      color: ", ";\n    }\n  }\n  .ant-picker-focused {\n    box-shadow: none;\n    border-color: ", ";\n\n    .ant-picker-input input {\n      color: ", ";\n    }\n  }\n  .ant-picker-clear {\n    right: 20px;\n  }\n"])), palette.gray[300], palette.gray[300], palette.gray[400], palette.gray[600], palette.gray[600], palette.gray[800]);
var templateObject_1, templateObject_2;
