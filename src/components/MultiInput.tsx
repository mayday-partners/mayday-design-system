/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import palette from "../styles/palette";
import { Button } from "./Button";
import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import { SerializedStyles } from "@emotion/utils";

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
    <MultiInputDiv css={css}>
      <div>{children}</div>
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
    </MultiInputDiv>
  );
}

const MultiInputDiv = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 24px;
  border: 1px solid ${palette.gray.gray2};
  border-radius: 8px;
  align-items: center;

  .button-wrapper {
    display: flex;
    gap: 16px;
    align-items: end;

    button {
      width: fit-content;
    }
  }
`;
