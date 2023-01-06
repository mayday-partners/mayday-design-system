import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { Button as AntButton, ButtonProps } from "antd";

import palette from "./styles/palette";

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
  }
  .small {
    border-radius: 4px;
    height: 32px;

    font-weight: 500;
    font-size: 15px;
    line-height: 19px;

    background-color: #ffffff;
    color: ${palette.gray[800]};
    border: 1px solid ${palette.gray[300]};

    &:hover {
      background-color: ${palette.gray[100]};
    }
    &.disabled {
      border-color: ${palette.gray[300]};
      color: ${palette.gray[300]};
    }
    &.selected {
      border-color: ${palette.red[600]};

      &:hover {
        background-color: #ffffff;
      }
      &.disabled {
        border-color: ${palette.gray[300]};
        color: ${palette.gray[300]};
      }
    }
  }
  .medium {
    border-radius: 4px;
    width: 232px;
    height: 40px;

    &.solid {
      background-color: ${palette.red[600]};
      color: white;

      &.disabled {
        background-color: ${palette.gray[300]};
        border: none;
        color: #ffffff;
      }
    }
    &.default {
      background-color: #ffffff;
      border: 1px solid ${palette.red[600]};

      &.disabled {
        background-color: #ffffff;
        color: ${palette.gray[300]};
      }
    }
    &.secondary {
      background-color: #ffffff;
      border: 1px solid ${palette.gray[300]};
      font-weight: 500;

      &.disabled {
        background-color: #ffffff;
        color: ${palette.gray[300]};
      }
    }
  }
  .large {
    width: 400px;
    height: 56px;

    &.solid {
      background-color: ${palette.red[600]};
      color: white;

      &.disabled {
        background-color: ${palette.gray[300]};
        border: none;
        color: #ffffff;
      }
    }
    &.default {
      background-color: #ffffff;
      color: ${palette.gray[800]};
      border: 1px solid ${palette.gray[300]};

      &:hover {
        background-color: ${palette.gray[100]};
        border: 1px solid ${palette.red[600]};
      }
      &.disabled {
        background-color: #ffffff;
        color: ${palette.gray[300]};
      }
    }
  }
`;
