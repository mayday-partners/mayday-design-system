import { SerializedStyles } from "@emotion/react";
import { Select, SelectProps } from "antd";
import { OptionProps } from "antd/es/select";
import { ReactElement, ReactNode } from "react";
import Icons from "./icons";
import Label from "./Label";
import palette from "./styles/palette";

import "./styles/selectbox.css";

export type SelectBoxType = {
  items: { value: string; label: string | ReactNode }[];
  label?: string | ReactElement;
  additionalUnit?: string | ReactElement;
} & { css?: SerializedStyles } & SelectProps;

function CompoundSelectbox({
  children,
  label,
  css,
  additionalUnit,
  ...props
}: SelectBoxType) {
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

CompoundSelectbox.Option = function SelectOption({
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

export default CompoundSelectbox;
