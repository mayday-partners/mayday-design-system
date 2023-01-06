import styled from "@emotion/styled";
import { DatePicker } from "antd";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import React from "react";
import { InputHTMLAttributes, KeyboardEvent } from "react";
import palette from "../styles/palette";

export type InputType = {
  type: "default" | "option" | "search" | "date" | "dropbox";
  setValue: (value: string | Dayjs) => void;
  onPressEnter?: _.DebouncedFunc<() => void> | (() => void);
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  type,
  onPressEnter,
  setValue,
  //   disabled,
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
      <DatePickerDiv>
        <DatePicker
          placeholder="0000/00/00"
          onChange={(event) => setValue(event ?? "")}
        />
      </DatePickerDiv>
    );
  } else
    return (
      <InputDiv className={props.disabled ? "disabled" : ""}>
        <input
          {...props}
          onKeyDown={onKeyDown}
          onChange={(event) => setValue(event.target.value)}
        />
      </InputDiv>
    );
};

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 232px;
  height: 40px;
  border: 1px solid ${palette.gray[300]};
  border-radius: 2px;
  padding: 0 0 0 16px;
  cursor: text;

  &:focus-within {
    // 자식요소 포커스 인식
    border-color: ${palette.gray[600]};
  }

  input {
    border: none;

    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 15px;
      font-weight: 500;
      line-height: 19px;
      color: ${palette.gray[400]};
    }
  }
  &.disabled {
    background-color: ${palette.gray[100]};
    border-color: ${palette.gray[300]};

    input {
      color: ${palette.gray[600]};
      cursor: not-allowed;
    }
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
      color: ${palette.gray[800]};
    }
  }
  .ant-picker-clear {
    right: 20px;
  }
`;
