import { Interpolation, Theme } from "@emotion/react";
import "./textarea.css";

type TextareaPropsType = {
  value: string;
  setValue: (value: string) => void;
  textareaType: "round" | "angulate";
  isError?: boolean;
  isResize?: boolean;
} & React.ClassAttributes<HTMLTextAreaElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    css?: Interpolation<Theme>;
  };

export default function Textarea({
  value,
  setValue,
  textareaType,
  isError,
  isResize = true,
  ...props
}: TextareaPropsType) {
  return (
    <textarea
      {...props}
      id="textarea-component"
      className={[
        textareaType,
        !isResize ? "no-resize" : "",
        isError ? "error" : "",
      ].join(" ")}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
