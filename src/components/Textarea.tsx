import { Interpolation, Theme } from "@emotion/react";
import "../styles/textarea.css";

type TextareaPropsType = {
  value: string;
  setValue: (value: string) => void;
  borderType: "round" | "angulate";
  isError?: boolean;
  isResize?: boolean;
} & React.ClassAttributes<HTMLTextAreaElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    css?: Interpolation<Theme>;
  };

export default function Textarea({
  value,
  setValue,
  borderType,
  isError,
  isResize = true,
  ...props
}: TextareaPropsType) {
  return (
    <textarea
      {...props}
      id="textarea-component"
      className={[
        borderType,
        !isResize ? "no-resize" : "",
        isError ? "error" : "",
      ].join(" ")}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
