import { SerializedStyles } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";
export type TextButtonType = {
    children: string;
    size?: "small" | "large";
    primaryColor?: "black" | "blue" | "gray";
    underline: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & {
    css?: SerializedStyles;
};
/**
 * 텍스트 버튼 컴포넌트
 * @param children 버튼에 들어갈 요소
 * @param {'small' |  'large'} [size='small'] 버튼 크기
 * @param {'black' | 'blue' | 'gray'} primaryColor 버튼 색상
 * @param underline 텍스트 언더라인 유무
 * @param icon 아이콘 컴포넌트
 * @returns
 */
export declare const TextButton: ({ children, size, primaryColor, underline, ...props }: TextButtonType) => import("@emotion/react/jsx-runtime").JSX.Element;
