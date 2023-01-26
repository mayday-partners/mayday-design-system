import { ReactNode } from "react";
import { message, MessageArgsProps } from "antd";

import "../styles/Toast.css";

export type MessagePropsType = {
  /** 버튼요소 */
  content: JSX.Element | string;
  type?: "success" | "error" | "warning";
  icon?: ReactNode;
  top: number;
};
/**
 * TOAST 컴포넌트
 * @param {"success" | "error" | "warning"} type toast 타입
 * @param {number} top toast top position
 * @param {JSX.Element | string} content toast text
 * @returns
 */

const openToast = (e: any) => {
  message.open(e);
};

export default function Toast({
  content,
  type,
  icon,
  top,
  ...props
}: MessagePropsType) {
  return (
    <>
      {openToast({
        type: type,
        className: `${type}-toast`,
        content,
        top: top,
        icon,
        ...props,
      })}
    </>
  );
}
