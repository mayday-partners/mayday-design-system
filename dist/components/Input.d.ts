/// <reference types="lodash" />
import { Dayjs } from "dayjs";
import { InputHTMLAttributes } from "react";
export type InputType = {
    type: "default" | "option" | "search" | "date" | "dropbox";
    setValue: (value: string | Dayjs) => void;
    onPressEnter?: _.DebouncedFunc<() => void> | (() => void);
    disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
export declare const Input: ({ type, onPressEnter, setValue, ...props }: InputType) => import("@emotion/react/jsx-runtime").JSX.Element;
