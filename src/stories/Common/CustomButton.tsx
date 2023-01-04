/*------------------------------------[info]-----------------------------------------
작성자 - 이혜원
목적 - 공용 버튼 컴포넌트
------------------------------------------------------------------------------------*/
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import palette from "../../styles/palette";

export type CustomButtonPropsType = {
  /** 버튼요소 */
  children: JSX.Element | string;
  icon?: React.FunctionComponentElement<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  size?: "small" | "medium" | "large";
  type?: "primary" | "solid" | "ghost" | "warning";
  primaryColor?: string;
  // htmlType: Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>; // ??
  htmlType?: "submit" | "reset" | "button";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    css?: SerializedStyles;
  };

/**
 * 버튼 컴포넌트
 * @param children 버튼에 들어갈 요소
 * @param icon 아이콘 컴포넌트
 * @param {'small' | 'medium' | 'large'} [size='medium'] 버튼 크기
 * @param {'primary' | 'solid' | 'ghost'} [type='solid'] 버튼 스타일
 * @param color 버튼 색상
 * @param htmlType
 * @returns
 */
export const CustomButton = ({
  children,
  icon,
  size,
  type,
  primaryColor,
  htmlType,
  ...props
}: CustomButtonPropsType) => {
  return (
    <CustomButtonStyle
      css={css`
        button {
          cursor: ${props.disabled ? "not-allowed" : "pointer"};
        }
      `}
      className={props.className} // props 로 넘겨주는 css 는 className 으로 넘어옴!
      primaryColor={primaryColor}
    >
      <button
        {...props}
        className={`${size} ${type} ${props.disabled ? "disabled" : ""}`}
        type={htmlType}
      >
        <>
          {icon}
          {children}
        </>
      </button>
    </CustomButtonStyle>
  );
};

const CustomButtonStyle = styled.div<CustomButtonPropsType>`
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
  }
  .small {
    height: 32px;

    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }
  .medium {
    height: 40px;
  }
  .large {
    height: 56px;
  }

  .primary {
    background-color: ${(props) => props.primaryColor};
    border: none;
    color: #ffffff;
  }
  .solid {
    background-color: #ffffff;
    border-color: ${(props) => props.primaryColor};
    color: ${(props) => props.primaryColor};
  }
  .ghost {
    border-color: #d4d4d4;
  }
  .disabled {
    background-color: ${palette.gray[300]};
    border: none;
    color: #ffffff;
  }
`;
