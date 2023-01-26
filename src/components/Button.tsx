/**
 *
 * FILE : Button.tsx
 *
 * DESCRIPTION : 버튼 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01
 *
 */
import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { Button as AntButton, ButtonProps } from "antd";
import React from "react";

import palette from "../styles/palette";

export type ButtonPropsType = {
  /** 버튼요소 */
  children: JSX.Element | string;
  size?: "small" | "medium" | "large";
  type?: "default" | "solid" | "secondary" | "selected";
  // htmlType: Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>; // ??
  htmlType?: "submit" | "reset" | "button";
} & Omit<ButtonProps, "size" | "type"> & {
    css?: SerializedStyles;
  };

/**
 * 버튼 컴포넌트
 * @param children 버튼에 들어갈 요소
 * @param {'small' | 'medium' | 'large'} [size='medium'] 버튼 크기
 * @param solid 버튼 스타일
 * @param primaryColor 버튼 색상
 * @param htmlType
 * @returns
 */
export const Button = ({
  children,
  size,
  type,
  htmlType,
  ...props
}: ButtonPropsType) => {
  return (
    <ButtonDiv
      className={props.className} // props 로 넘겨주는 css 는 className 으로 넘어옴!
      disabled={props.disabled}
    >
      <AntButton
        {...props}
        className={`${size} ${type} ${props.disabled ? "disabled" : ""}`}
        htmlType={htmlType}
      >
        {children}
      </AntButton>
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div<ButtonPropsType>`
  display: inline-block;
  box-sizing: border-box;
  width: auto;

  button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    transition: 0.3s border;

    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    &:focus-visible {
      outline: none !important;
    }
  }
  .small {
    border-radius: 4px;
    height: 32px !important;

    font-weight: 500;
    font-size: 15px;
    line-height: 19px;

    background-color: #ffffff;
    color: ${palette.gray.gray8};
    border: 1px solid ${palette.gray.gray3};

    &:hover {
      background-color: ${palette.gray.gray1};
      color: ${palette.gray.gray8};
      border-color: ${palette.gray.gray3};
    }

    &.disabled {
      border-color: ${palette.gray.gray3};
      color: ${palette.gray.gray3};

      &:hover {
        background-color: #ffffff;
      }
    }
    &.selected {
      border-color: ${palette.red.red6};

      &:hover {
        background-color: #ffffff;
        color: ${palette.gray.gray8};
      }
      &.disabled {
        border-color: ${palette.gray.gray3};
        color: ${palette.gray.gray3};
      }
    }
  }
  .medium {
    border-radius: 4px;
    width: 232px;
    height: 40px;

    &.solid {
      border: none !important;
      background-color: ${palette.red.red6};
      color: white;

      &.disabled {
        background-color: ${palette.gray.gray3};
        border: none;
        color: #ffffff;
      }

      &:hover {
        border: none;
      }
    }
    &.default {
      background-color: #ffffff;
      border: 1px solid ${palette.red.red6};
      color: ${palette.gray.gray8};

      &.disabled {
        background-color: #ffffff;
        color: ${palette.gray.gray3};
        border-color: ${palette.gray.gray3};
        pointer-events: none;
        cursor: not-allowed;
      }
      &:hover {
        color: ${palette.gray.gray8};
      }
    }
    &.secondary {
      background-color: #ffffff;
      border: 1px solid ${palette.gray.gray3};
      font-weight: 500;

      &.disabled {
        background-color: #ffffff;
        color: ${palette.gray.gray3};
      }
      &:hover {
        color: ${palette.gray.gray8};
      }
    }
  }
  .large {
    width: 400px;
    height: 56px !important;

    &.solid {
      border: none !important;
      background-color: ${palette.red.red6};
      color: white;

      &.disabled {
        background-color: ${palette.gray.gray3};
        border: none;
        color: #ffffff;
      }
    }
    &.default {
      background-color: #ffffff;
      color: ${palette.gray.gray8};
      border: 1px solid ${palette.gray.gray3};

      &:hover {
        background-color: ${palette.gray.gray1};
        border: 1px solid ${palette.red.red6};
      }
      &.disabled {
        background-color: #ffffff;
        color: ${palette.gray.gray3};
      }
    }
  }
  .solid {
    border: none;
  }
`;
