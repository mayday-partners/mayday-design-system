/** @jsxImportSource @emotion/react */

import { KeyboardEvent } from "react";
import styled from "@emotion/styled";
import {
  DatePicker,
  Dropdown,
  MenuProps,
  Space,
  Input as AntInput,
  InputProps,
  Checkbox,
  TimePicker,
} from "antd";
import { Dayjs } from "dayjs";
import {
  CalendarOutlined,
  SearchOutlined,
  DownOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import palette from "./styles/palette";
import React from "react";
import { SerializedStyles } from "@emotion/react";

export type InputType = {
  type?:
    | "default"
    | "option"
    | "search"
    | "date"
    | "datetime"
    | "time"
    | "dropbox";
  onChange: (value: string | Dayjs | number) => void;
  onPressEnter?: _.DebouncedFunc<() => void> | (() => void);
  dropdownItems?: MenuProps;
  label?: string;
} & InputProps & { css?: SerializedStyles };

/**
 * INPUT 컴포넌트
 * @param {"default" | "option" | "search" | "date" | "dropbox"} type INPUT 타입
 * @param onChange onChange 함수
 * @param onPressEnter enter 액션
 * @param dropdownItems type=dropdown 인 경우, dropdown item
 * @param label type=option 인 경우 옵션 이름
 * @returns
 */
export const Input = ({
  type = "default",
  onPressEnter,
  onChange,
  dropdownItems,
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
        <DatePicker
          placeholder="연도/월/일"
          onChange={(event) => onChange(event ?? "")}
          // TODO figma 아이콘과 다름
          suffixIcon={<CalendarOutlined />}
        />
      </DatePickerDiv>
    );
  } else if (type === "datetime") {
    return (
      <DatePickerDiv className={props.className} css={css}>
        <DatePicker
          showTime
          placeholder="연도/월/일 00:00"
          onChange={(event) => onChange(event ?? "")}
          // TODO figma 아이콘과 다름
          suffixIcon={<CalendarOutlined />}
        />
      </DatePickerDiv>
    );
  } else if (type === "time") {
    return (
      <DatePickerDiv className={props.className} css={css}>
        <TimePicker
          placeholder="00:00"
          onChange={(event) => onChange(event ?? "")}
          suffixIcon={<ClockCircleOutlined />}
        />
      </DatePickerDiv>
    );
  } else if (type === "option") {
    return (
      <InputDiv className={props.className} css={css}>
        <Checkbox onChange={(event) => onChange(event.target.value)}>
          {label}
        </Checkbox>
      </InputDiv>
    );
  } else if (type === "dropbox") {
    return (
      <DropdownDiv className={props.className} css={css}>
        <Dropdown menu={dropdownItems} trigger={["click"]}>
          <Space>
            <AntInput
              {...props}
              onPressEnter={onKeyDown}
              onChange={(event) => onChange(event.target.value)}
            />
            <DownOutlined />
          </Space>
        </Dropdown>
      </DropdownDiv>
    );
  } else
    return (
      <InputDiv className={`${props.disabled ? "disabled" : ""}`} css={css}>
        {type === "search" && <SearchOutlined />}
        <AntInput
          {...props}
          onPressEnter={onKeyDown}
          onChange={(event) => onChange(event.target.value)}
        />
      </InputDiv>
    );
};

export const InputDiv = styled.div`
  display: flex;
  align-items: center;

  width: 232px;
  height: 40px;
  border: 1px solid ${palette.gray[300]};
  border-radius: 2px;
  padding: 0 0 0 16px;

  &:focus-within {
    // 자식요소 포커스 인식
    border-color: ${palette.gray[600]};
  }

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
      color: ${palette.gray[400]};
    }
  }
  .ant-input-affix-wrapper-focused {
    outline: none;
    border: none;
    box-shadow: none;
  }
  &.disabled {
    background-color: ${palette.gray[100]};
    border-color: ${palette.gray[300]};

    input {
      color: ${palette.gray[600]};
      cursor: not-allowed;
    }
  }

  .ant-checkbox-wrapper {
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    color: ${palette.gray[800]};
  }
  .ant-input-disabled {
    background-color: inherit;
  }

  .ant-input-show-count-suffix {
    position: relative;
    top: 38px;
    left: 10px;
  }
`;
const DatePickerDiv = styled.div`
  .ant-picker {
    width: 232px;
    height: 40px;
    border-radius: 2px;
    border-color: ${palette.gray[300]};

    &:hover {
      border-color: ${palette.gray[300]};
    }

    .ant-picker-input {
      input {
        font-weight: 500;
        font-size: 15px;
        line-height: 19px;

        &::placeholder {
          color: ${palette.gray[400]};
        }
      }
    }
    .ant-picker-suffix {
      color: ${palette.gray[600]};
    }
  }
  .ant-picker-focused {
    box-shadow: none;
    border-color: ${palette.gray[600]};

    .ant-picker-input input {
      color: ${palette.gray[800]} !important;
    }
  }
  .ant-picker-clear {
    right: 20px;
  }
  .ant-picker-suffix {
    color: ${palette.gray[800]} !important;
  }
`;
const DropdownDiv = styled.div`
  display: flex;
  width: fit-content;
  height: 40px;
  border: 1px solid ${palette.gray[300]};
  border-radius: 2px;
  align-items: center;
  padding: 0 8px 0 16px;

  .ant-input {
    border: none;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;

    &::placeholder {
      color: ${palette.gray[400]};
    }

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
`;