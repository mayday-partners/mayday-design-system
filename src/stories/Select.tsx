import { ReactElement } from "react";

type OptionType = {
  value: string;
  label: string | number | ReactElement;
};

type SelectPropsType = {
  selectType: "round" | "angulate";
  options: Array<OptionType>;
};

export default function Select({ selectType, options }: SelectPropsType) {
  return (
    <select id="select-component" className="">
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
