import { HTMLAttributes, KeyboardEvent, ReactElement } from "react";
import { Dayjs } from "dayjs";
import { DatePickerProps, Input, InputProps, TimePickerProps } from "antd";
import { SerializedStyles } from "@emotion/react";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";

import Label from "../components/Label";
import Icons from "../icons";

import palette from "../styles/palette";

import "../styles/input.css";

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

function CompoundInput({
  children,
  css,
  label,
  ...props
}: {
  children: ReactElement;
  css?: SerializedStyles;
  label?: string | ReactElement; // 기본 라벨 스타일과 다르다면 라벨 컴포넌트 바로 넣을 수 있도록
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} id="input-container" css={css}>
      {/*  */}
      {label && typeof label === "string" ? (
        <Label type="body1" bold="medium" color={palette.gray.gray6}>
          {label}
        </Label>
      ) : (
        label
      )}
      {children}
    </div>
  );
}

type BaseType = {
  onChange: (value: any) => void;
  onPressEnter?: _.DebouncedFunc<() => void> | (() => void);
  option?: string;
  value?: any;
};
type InputDateType = BaseType & Omit<DatePickerProps, "picker" & "value">;

CompoundInput.Date = function InputDate({
  onChange,
  ...restProps
}: InputDateType) {
  return (
    <div className="input-date">
      <DatePicker
        {...restProps}
        placeholder="연도/월/일"
        onChange={onChange}
        suffixIcon={<Icons icon="calendar" />}
      />
    </div>
  );
};

CompoundInput.DateTime = function InputDateTime({
  onChange,
  ...restProps
}: InputDateType) {
  const datetimeProps = {
    showTime: true,
  };
  return (
    <div className="input-date">
      <DatePicker
        {...restProps}
        {...datetimeProps} // ANCHOR showTime 타입에러
        format={"YYYY/MM/DD HH:mm"}
        placeholder="연도/월/일 00:00"
        onChange={onChange}
        suffixIcon={<Icons icon="calendar" />}
      />
    </div>
  );
};

type InputTimeType = BaseType & Omit<TimePickerProps, "picker" & "value">;

CompoundInput.Time = function InputTime({
  onChange,
  ...restProps
}: InputTimeType) {
  return (
    <div className="input-date">
      <DatePicker.TimePicker
        {...restProps}
        format={"HH:mm"}
        placeholder="00:00"
        onChange={onChange}
        suffixIcon={<Icons icon="clock" />}
      />
    </div>
  );
};

type InputTextType = BaseType & Omit<InputProps, "value">;

CompoundInput.Text = function InputText({
  onPressEnter,
  onChange,
  ...restProps
}: InputTextType) {
  const onKeyDown = (event: KeyboardEvent) => {
    // lodash 수정
    if (
      event.key === "Enter" &&
      event.nativeEvent.isComposing === false &&
      onPressEnter
    ) {
      onPressEnter();
    }
  };
  return (
    <div className="input-text">
      <Input {...restProps} onPressEnter={onKeyDown} onChange={onChange} />
    </div>
  );
};

export default CompoundInput;
