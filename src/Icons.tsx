// import { useTheme } from "@emotion/react";
// import React from "react";
// import { ReactSVG } from "react-svg";
// import palette from "./styles/palette";

// export type IconProps = {
//   name: string;
//   color?: string;
//   width?: number;
//   height?: number;
// };

// export type IconName = "cancel" | "arrow-right";

// export const Icon = ({ color, width = 24, height = 24, name }: IconProps) => {
//   const theme = useTheme();

//   const handleBeforeInjection = (svg: SVGSVGElement) => {
//     if (!svg) return;

//     svg.setAttribute("width", width.toString());
//     svg.setAttribute("height", height.toString());
//   };

//   const reactSvgStyle = {
//     color: "inherit",
//     fontSize: 50,
//   };

//   return (
//     // <span
//     //   css={{
//     //     color: color ? "color" : palette.gray[100],
//     //   }}
//     // >
//     <ReactSVG
//       src={`../src/icons/svg/sns/facebook.svg`}
//       beforeInjection={handleBeforeInjection}
//       style={reactSvgStyle}
//     />
//     // </span>
//   );
// };
import React from "react";
import * as svg from "./icons/svg";

export type IconsType = keyof typeof svg;

export type IconsProps = {
  icon: IconsType;
} & React.SVGAttributes<SVGSVGElement>;

export default function Icons({ icon, ...props }: IconsProps) {
  return React.createElement(svg[icon], {
    ...props,
  });
}
