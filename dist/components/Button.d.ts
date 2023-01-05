import { SerializedStyles } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";
export type ButtonPropsType = {
    /** 버튼요소 */
    children: JSX.Element | string;
    icon?: React.FunctionComponentElement<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    size?: "small" | "medium" | "large";
    type?: "default" | "solid" | "secondary" | "selected";
    htmlType?: "submit" | "reset" | "button";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    css?: SerializedStyles;
};
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
export declare const Button: ({ children, icon, size, type, htmlType, ...props }: ButtonPropsType) => import("@emotion/react/jsx-runtime").JSX.Element;
