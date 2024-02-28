/**
 *
 * FILE :
 *
 * DESCRIPTION : "찾아보기" 가 있는 파일 업로드 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-08-30
 *
 */
import React, { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import "./upload.css";

// import { uploadFile } from '@src/apis/common';
/**
 *
 * @param {}
 */
type UploadFileRowPropsType = {
  setValue: (value: string | File | undefined) => void;
  uploadApi: (body: FormData) => Promise<{ success: boolean; result: string }>;
  placeholder?: string;
  accept?: string;
  isValueFormData?: boolean;
  uploadFolder?: string;
  multiple?: boolean;
  inputWidth?: number;
  btnWidth?: number;
  btnBgColor?: string;
  btnTextColor?: string;
  btnText?: string;
  value?: File;
  edit?: boolean;
  maxFileSize?: number;
};

function Upload({
  placeholder = "파일을 추가해주세요.",
  accept = "",
  setValue,
  uploadApi,
  isValueFormData = false,
  uploadFolder,
  multiple = false,
  inputWidth,
  btnWidth,
  btnBgColor,
  btnTextColor,
  btnText,
  value,
  edit = false,
  maxFileSize = 30,
}: UploadFileRowPropsType) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>(value!);
  const [isLoading, setIsLoading] = useState(false);
  // const device = useDeviceType();

  const eventPass = () => fileRef.current && fileRef.current.click();

  const onDownload = (data: File) => {
    if (!file) return eventPass();
    const blob = new Blob([data]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;

    a.click();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (value) setFile(value);
  }, [value]);
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);

    const { files } = e.target;
    if (!files) return;

    const newFile = files.item(0);

    if (!newFile) return;

    if (newFile.size / 1024 / 1024 > maxFileSize) {
      setIsLoading(false);
      return alert(
        `업로드 할 수 있는 최대 파일 용량인 ${maxFileSize}MB 를 초과하였습니다.`
      );
    }

    setFile(newFile);

    if (isValueFormData) {
      setValue(newFile);
    } else {
      const body = new FormData();
      body.append("file", newFile);
      body.append("folder", uploadFolder ?? "");
      const _url = await uploadApi(body);
      _url?.result && setValue(_url?.result);
    }
    setIsLoading(false);
    e.target.value = "";
  };

  const onDelete = (e: any) => {
    e.stopPropagation();
    setFile(new File([], ""));
    setValue("");
  };

  return (
    <div className="upload-wrapper">
      <input
        type="file"
        ref={fileRef}
        onChange={onChange}
        style={{ display: "none" }}
        accept={accept}
        multiple={multiple}
      />
      <div
        className="upload-content"
        onClick={() => onDownload(file as File)}
        css={css`
          width: ${inputWidth ? `${inputWidth}px` : "100%"};

          @media (max-width: 768px) {
            ${!edit && "pointer-events: none;"}
          }
        `}
      >
        {!!file?.size ? (
          <>
            <p className="upload-file-size">{file.name}</p>
            {!edit && (
              <Button
                icon={<CloseOutlined width={20} height={20} />}
                size="small"
                type="text"
                onClick={onDelete}
                style={{ marginTop: "2px" }}
              />
            )}
          </>
        ) : (
          <p style={{ color: "#999", fontSize: "16px", fontWeight: 400 }}>
            {placeholder}
          </p>
        )}
      </div>
      {!edit && (
        <Button
          size="large"
          type="primary"
          css={css`
            border-radius: 4px !important;
            width: 136px;
            height: 40px !important;
            font-weight: 500 !important;
            background: ${btnBgColor === "white" ? "#fff" : ""} !important;
            border: ${btnBgColor === "white"
              ? "1px solid #eaeaea"
              : ""} !important;
            @media ((max-width: 1024px) and (min-width: 769px)) {
              border-radius: 4px !important;
              width: 96px;
            }
            @media (max-width: 768px) {
              width: 87px !important;
            }

            p {
              color: ${btnBgColor === "white"
                ? "#222"
                : !!btnTextColor
                ? btnTextColor
                : "white"} !important;
            }
          `}
          onClick={eventPass}
          disabled={isLoading}
        >
          <p
            style={{
              marginTop: "2px",
              lineHeight: "18px",
            }}
          >
            {btnText ? btnText : "찾아보기"}
          </p>
        </Button>
      )}
    </div>
  );
}

export default Upload;
