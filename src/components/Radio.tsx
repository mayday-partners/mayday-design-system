import { SerializedStyles } from "@emotion/react";
import {
  Radio as AntRadio,
  Checkbox as AntCheckbox,
  RadioGroupProps,
  RadioChangeEvent,
} from "antd";
import { RadioProps } from "antd/es/radio";

import "../styles/checkbox.css";

export type RadioType = {
  itemList: { key: string; label: string; isDisable: boolean }[];
  // type: "checkbox" | "radio";
  direction?: "horiz" | "vert";
} & RadioProps & {
    css?: SerializedStyles;
  };

export const Radio = ({
  direction = "horiz",
  css,
  itemList,
  ...props
}: RadioType) => {
  return (
    <div className="radio-container" css={css}>
      <AntRadio.Group
        {...props}
        onChange={props.onChange as (e: RadioChangeEvent) => void}
        className={`${direction}`}
      >
        {itemList.map((i) => {
          return (
            <AntRadio value={i.key} disabled={i.isDisable} key={i.key}>
              {i.label}
            </AntRadio>
          );
        })}
      </AntRadio.Group>
    </div>
  );
};
