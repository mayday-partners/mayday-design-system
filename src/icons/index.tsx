import React from 'react';
import * as svg from './svg';

export type IconsType = keyof typeof svg;

type IconsProps = {
    icon: IconsType;
} & React.SVGAttributes<SVGSVGElement>;

export default function Icons({ icon, ...props }: IconsProps) {
    return React.createElement(svg[icon], {
        ...props,
    });
}
