import React from "react";
import * as svg from "../icons/svg";

export type IconsType = keyof typeof svg;

export type IconsProps = {
  icon: IconsType;
} & React.SVGAttributes<SVGSVGElement>;

export default function Icons({ icon, ...props }: IconsProps) {
  // NOTE svg width/height 비율에 따라 크기 변경되도록 viewBox 설정
  // NOTE 16/24 기준은 디자인 모듈화 참고
  const viewBox =
    icon.includes("common_") || icon.includes("_24")
      ? "0 0 24 24"
      : "0 0 16 16";
  return React.createElement(svg[icon], {
    viewBox,
    ...props,
  });
}
