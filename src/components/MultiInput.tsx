/**
 *
 * FILE : MultiInput.tsx
 *
 * DESCRIPTION : 여러 줄이 추가되는 인풋 컴포넌트.
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01
 *
 */
/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import { SerializedStyles } from "@emotion/utils";

import { Button } from "./Button";

import "../styles/multi.css";

export type MultiInputType = {
  children: ReactElement;
  onDelete: (value: any) => void;
  onAdd: (value: any) => void;
  isDeleteDisabled: boolean;
  isAddDisabled: boolean;
} & { css?: SerializedStyles };

/**
 * MULTILINE INPUT 컴포넌트
 * @param children 각 라인에 들어갈 input 요소를 자식에 넣어주세요
 * @param onDelete 삭제 버튼 액션
 * @param onAdd 추가 버튼 액션
 * @param isDeleteDisabled 삭제 버튼 disable
 * @param isAddDisabled 추가 버튼 disable
 * @css
 * @returns
 */
export default function MultiInput({
  children,
  onDelete,
  onAdd,
  isDeleteDisabled,
  isAddDisabled,
  css,
}: MultiInputType) {
  return (
    <div className="multi-container" css={css}>
      <div className="multi-input">{children}</div>
      <div className="button-wrapper">
        <Button size="medium" onClick={onDelete} disabled={isDeleteDisabled}>
          <DeleteOutlined />
        </Button>
        <Button size="medium" onClick={onAdd} disabled={isAddDisabled}>
          <>
            <PlusCircleFilled />
            추가
          </>
        </Button>
      </div>
    </div>
  );
}
