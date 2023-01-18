/** @jsxImportSource @emotion/react */
import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { ConfigProvider, Tabs, TabsProps } from "antd";
import palette from "./styles/palette";
import { Dayjs } from "dayjs";

export type TabType = {
  children?: string | ReactElement;
  type?: "line" | "card" | "editable-card";
  size?: "regular" | "medium" | "semibold" | "bold";
  onChange: (value: string | Dayjs | number | File) => void;
  items: TabsProps["items"];
  tabPosition?: "top" | "right" | "bottom" | "left";
  centered: boolean;
  activeColor: string;
} & { css?: SerializedStyles };

/**
 * TAB 컴포넌트
 * @param items 필수
 * @param {"line" | "card" | "editable-card"} type 타입
 * @param {"regular" | 'medium' | 'semibold' | 'bold'} size 타입
 * @param {"top" | "right" | "bottom" | "left"} tabPosition 타입
 * @param centered boolean
 * @param activeColor string 색상 값 변경
 * @returns
 */
export default function Tab({
  children,
  type,
  size = "regular",
  onChange,
  items,
  tabPosition,
  centered,
  css,
  activeColor,
  ...props
}: TabType) {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: activeColor } }}>
      <Tabs
        {...props}
        css={css}
        items={items}
        type={type}
        tabPosition={tabPosition}
        centered={centered}
        onChange={(event) => onChange(event ?? "")}
      >
        {children}
      </Tabs>
    </ConfigProvider>
  );
}
