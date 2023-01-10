import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { message, MessageArgsProps } from "antd";
import Message from "antd/es/message";
import React from "react";

import palette from "./styles/palette";

export type MessagePropsType = {
  /** 버튼요소 */
  content: JSX.Element | string;
  type?: "success" | "error" | "warning";
  icon?: SVGElement;
  top: number;
} & {
  css?: SerializedStyles;
};
/**
 * TOAST 컴포넌트
 * @param {"success" | "error" | "warning"} type toast 타입
 * @param {number} top toast top position
 * @param {JSX.Element | string} content toast text
 * @returns
 */
export default function Toast({
  content,
  type,
  icon,
  top,
  ...props
}: MessagePropsType) {
  const [messageApi, contextHolder] = message.useMessage({ top: top });

  messageApi.open({
    type: type,
    className: `${type}-toast`,
    content,
    ...props,
  });

  return <>{contextHolder}</>;
}

const MessageDiv = styled.div<MessageArgsProps>`
  .success-toast,
  .error-toast,
  .warn-toast {
    .ant-message-notice-content {
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      padding: 8px 24px;
      color: #ffffff;
      .ant-message-custom-content {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
  .success-toast .ant-message-notice-content {
    background: ${palette.blue[300]} !important;
  }
  .error-toast .ant-message-notice-content {
    background: ${palette.red[300]} !important;
  }
  .warn-toast .ant-message-notice-content {
    background: #fff !important;
    color: ${palette.gray[1000]} !important;
  }
  .ant-divider {
    border-color: ${palette.gray[300]};
    margin: 16px 0px;
  }
`;
