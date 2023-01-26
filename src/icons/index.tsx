import React from "react";
import * as svg from "./svg";

export type IconsType = keyof typeof svg;

type IconsProps = {
  icon: IconsType;
  width?: number;
  height?: number;
} & React.SVGAttributes<SVGSVGElement>;

export default function Icons({ icon, width, height, ...props }: IconsProps) {
  return React.createElement(svg[icon], {
    width,
    height,
    ...props,
  });
}
