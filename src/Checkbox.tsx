import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Radio,
  Checkbox as AntCheckbox,
  RadioGroupProps,
  RadioChangeEvent,
} from "antd";
import { CheckboxGroupProps, CheckboxValueType } from "antd/es/checkbox/Group";
import palette from "./styles/palette";

export type CheckboxType = {
  itemList: { key: string; label: string; isDisable: boolean }[];
  type: "checkbox" | "radio";
} & (CheckboxGroupProps | RadioGroupProps) & {
    css?: SerializedStyles;
  };
/**
 * 체크박스 컴포넌트
 * @param {'checkbox' | 'radio'} type 박스 타입
 * @param itemList 박스 안에 들어갈 요소 리스트. {key, label, isDisable}
 * @returns
 */
export const Checkbox = ({ type, itemList, ...props }: CheckboxType) => {
  if (type === "radio") {
    return (
      <BoxDiv className={props.className}>
        <Radio.Group onChange={props.onChange as (e: RadioChangeEvent) => void}>
          {itemList.map((i) => {
            return (
              <Radio value={i.key} disabled={i.isDisable} key={i.key}>
                {i.label}
              </Radio>
            );
          })}
        </Radio.Group>
      </BoxDiv>
    );
  } else {
    return (
      <BoxDiv className={props.className}>
        <AntCheckbox.Group
          onChange={
            props.onChange as (checkedValue: CheckboxValueType[]) => void
          }
        >
          {itemList.map((i) => {
            return (
              <AntCheckbox value={i.key} disabled={i.isDisable}>
                {i.label}
              </AntCheckbox>
            );
          })}
        </AntCheckbox.Group>
      </BoxDiv>
    );
  }
};

const BoxDiv = styled.div`
  .ant-radio-group,
  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 24.5px;

    .ant-radio-wrapper,
    .ant-checkbox-wrapper {
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      color: ${palette.gray[800]};

      .ant-radio .ant-radio-inner,
      .ant-checkbox .ant-checkbox-inner {
        border-color: ${palette.gray[300]};
      }
      .ant-radio-checked .ant-radio-inner,
      .ant-checkbox-checked .ant-checkbox-inner {
        border-color: ${palette.blue[600]};
        background-color: ${palette.blue[600]};
      }
    }
  }
  .ant-checkbox-wrapper {
    margin: 0;
  }
`;
