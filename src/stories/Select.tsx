import React, { ReactElement } from "react";
import { Interpolation, Theme } from "@emotion/react";

import "../styles/select.css";
import Icons from "../icons";
import { OptionType } from "../utils/types";

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
      {/* TODO 웹 접근성과 스타일링 사이의 괴리 */}
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
