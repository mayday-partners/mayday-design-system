import React from "react";
import styled from "@emotion/styled";
import palette from "./styles/palette";
import { Alert as AntAlert } from "antd";

export type AlertType = {
  message: string;
  type: "success" | "warning" | "info" | "error";
  showIcon?: boolean;
  closable?: boolean;
  description?: string;
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
    <AntAlert
      {...props}
      showIcon={showIcon}
      closable={closable}
      message={message}
      type={type}
      className={`${type} `}
    ></AntAlert>
  );
}
