/**
 *
 * FILE : CcpRadio.tsx
 *
 * DESCRIPTION : Compound Component Pattern 적용한 radio 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01-26
 *
 */
import { SerializedStyles } from "@emotion/react";
import { CheckboxOptionType, Radio as AntRadio, RadioChangeEvent } from "antd";
import { RadioProps } from "antd/es/radio";

import "../styles/checkbox.css";

export type RadioType = {
  direction?: "horiz" | "vert";
} & RadioProps & {
    css?: SerializedStyles;
  };
function Radio({ direction = "horiz", css, children, ...props }: RadioType) {
  return (
    <div className="radio-container" css={css}>
      <AntRadio.Group
        {...props}
        onChange={props.onChange as (e: RadioChangeEvent) => void}
        className={`${direction}`}
      >
        {children}
      </AntRadio.Group>
    </div>
  );
}

Radio.Option = ({ ...props }: CheckboxOptionType) => {
  return <AntRadio {...props}>{props.label}</AntRadio>;
};

export default Radio;
