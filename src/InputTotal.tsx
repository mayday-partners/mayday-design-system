import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { ReactElement } from "react";
import { SerializedStyles } from "@emotion/react";
import { DatePickerProps, InputProps, TimePickerProps } from "antd";
import Label from "./Label";
import palette from "./styles/palette";
import Icons from "./icons";

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
type BaseType = {
  //   type?:
  //     | "default"
  //     | "option"
  //     | "search"
  //     | "date"
  //     | "datetime"
  //     | "time"
  //     | "dropbox"
  //     | "file";
  onChange: (value: any) => void;
  onPressEnter?: _.DebouncedFunc<() => void> | (() => void);
  option?: string;
  label?: string | ReactElement; // 기본 라벨 스타일과 다르다면 라벨 컴포넌트 바로 넣을 수 있도록
  //   css?: SerializedStyles;
  value?: any;
};

type InputDateType = BaseType & Omit<DatePickerProps, "picker" & "value">;

export default function CompoundInput({
  children,
  css,
  ...props
}: {
  children: ReactElement;
  css?: SerializedStyles;
}) {
  return (
    <div id="Input-container" css={css} {...props}>
      {children}
    </div>
  );
}
CompoundInput.Date = function InputDate({
  onChange,
  label,
  ...restProps
}: InputDateType) {
  return (
    <>
      {label && typeof label === "string" ? (
        <Label type="body1" bold="medium" color={palette.gray.gray6}>
          {label}
        </Label>
      ) : (
        label
      )}
      <DatePicker
        {...restProps}
        placeholder="연도/월/일"
        onChange={onChange}
        suffixIcon={<Icons icon="calendar" />}
      />
    </>
  );
};
