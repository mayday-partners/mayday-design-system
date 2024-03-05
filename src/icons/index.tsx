import React from "react";
import * as svg from "../icons/svg";

export type IconsType = keyof typeof svg;

export type IconsProps = {
  icon: IconsType;
} & React.SVGAttributes<SVGSVGElement>;

export default function Icons({ icon, ...props }: IconsProps) {
  console.log(svg, svg[icon], icon);
  return React.createElement(svg[icon], {
    ...props,
  });
}
