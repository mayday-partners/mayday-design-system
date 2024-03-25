import React from "react";
import { Interpolation, Theme } from "@emotion/react";

import "../styles/input.css";
import Icons from "../icons";

type InputPropsType = {
  inputType: "round" | "angulate";
  value: string;
  setValue: (value: string) => void;
  isSearch?: boolean;
  isError?: boolean;
  hasValidation?: boolean;
  validationOkText?: string;
  validationErrorText?: string;
  onPressEnter?: () => void;
} & React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    css?: Interpolation<Theme>;
  };

export default function Input({
  inputType,
  value,
  setValue,
  isError,
  isSearch = false,
  hasValidation,
  validationErrorText,
  validationOkText,
  onPressEnter,
  ...props
}: InputPropsType) {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "fit-content",
        }}
      >
        <input
          placeholder={isSearch ? "검색어를 입력하세요." : "Place Holder"}
          {...props}
          id="input-component"
          className={[
            isError !== undefined ? (!isError ? "success" : "error") : "",
            inputType === "round" ? "round" : "angulate",
          ].join(" ")}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !!onPressEnter) {
              onPressEnter();
            }
          }}
        />
        {isSearch && (
          <Icons
            icon="round_search_16"
            width={16}
            height={16}
            style={{
              position: "absolute",
              right: 16,
              top: 16,
              //   transform: "translate(0, -50%)",
            }}
          />
        )}
      </div>

      {!!hasValidation && isError !== undefined && (
        <p className={isError ? "text-error" : "text-success"}>
          {!isError ? validationOkText : validationErrorText}
        </p>
      )}
    </>
  );
}
