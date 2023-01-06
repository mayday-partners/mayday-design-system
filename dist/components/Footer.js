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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import palette from "../styles/palette";
import { Divider, Space } from "antd";
import styled from "@emotion/styled";
export default function Footer() {
    return (_jsx(FooterStyle, { children: _jsxs("div", __assign({ className: "main-container" }, { children: [_jsx("div", __assign({ className: "logo-wrapper" }, { children: _jsxs(Space, __assign({ size: 40 }, { children: [_jsx("a", __assign({ href: "" }, { children: "\uD68C\uC0AC\uC18C\uAC1C\uC11C" })), _jsx("a", __assign({ href: "" }, { children: "\uC774\uC6A9\uC57D\uAD00" })), _jsx("a", __assign({ href: "" }, { children: "\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68" }))] })) })), _jsxs("div", { children: [_jsxs(Space, __assign({ size: 24, split: _jsx(Divider, { type: "vertical" }), className: "contact" }, { children: [_jsx("a", __assign({ href: "tel:02-6412-9715" }, { children: "Tel. 02-6412-9715" })), _jsx("a", __assign({ href: "tel:02-6935-1190" }, { children: "Fax. 02-6935-1190" })), _jsx("a", __assign({ href: "mailto:wevent@mayday3.com" }, { children: "E-mail. wevent@mayday3.com" }))] })), _jsxs(Space, __assign({ size: 24, split: _jsx(Divider, { type: "vertical" }), className: "location" }, { children: [_jsx("p", { children: "(\uC8FC)\uBA54\uC774\uB370\uC774 \uD30C\uD2B8\uB108\uC2A4" }), _jsx("p", { children: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uBD09\uC740\uC0AC\uB85C 439 2,3\uCE35" })] })), _jsxs("div", __assign({ className: "info-wrapper" }, { children: [_jsx("p", { children: "\uC0AC\uC5C5\uC790 \uB4F1\uB85D\uBC88\uD638" }), _jsx("p", { children: "331-81-00048" })] })), _jsxs("div", __assign({ className: "info-wrapper" }, { children: [_jsx("p", { children: "\uD1B5\uC2E0 \uD310\uB9E4\uC2E0\uACE0\uBC88\uD638" }), _jsx("p", { children: "2021-\uC11C\uC6B8\uAC15\uB0A8-04283" })] }))] })] })) }));
}
var FooterStyle = styled.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #373737;\n  padding: 40px 0px;\n  margin-top: 145px;\n\n  a {\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 20px;\n    color: #ffffff;\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 18px;\n    color: #d2d2d2;\n    margin: 0;\n  }\n\n  .logo-wrapper {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 24px;\n  }\n  .location {\n    margin-bottom: 32px;\n  }\n  .contact {\n    margin-bottom: 12px;\n  }\n  .info-wrapper {\n    margin-bottom: 12px;\n    display: flex;\n    gap: 12px;\n\n    p:nth-of-type(1) {\n      width: 105px;\n    }\n  }\n\n  .ant-space {\n    display: flex;\n  }\n  .ant-divider {\n    border-color: ", ";\n    height: 8px;\n  }\n"], ["\n  background: #373737;\n  padding: 40px 0px;\n  margin-top: 145px;\n\n  a {\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 20px;\n    color: #ffffff;\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 18px;\n    color: #d2d2d2;\n    margin: 0;\n  }\n\n  .logo-wrapper {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 24px;\n  }\n  .location {\n    margin-bottom: 32px;\n  }\n  .contact {\n    margin-bottom: 12px;\n  }\n  .info-wrapper {\n    margin-bottom: 12px;\n    display: flex;\n    gap: 12px;\n\n    p:nth-of-type(1) {\n      width: 105px;\n    }\n  }\n\n  .ant-space {\n    display: flex;\n  }\n  .ant-divider {\n    border-color: ", ";\n    height: 8px;\n  }\n"])), palette.gray[600]);
var templateObject_1;
