import { Interpolation, SerializedStyles, Theme, css } from "@emotion/react";
import {
  ChangeEvent,
  ClassAttributes,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";

import "../styles/radio.css";
import { OptionType } from "../utils/types";

type RadioPropsType = {
  options: OptionType[];
  item: string;
  setItem: Dispatch<SetStateAction<string>>;
  horizontal?: boolean;
  wrapperCss?: SerializedStyles;
} & ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> & {
    css?: Interpolation<Theme>;
  };

export default function Radio({
  options,
  item,
  setItem,
  horizontal,
  wrapperCss,
}: RadioPropsType) {
  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  return (
    <div
      className="radio-wrapper"
      css={css`
        flex-direction: ${horizontal ? "row" : "column"};
        ${wrapperCss}
      `}
    >
      {options.map((option, index) => (
        <div className="radio-row" key={`radio-row-${option.label}-${index}`}>
          <input
            type="radio"
            id={option.value}
            value={option.value}
            checked={option.value === item}
            onChange={onChangeRadio}
          />
          <label htmlFor={option.value} className="radio-label">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}
