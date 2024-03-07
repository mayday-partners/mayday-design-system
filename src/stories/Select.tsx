import React, { ReactElement } from "react";

import "./select.css";
import { Interpolation, Theme } from "@emotion/react";
import Icons from "../icons";
import palette from "../styles/palette";

type OptionType = {
  value: string;
  label: string | number | ReactElement;
};

type SelectPropsType = {
  selectType: "round" | "angulate";
  options: Array<OptionType>;
  width?: string;
} & React.ClassAttributes<HTMLSelectElement> &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    css?: Interpolation<Theme>;
  };

export default function Select({
  selectType,
  options,
  width,
  ...props
}: SelectPropsType) {
  return (
    <div
      style={{
        display: "flex",
        width: width ?? "100%",
        alignItems: "center",
        position: "relative",
      }}
    >
      <select
        {...props}
        id="select-component"
        className={[selectType === "round" ? "round" : "angulate"].join(" ")}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <Icons
        icon="round_arrow_down_16"
        style={{
          position: "absolute",
          right: 16,
        }}
      />
    </div>
  );
}
