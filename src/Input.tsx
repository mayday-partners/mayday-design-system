/** @jsxImportSource @emotion/react */

import React, { ReactElement } from "react";
import { KeyboardEvent } from "react";
import styled from "@emotion/styled";
import {
  Input as AntInput,
  InputProps,
  Checkbox,
  TimePicker,
  TimePickerProps,
  DatePickerProps,
} from "antd";
import { Dayjs } from "dayjs";
import {
  CalendarOutlined,
  SearchOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import palette from "./styles/palette";
import { SerializedStyles } from "@emotion/react";
import Label from "./Label";
import Icons from "./icons";

import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export type InputType = {
  type?:
    | "default"
    | "option"
    | "search"
    | "date"
    | "datetime"
    | "time"
    | "dropbox"
    | "file";
  onChange: (value: string | Dayjs | number | File) => void;
  onPressEnter?: _.DebouncedFunc<() => void> | (() => void);
  option?: string;
  label?: string | ReactElement;
} & InputProps & { css?: SerializedStyles } & TimePickerProps &
  DatePickerProps & { value: any };

/**
 * INPUT 컴포넌트
 * @param {"default" | "option" | "search" | "date" | 'file'} type INPUT 타입
 * @param onChange onChange 함수
 * @param onPressEnter enter 액션
 * @param option type=option 인 경우 옵션 이름
 * @param label box 위에 라벨이 있는 경우
 * @returns
 */
export const Input = ({
  type = "default",
  onPressEnter,
  onChange,
  option,
  label,
  css,
  ...props
}: InputType) => {
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

  if (type === "date") {
    // TODO dayjs config
    return (
      <DatePickerDiv className={props.className} css={css}>
        {label && (
          <Label type="body1" bold="medium" color={palette.gray.gray6}>
            {label}
          </Label>
        )}
        <DatePicker
          {...(props as any)}
          placeholder="연도/월/일"
          onChange={(event) => onChange(event ?? "")}
          suffixIcon={<Icons icon="calendar" />}
        />
      </DatePickerDiv>
    );
  } else if (type === "datetime") {
    return (
      <DatePickerDiv className={props.className} css={css}>
        {label && (
          <Label type="body1" bold="medium" color={palette.gray.gray6}>
            {label}
          </Label>
        )}
        <DatePicker
          {...(props as any)}
          format={"YYYY/MM/DD HH:mm"}
          showTime={true} // ANCHOR showTime 타입에러
          placeholder="연도/월/일 00:00"
          onChange={(event) => onChange(event ?? "")}
          suffixIcon={<Icons icon="calendar" />}
        />
      </DatePickerDiv>
    );
  } else if (type === "time") {
    return (
      <DatePickerDiv className={props.className} css={css}>
        {label && (
          <Label type="body1" bold="medium" color={palette.gray.gray6}>
            {label}
          </Label>
        )}
        <TimePicker
          {...(props as any)}
          format={"HH:mm"}
          placeholder="00:00"
          onChange={(event) => onChange(event ?? "")}
          suffixIcon={<Icons icon="clock" />}
        />
      </DatePickerDiv>
    );
  } else if (type === "option") {
    return (
      <>
        {label && (
          <Label type="body1" bold="medium" color={palette.gray.gray6}>
            {label}
          </Label>
        )}
        <InputDiv className={props.className} css={css}>
          <Checkbox onChange={(event) => onChange(event.target.value)}>
            {option}
          </Checkbox>
        </InputDiv>
      </>
    );
  } else if (type === "file") {
    return (
      <>
        {label && (
          <Label type="body1" bold="medium" color={palette.gray.gray6}>
            {label}
          </Label>
        )}
        <InputDiv className={`${props.disabled ? "disabled" : ""}`} css={css}>
          <AntInput
            {...(props as InputProps)}
            type="file"
            onPressEnter={onKeyDown}
            onChange={(event) => onChange(event.target.value)}
          />
        </InputDiv>
      </>
    );
  } else
    return (
      <>
        {label && (
          <Label type="body1" bold="medium" color={palette.gray.gray6}>
            {label}
          </Label>
        )}
        <InputDiv className={`${props.disabled ? "disabled" : ""}`} css={css}>
          {type === "search" && <Icons icon="search" />}
          <AntInput
            {...(props as InputProps)}
            style={{ height: "30px" }}
            onPressEnter={onKeyDown}
            onChange={(event) => onChange(event.target.value)}
          />
        </InputDiv>
      </>
    );
};

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  width: 232px;
  height: 40px;
  border: 1px solid ${palette.gray.gray3};
  border-radius: 2px;
  padding: 0 0 0 16px;

  &:focus-within {
    // 자식요소 포커스 인식
    border-color: ${palette.gray.gray6};
  }
  /* 공통 */
  input,
  .ant-input-affix-wrapper {
    border: none;

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
    &::placeholder {
      font-size: 15px;
      font-weight: 500;
      line-height: 19px;
      color: ${palette.gray.gray4};
    }
  }
  .ant-input-affix-wrapper-focused {
    outline: none;
    border: none;
    box-shadow: none;
  }
  &.disabled {
    background-color: ${palette.gray.gray1};
    border-color: ${palette.gray.gray3};

    input {
      color: ${palette.gray.gray6};
      cursor: not-allowed;
    }
  }
  .ant-input-disabled {
    background-color: inherit;
  }
  /* 옵션 컴포넌트 */
  .ant-checkbox-wrapper {
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    color: ${palette.gray.gray8};
  }
  /* 글자수 카운트 위치 수정 */
  .ant-input-show-count-suffix {
    position: relative;
    top: 38px;
    left: 10px;
    font-size: 13px;
  }
`;
const DatePickerDiv = styled.div`
  display: flex;
  flex-direction: column;

  .ant-picker {
    width: 232px;
    height: 40px;
    border-radius: 2px;
    border-color: ${palette.gray.gray3};

    &:hover {
      border-color: ${palette.gray.gray3};
    }

    .ant-picker-input {
      input {
        font-weight: 500;
        font-size: 15px;
        line-height: 19px;

        &::placeholder {
          color: ${palette.gray.gray4};
        }
      }
    }
    .ant-picker-suffix {
      color: ${palette.gray.gray6};
    }
  }
  .ant-picker-focused {
    box-shadow: none;
    border-color: ${palette.gray.gray6};

    .ant-picker-input input {
      color: ${palette.gray.gray8} !important;
    }
  }
  .ant-picker-clear {
    right: 20px;
  }
  .ant-picker-suffix {
    color: ${palette.gray.gray8} !important;
  }
`;
