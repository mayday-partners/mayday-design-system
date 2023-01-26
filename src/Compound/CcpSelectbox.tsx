/**
 *
 * FILE : CcpSelectbox.tsx
 *
 * DESCRIPTION : Compound Component Pattern 적용한 select 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01-25
 *
 */
import { SerializedStyles } from "@emotion/react";
import { Select, SelectProps } from "antd";
import { OptionProps } from "antd/es/select";
import { ReactElement, ReactNode } from "react";
import Icons from "../icons";
import Label from "../components/Label";
import palette from "../styles/palette";

import "../styles/selectbox.css";

export type CompoundSelectBoxType = {
  label?: string | ReactElement;
  additionalUnit?: string | ReactElement;
} & { css?: SerializedStyles } & SelectProps;

function Selectbox({
  children,
  label,
  additionalUnit,
  css,
  ...props
}: CompoundSelectBoxType) {
  return (
    <div className="selectbox-container" css={css}>
      {label && typeof label === "string" ? (
        <Label type="body1" bold="medium" color={palette.gray.gray6}>
          {label}
        </Label>
      ) : (
        label
      )}
      <div className="selectbox-wrapper">
        <Select
          {...props}
          suffixIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {additionalUnit && (
                <Label type="body1" bold="medium" color={palette.red.red5}>
                  {additionalUnit}
                </Label>
              )}
              {<Icons icon="chevron_down" />}
            </div>
          }
        >
          {children}
        </Select>
      </div>
    </div>
  );
}

Selectbox.Option = function SelectOption({
  value,
  children,
  ...props
}: { value: any } & OptionProps) {
  return (
    <Select.Option {...props} value={value} key={value}>
      {children}
    </Select.Option>
  );
};

export default Selectbox;
