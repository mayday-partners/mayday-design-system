/**
 *
 * FILE : Label.tsx
 *
 * DESCRIPTION : 라벨, 텍스트 컴포넌트.
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01
 *
 */
/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import { css as emotion, SerializedStyles } from "@emotion/react";

import "../styles/label.css";

export type LabelType = {
  children: string | ReactElement;
  type:
    | "head1"
    | "head2"
    | "head3"
    | "title1"
    | "title2"
    | "title3"
    | "body1"
    | "body2"
    | "body3";
  bold?: "regular" | "medium" | "semibold" | "bold";
  isRequired?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & { css?: SerializedStyles };

/**
 * LABEL 컴포넌트
 * @param {"head1" | "head2" | "head3" | "title1" | "title2" | "title3" | "body1" | "body2" | "body3"} type label 타입
 * @param {"regular" | 'medium' | 'semibold' | 'bold'} bold label 굵기
 * @param isRequired 필수 표시
 * @returns
 */
export default function Label({
  children,
  type,
  bold = "regular",
  isRequired = false,
  css,
  ...props
}: LabelType) {
  return (
    <div
      {...props}
      className={`label-container ${type} ${bold} ${
        isRequired ? "required" : ""
      }`}
      css={emotion`
        ${css}
        color: ${props.color}
      `}
    >
      {children}
    </div>
  );
}
