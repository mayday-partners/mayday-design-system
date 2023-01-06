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
import { Button } from "./Button";
export default {
    title: "Common/Button",
    component: Button,
    argTypes: {
        size: {
            description: "버튼 크기",
            defaultValue: "medium",
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
        children: {
            description: "버튼 내부 요소",
            required: true,
        },
        primaryColor: {
            description: "버튼 컬러",
            control: { type: "color" },
        },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    size: "medium",
    type: "solid",
    children: "BUTTON",
    disabled: false,
};
