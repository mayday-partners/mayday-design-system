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
import Icons from "./icons";
import * as svg from "./icons/svg";
export default {
    title: "Common/Icons",
    component: Icons,
    argTypes: {
        icon: {
            description: "아이콘 이름",
            options: Object.keys(svg),
            control: { type: "select" },
        },
    },
};
var Template = function (args) {
    return _jsx(Icons, __assign({}, args, { icon: args.icon }));
};
export var Default = Template.bind({});
Default.args = {
    icon: "profile",
};
