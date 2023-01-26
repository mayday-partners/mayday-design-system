/**
 *
 * FILE : CcpCheckbox.tsx
 *
 * DESCRIPTION : Compound Component Pattern 적용한 checkbox 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01-26
 *
 */
/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { Checkbox as AntCheckbox } from "antd";
import {
  CheckboxGroupProps,
  CheckboxOptionType,
  CheckboxValueType,
} from "antd/es/checkbox/Group";

import "../styles/checkbox.css";

export type CompoundCheckboxType = {
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
function CompoundCheckbox({
  children,
  direction = "horiz",
  css,
  ...props
}: CompoundCheckboxType) {
  return (
    <div className="checkbox-container" css={css}>
      <AntCheckbox.Group
        {...props}
        onChange={props.onChange as (checkedValue: CheckboxValueType[]) => void}
        className={`${direction}`}
      >
        {children}
      </AntCheckbox.Group>
    </div>
  );
}

CompoundCheckbox.Option = ({ ...props }: CheckboxOptionType) => {
  return <AntCheckbox {...props}>{props.label}</AntCheckbox>;
};

export default CompoundCheckbox;
