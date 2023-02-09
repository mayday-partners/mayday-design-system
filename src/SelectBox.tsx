/** @jsxImportSource @emotion/react */

import React, { ReactElement, ReactNode } from "react";
import { Select, SelectProps } from "antd";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/utils";
import { css as emotionCss } from "@emotion/react";

import palette from "./styles/palette";
import Label from "./Label";
import Icons from "./icons";

export type SelectBoxType = {
  items: { value: string; label: string | ReactNode }[];
  label?: string | ReactElement;
  additionalUnit?: string | ReactElement;
} & { css?: SerializedStyles } & SelectProps;

/**
 * SELECTBOX 컴포넌트
 * @param items select 할 요소 리스트
 * @param label box 위에 라벨이 있는 경우
 * @param css
 * @param 그 외 select props (value, onChange ...)
 * @returns
 */
export default function SelectBox({
  items,
  css,
  label,
  additionalUnit,
  ...props
}: SelectBoxType) {
  return (
    <div
      css={emotionCss`
        p {
          marginBottom: 8px;
        }
        width: fit-content;
      `}
    >
      {label && (
        <Label type="body1" bold="medium" color={palette.gray.gray6}>
          {label}
        </Label>
      )}
      <SelectDiv css={css}>
        <Select
          {...props}
          suffixIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {additionalUnit && (
                <Label type="body1" bold="medium" color={palette.red.red5}>
                  {additionalUnit}
                </Label>
              )}
              {<Icons icon="chevron_down" />}
            </div>
          }
          options={items}
        />
        {/* {items.map((i) => (
            <Select.Option value={i.value} defaultValue={0} key={i.value}>
              {i.label}
            </Select.Option>
          ))} */}
        {/* </Select> */}
      </SelectDiv>
    </div>
  );
}

const SelectDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid ${palette.gray.gray3};
  border-radius: 2px;
  align-items: center;

  .ant-select {
    width: 100%;

    .ant-select-selector {
      border: none;
      box-shadow: none !important;

      font-weight: 500;
      font-size: 15px;
      line-height: 19px;

      .ant-select-selection-placeholder {
        font-size: 15px;
        font-weight: 500;
        line-height: 19px;
        color: ${palette.gray.gray4};
      }
    }
  }
  .ant-select-selection-item,
  .ant-select-selection-placeholder {
    display: flex !important;
    align-items: center !important;
  }
`;
