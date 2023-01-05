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
import { TextButton } from "./TextButton";
export default {
    title: "Common/TextButton",
    component: TextButton,
};
var Template = function (args) { return _jsx(TextButton, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    size: "small",
    primaryColor: "gray",
    children: "text button",
    underline: true,
    //   icon: <Icons icon="chevron_left" />,
};
