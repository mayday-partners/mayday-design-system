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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { Input } from "./Input";
export default {
    title: "Common/Input",
    component: Input,
};
var Template = function (args) { return _jsx(Input, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    placeholder: "placeholder",
    type: "search",
    setValue: function (value) { return console.log(value); },
    disabled: false,
};
export var Date = Template.bind({});
Date.args = {
    type: "date",
    setValue: function (value) { return console.log(value); },
};
