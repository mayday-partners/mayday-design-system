import { SerializedStyles } from "@emotion/react";

import "./typography.css";

type TypographyTypes =
  | "subtitle1"
  | "subtitle2"
  | "subtitle3"
  | "subtitle4"
  | "body1"
  | "body2"
  | "caption1"
  | "caption2";

type TextTypes =
  | "primary"
  | "secondary"
  | "disabled"
  | "link"
  | "error"
  | "success"
  | "info";

type TypographyPropsType = {
  children: string;
  type: TypographyTypes;
  textType?: TextTypes;
  mode?: "light" | "dark";
  css?: SerializedStyles;
};

/**
 *
 * @param children 텍스트
 * @param type 타입
 * @param textType 텍스트 컬러 타입
 * @param mode 라이트 / 다크모드
 * @param css emotion/react css
 */

export default function Typography({
  children,
  type,
  textType,
  mode = "light",
  css,
}: TypographyPropsType) {
  return (
    <p className={[type, `text-${textType}`, mode].join(" ")} css={css}>
      {children}
    </p>
  );
}
