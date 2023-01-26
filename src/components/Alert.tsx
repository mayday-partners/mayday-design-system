/**
 *
 * FILE :
 *
 * DESCRIPTION :
 *
 * AUTHOR :
 *
 * DATE :
 *
 */
import React from "react";
import styled from "@emotion/styled";
import palette from "../styles/palette";
import { Alert as AntAlert } from "antd";
import { SerializedStyles } from "@emotion/react";

export type AlertType = {
  message: string;
  type: "success" | "warning" | "info" | "error";
  showIcon?: boolean;
  closable?: boolean;
  description?: string;
} & {
  css?: SerializedStyles;
};

/**
 * ALERT 컴포넌트
 * @param {"success" | "warning" | "info" | "error"} type alert 타입
 * @param message alert text
 * @param description alert description
 * @param {boolean} showIcon alert showIcon
 * @param {boolean} closable alert closable
 * @returns
 */
export default function Alert({
  message,
  type,
  showIcon,
  closable,
  ...props
}: AlertType) {
  return (
    <AlertDiv>
      <AntAlert
        {...props}
        showIcon={showIcon}
        closable={closable}
        message={message}
        type={type}
        className={`${type} `}
      ></AntAlert>
    </AlertDiv>
  );
}

const AlertDiv = styled.div`
  .ant-alert-info {
    background-color: ${palette.gray.gray2} !important;
    border: 1px solid ${palette.gray.gray3} !important;
  }
  .ant-alert-info .ant-alert-icon {
    color: ${palette.gray.gray5} !important;
  }
`;
