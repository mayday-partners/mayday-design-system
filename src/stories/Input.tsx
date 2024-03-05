import React from "react";
import { Interpolation, Theme } from "@emotion/react";

import "./input.css";

type InputPropsType = {
  inputType: "round" | "angulate";
  value: string;
  setValue: (value: string) => void;
  isError?: boolean;
  hasValidation?: boolean;
  validationOkText?: string;
  validationErrorText?: string;
} & React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    css?: Interpolation<Theme>;
  };

export default function Input({
  inputType,
  value,
  setValue,
  isError,
  hasValidation,
  validationErrorText,
  validationOkText,
  ...props
}: InputPropsType) {
  return (
    <>
      <input
        {...props}
        id="input-component"
        className={[
          isError !== undefined ? (!isError ? "success" : "error") : "",
          inputType === "round" ? "round" : "angulate",
        ].join(" ")}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {!!hasValidation && isError !== undefined && (
        <p className={isError ? "text-error" : "text-success"}>
          {!isError ? validationOkText : validationErrorText}
        </p>
      )}
    </>
  );
}
