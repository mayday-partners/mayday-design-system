import React from "react";
import { SerializedStyles } from "@emotion/react";
import { Button, ButtonProps } from "antd";
import styled from "@emotion/styled";

import palette from "./styles/palette";

export type TextButtonType = {
  children: string | JSX.Element; // svg 파일이 npm을 통해 publish 되지않음. 각 프로젝트 단위에서 아이콘 사용할 수 있도록
  primaryColor?: "black" | "blue" | "gray";
  underline?: boolean;
} & ButtonProps & {
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
  primaryColor,
  underline,
  ...props
}: TextButtonType) => {
  return (
    <TextButtonDiv className={props.className}>
      <Button
        {...props}
        className={`${props.size} ${primaryColor} ${
          underline ? "underline" : ""
        }`}
      >
        {children}
      </Button>
    </TextButtonDiv>
  );
};

const TextButtonDiv = styled.div`
  button {
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    background-color: #ffffff;
    box-shadow: none;
    cursor: pointer;
  }
  .small {
    height: 20px;

    font-weight: 500;
    font-size: 13;
    line-height: 16px;
  }
  .large {
    font-size: 15px;
    line-height: 19px;
  }

  .black {
    color: ${palette.gray.gray8};

    &:hover {
      color: ${palette.gray.gray8};
    }
  }
  .gray {
    color: ${palette.gray.gray6};

    &:hover {
      color: ${palette.gray.gray6};
    }
  }
  .blue {
    color: ${palette.blue.blue7};

    &:hover {
      color: ${palette.blue.blue7};
    }
  }

  .underline {
    text-decoration: underline;
  }
`;
