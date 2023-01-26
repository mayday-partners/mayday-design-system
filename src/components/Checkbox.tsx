/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { Checkbox as AntCheckbox } from "antd";
import { CheckboxGroupProps, CheckboxValueType } from "antd/es/checkbox/Group";

import "../styles/checkbox.css";

export type CheckboxType = {
  itemList: { key: string; label: string; isDisable: boolean }[];
  direction?: "horiz" | "vert";
} & CheckboxGroupProps & {
    css?: SerializedStyles;
  };
/**
 * 체크박스 컴포넌트
 * @param itemList 박스 안에 들어갈 요소 리스트. {key, label, isDisable}
 * @param direction 방향
 * @returns
 */
export const Checkbox = ({
  // type,
  itemList,
  css,
  direction = "horiz",
  ...props
}: CheckboxType) => {
  return (
    <div className="checkbox-container" css={css}>
      <AntCheckbox.Group
        {...props}
        onChange={props.onChange as (checkedValue: CheckboxValueType[]) => void}
        className={`${direction}`}
      >
        {itemList.map((i) => {
          return (
            <AntCheckbox value={i.key} disabled={i.isDisable} key={i.key}>
              {i.label}
            </AntCheckbox>
          );
        })}
      </AntCheckbox.Group>
    </div>
  );
};
