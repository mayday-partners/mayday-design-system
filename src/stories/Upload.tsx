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
 * MEMO : hyeoz) 2024-03 수정
 */
import React, { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";

import "./upload.css";

/**
 *
 * @param value 파일값
 * @param setValue 파일 상태관리 함수
 * @param uploadApi 파일 업로드 api 함수. isValueFormData 가 false 인 경우 필수입니다.
 * @param placeholder
 * @param accept
 * @param isValueFormData
 * @param uploadFolder 파일 업로드 시 폴더 경로
 * @param multiple 복수 파일 허용 여부
 * @param inputWidth
 * @param btnWidth
 * @param btnBgColor
 * @param btnTextColor
 * @param btnText
 * @param edit
 * @param maxFileSize
 */
type UploadFileRowPropsType = {
  value?: File;
  setValue: (value: string | File | undefined) => void;
  uploadApi?: (body: FormData) => Promise<{ success: boolean; result: string }>;
  placeholder?: string;
  accept?: string;
  isValueFormData?: boolean;
  uploadFolder?: string;
  multiple?: boolean;
  inputWidth?: number | string;
  btnWidth?: number;
  btnBgColor?: string;
  btnTextColor?: string;
  btnText?: string;
  edit?: boolean;
  maxFileSize?: number;
};

function Upload({
  value,
  setValue,
  uploadApi,
  placeholder = "파일을 추가해주세요.",
  accept = "",
  isValueFormData = false,
  uploadFolder,
  multiple = false,
  inputWidth = 220,
  btnWidth = 144,
  btnBgColor,
  btnTextColor,
  btnText,
  edit = false,
  maxFileSize = 30,
}: UploadFileRowPropsType) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>(value!);
  const [isLoading, setIsLoading] = useState(false);

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
    } else if (!!uploadApi) {
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
        css={css`
          display: none;
        `}
        accept={accept}
        multiple={multiple}
      />
      <div
        className="upload-content"
        onClick={() => onDownload(file as File)}
        css={css`
          width: ${typeof inputWidth === "number"
            ? `${inputWidth}px`
            : inputWidth} !important;

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
                css={css`
                  margin-top: 2px;
                `}
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
          className="no-edit-button"
          css={css`
            width: ${btnWidth}px;
            background: ${btnBgColor === "white" || btnBgColor === "#fff"
              ? "#fff"
              : btnBgColor} !important;
            border: ${btnBgColor === "white" || btnBgColor === "#fff"
              ? "1px solid #eaeaea"
              : ""} !important;

            p {
              color: ${btnBgColor === "white" || btnBgColor === "#fff"
                ? "#222"
                : !!btnTextColor
                ? btnTextColor
                : "white"} !important;
            }
          `}
          onClick={eventPass}
          disabled={isLoading}
        >
          <p className="no-edit-button-text">
            {btnText ? btnText : "찾아보기"}
          </p>
        </Button>
      )}
    </div>
  );
}

export default Upload;
