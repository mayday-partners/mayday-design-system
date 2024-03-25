import { Interpolation, SerializedStyles, Theme, css } from "@emotion/react";
import {
  ChangeEvent,
  ClassAttributes,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";

import "../styles/checkbox.css";
import { OptionType } from "../utils/types";
import Icons from "../icons";
import palette from "../styles/palette";
import useIsDarkMode from "../utils/useIsDarkMode";

type CheckboxPropsType = {
  options: OptionType[];
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
  horizontal?: boolean;
  wrapperCss?: SerializedStyles;
} & ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> & {
    css?: Interpolation<Theme>;
  };

export default function Checkbox({
  options,
  items,
  setItems,
  horizontal = false,
  wrapperCss,
  ...props
}: CheckboxPropsType) {
  const isDarkMode = useIsDarkMode();

  const onChangeEachCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (items?.includes(e.target.value)) {
      setItems((prev) => [...prev.filter((p) => p !== e.target.value)]);
    } else {
      setItems((prev) => [...prev, e.target.value]);
    }
  };

  return (
    <div
      className="checkbox-wrapper"
      css={css`
        flex-direction: ${horizontal ? "row" : "column"};

        ${wrapperCss}
      `}
    >
      {options.map((option, index) => (
        <div
          className="checkbox-row"
          key={`checkbox-row-${option.label}-${index}`}
        >
          <input
            type="checkbox"
            value={option.value}
            checked={items.includes(option.value)}
            id={option.value}
            onChange={onChangeEachCheckbox}
            {...props}
          />
          <label
            htmlFor={option.value}
            className={`checkbox-item ${
              items.includes(option.value)
                ? "checkbox-checked"
                : "checkbox-default"
            }`}
          >
            {items.includes(option.value) ? (
              <Icons
                icon="checked"
                width={16}
                height={16}
                color={
                  isDarkMode
                    ? palette.textColor.dark.primary
                    : palette.textColor.light.primary
                }
              />
            ) : (
              <div></div>
            )}
          </label>
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}
