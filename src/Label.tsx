/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

import palette from "./styles/palette";

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
} & React.HTMLAttributes<HTMLParagraphElement> & { css?: SerializedStyles };

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
  isRequired,
  css,
  ...props
}: LabelType) {
  return (
    <LabelP
      {...props}
      className={`${type} ${bold} ${isRequired ? "required" : ""}`}
      css={css}
    >
      {children}
    </LabelP>
  );
}

const LabelP = styled.p`
  color: ${(props) => props.color};
  margin: 0;

  &.head1 {
    font-size: 32px;
    line-height: 40px;
  }
  &.head2 {
    font-size: 28px;
    line-height: 35px;
  }
  &.head3 {
    font-size: 24px;
    line-height: 30px;
  }
  &.title1 {
    font-size: 20px;
    line-height: 25px;
  }
  &.title2 {
    font-size: 18px;
    line-height: 22px;
  }
  &.title3 {
    font-size: 16px;
    line-height: 20px;
  }
  &.body1 {
    font-size: 15px;
    line-height: 19px;
  }
  &.body2 {
    font-size: 13px;
    line-height: 16px;
  }
  &.body3 {
    font-size: 12px;
    line-height: 15px;
  }

  &.regular {
    font-weight: 400;
  }
  &.medium {
    font-weight: 500;
  }
  &.semibold {
    font-weight: 600;
  }
  &.bold {
    font-weight: 700;
  }

  &.required {
    &::after {
      content: " *";
      color: ${palette.red.red6};
    }
  }
`;
