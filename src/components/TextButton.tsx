import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import palette from "../styles/palette";

export type TextButtonType = {
  children: string;
  size?: "small" | "large";
  primaryColor?: "black" | "blue" | "gray";
  underline: boolean;
  icon?: React.FunctionComponentElement<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
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
export const TextButton = ({
  children,
  size,
  primaryColor,
  underline,
  icon,
  ...props
}: TextButtonType) => {
  return (
    <TextButtonDiv>
      <button
        {...props}
        className={`${size} ${primaryColor} ${underline ? "underline" : ""}`}
      >
        {icon}
        {children}
      </button>
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
    color: ${palette.gray[800]};
  }
  .gray {
    color: ${palette.gray[600]};
  }
  .blue {
    color: ${palette.blue[700]};
  }

  .underline {
    text-decoration: underline;
  }
`;
