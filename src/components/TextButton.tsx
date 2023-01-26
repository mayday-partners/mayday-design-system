/**
 *
 * FILE : TextButton.tsx
 *
 * DESCRIPTION : 텍스트 버튼 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01
 *
 */
import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import { Button, ButtonProps } from "antd";

import "../styles/textbutton.css";

export type TextButtonType = {
  children: string | JSX.Element; // svg 파일이 npm을 통해 publish 되지않음. 각 프로젝트 단위에서 아이콘 사용할 수 있도록
  size?: "small" | "large";
  primaryColor?: "black" | "blue" | "gray";
  underline?: boolean;
} & Omit<ButtonProps, "size"> & {
    css?: SerializedStyles;
  };
/**
 * 텍스트 버튼 컴포넌트
 * @param children 버튼에 들어갈 요소
 * @param {'small' |  'large'} [size='small'] 버튼 크기
 * @param {'black' | 'blue' | 'gray'} primaryColor 버튼 색상
 * @param underline 텍스트 언더라인 유무
 * @returns
 */
export const TextButton = ({
  children,
  size = "small",
  primaryColor,
  underline,
  css,
  ...props
}: TextButtonType) => {
  return (
    <div className="textbutton-container" css={css}>
      <Button
        {...props}
        className={`${size} ${primaryColor} ${underline ? "underline" : ""}`}
      >
        {children}
      </Button>
    </div>
  );
};
