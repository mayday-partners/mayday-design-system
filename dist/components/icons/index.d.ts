import React from "react";
import * as svg from "./svg";
export type IconsType = keyof typeof svg;
export type IconsProps = {
    icon: IconsType;
} & React.SVGAttributes<SVGSVGElement>;
export default function Icons({ icon, ...props }: IconsProps): React.FunctionComponentElement<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>;
