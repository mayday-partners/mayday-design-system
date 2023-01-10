import React from "react";
import { css } from "@emotion/react";
import { Story } from "@storybook/react";

import { Input } from "../Input";
import Label from "../Label";
import MultiInput, { MultiInputType } from "../MultiInput";

import palette from "../styles/palette";

export default {
  title: "Common/MultiInput",
  component: MultiInput,
};

const Template: Story<MultiInputType> = (args) => <MultiInput {...args} />;
export const TwoItem = Template.bind({});
TwoItem.args = {
  children: (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <Label type="body1" bold="regular" color={palette.gray.gray6}>
          항목 제목
        </Label>
        <Input
          type="default"
          placeholder="항목 제목을 입력해주세요."
          onChange={(event) => console.log(event)}
          showCount
          maxLength={20}
        />
      </div>
      <div>
        <Label type="body1" bold="regular" color={palette.gray.gray6}>
          항목 상세설명
        </Label>
        <Input
          type="default"
          placeholder="항목에 들어갈 텍스트를 입력해주세요."
          onChange={(event) => console.log(event)}
          showCount
          maxLength={22}
          css={css`
            width: 420px;
          `}
        />
      </div>
    </div>
  ),
  onDelete: () => console.log("DELETE"),
  onAdd: () => console.log("ADD"),
  isAddDisabled: false,
  isDeleteDisabled: true,
};
