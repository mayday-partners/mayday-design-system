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
import { Button, ConfigProvider, Modal as AntModal, ModalProps } from "antd";
import "../styles/modal.css";

export type ModalType = {
  type: "web" | "mobile";
  buttonType: "one" | "two";
  colorPrimary?: string;
  padding: number | [number, number];
  footerElement?: React.ReactElement;
} & ModalProps;

export default function Modal({
  type,
  buttonType,
  colorPrimary = "#FB5C30",
  padding,
  footerElement,
  children = "helloworld",
  okText = "확인",
  cancelText = "취소",
  onOk,
  onCancel,
  ...props
}: ModalType) {
  const size = type === "web" ? "large" : "middle";
  const wrapPadding =
    typeof padding === "number" ? padding : `${padding[0]}px ${padding[1]}px`;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
        },
      }}
    >
      <AntModal
        className={`${type}-modal`}
        closeIcon={<></>}
        closable={false}
        footer={<></>}
        {...props}
      >
        <div style={{ textAlign: "center", padding: wrapPadding }}>
          {children}

          {footerElement ? (
            footerElement
          ) : (
            <div style={{ marginTop: 24 }}>
              {buttonType === "one" && (
                // @ts-ignore
                <Button type="primary" size={size} onClick={onOk}>
                  {okText}
                </Button>
              )}

              {buttonType === "two" && (
                <div className="modal-footer">
                  {/* @ts-ignore */}
                  <Button size={size} onClick={onCancel}>
                    {cancelText}
                  </Button>
                  {/* @ts-ignore */}
                  <Button type="primary" size={size} onClick={onOk}>
                    {okText}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </AntModal>
    </ConfigProvider>
  );
}
