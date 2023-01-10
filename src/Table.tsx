/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
import { Table as AntTable } from "antd";
import palette from "./styles/palette";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name?: string;
  email?: string;
  phone: string;
  thumbnail?: string;
  title?: string;
  click?: number;
  link?: string;
  time?: string;
  category?: string;
  session?: string;
  speaker?: string;
  qna?: string;
  download?: string;
  star?: string;
  personnel?: string;
}

export type TableType = {
  columns: ColumnsType<DataType>;
  data: DataType[];
} & { css?: SerializedStyles };

/**
 * LABEL 컴포넌트
 * @param {"head1" | "head2" | "head3" | "title1" | "title2" | "title3" | "body1" | "body2" | "body3"} type label 타입
 * @param {"regular" | 'medium' | 'semibold' | 'bold'} bold label 굵기
 * @param isRequired 필수 표시
 * @returns
 */
export default function Table({ css, ...props }: TableType) {
  return <AntTable {...props} css={css}></AntTable>;
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
      color: ${palette.red[600]};
    }
  }
`;
