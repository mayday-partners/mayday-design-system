/**
 *
 * FILE : UploadFile.tsx
 *
 * DESCRIPTION : 파일 업로드 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01
 *
 */
/** @jsxImportSource @emotion/react */
import { css as emotionCss } from "@emotion/react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/utils";
import React from "react";
import { Button } from "./Button";
import Icons from "../icons";
import palette from "../styles/palette";

export type UploadFileType = {
  type: "multi-file" | "single-file";
  fileRef: any; // useRef
  hasError?: string;
  file: File | null;
  setValue: (value: File | File[]) => void;
  singleLimit?: number; // MB 기준
  fileList: any[];
  countLimit?: number;
  currentFiles?: File[];
  setCurrentFiles?: any;
} & { css?: SerializedStyles };

/**
 * FILE UPLOAD 컴포넌트
 * @param {"single-file" | "multi-file"} type 파일 업로드 타입
 * @param fileRef useRef
 * @param hasError 에러 문구
 * @param file
 * @param setValue
 * @param singleLimit single file 용량 제한
 * @param countLimit 업로드 파일 개수 제한
 * @param currentFiles 파일 리스트 상태
 * @param setCurrentFiles 파일 리스트 상태관리 함수
 * @returns
 */
export default function UploadFile({
  type,
  css,
  fileRef,
  hasError,
  file,
  setValue,
  singleLimit,
  fileList,
  countLimit,
  currentFiles = [],
  setCurrentFiles,
  ...props
}: UploadFileType) {
  const eventPass = () => fileRef.current && fileRef.current.click();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const newFile = files.item(0);

    if (!newFile) return;

    if (fileSizeValidation(newFile.size, "MB", singleLimit))
      // if (
      //   fileSizeValidation(
      //     getTotalFileSize([...fileList, newFile]),
      //     "MB",
      //     totalLimit
      //   )
      // )
      //   TODO toast
      // return error({ content: `파일 크기는 최대 ${singleLimit}MB까지 가능합니다.` });

      setValue(newFile);

    e.target.value = "";
  };
  const onChangeMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const inputFiles = Object.values(files);
    const nameList = currentFiles?.map((e) => e.name);
    const duplicateFilter = inputFiles.filter(
      (e) => !nameList.includes(e.name)
    );
    const newList = [...currentFiles, ...duplicateFilter];

    // if (countLimit && countLimit < newList.length)
    //     return error({ content: `최대 ${countLimit}개까지 업로드 가능합니다.` });

    // if (inputFiles.filter((e) => nameList.includes(e.name)).length)
    //     return error({ content: '이미 업로드된 파일입니다.' });

    // if (inputFiles.filter((e) => fileSizeValidation(e.size, 'MB', singleLimit)).length)
    //     return error({ content: `각 파일은 최대 ${totalLimit}MB까지 업로드가 가능합니다.` });

    // if (fileSizeValidation(getTotalFileSize(newList), 'MB', totalLimit))
    //     return error({ content: `파일 업로드는 최대 ${totalLimit}MB 입니다.` });

    setValue(newList);

    e.target.value = ""; // 같은 파일 삭제 후 다시 등록하는 경우 때문에
  };
  const onDeleteSingle = () => setValue(new File([], ""));
  const onDeleteMulti = (name: string) =>
    setValue(currentFiles.filter((e) => e.name !== name));

  if (type === "single-file") {
    return (
      <SingleFileWrapper css={css}>
        <div
          className="file-list"
          onClick={eventPass}
          css={emotionCss`
                  ${
                    hasError &&
                    `border: 1px solid ${palette.red.red1} !important`
                  }
                `}
        >
          {file instanceof File && file.size ? (
            <div key={file.name} className="file">
              <Icons icon="folder" />
              <p className="fs-15 fw-400 file-name">{file.name}</p>

              <p
                className="fs-15 fw-400 gray5 ta-e"
                css={emotionCss`
                        width: max-content;
                      `}
              >
                {getByteSize(file.size)}
              </p>
              <button
                className="cancel-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteSingle();
                }}
                type="button"
              >
                <Icons icon="trash" />
              </button>
            </div>
          ) : (
            <p className="gray5">자료를 업로드 해주세요.</p>
          )}
        </div>

        <Button icon={<Icons icon="upload" />} onClick={eventPass}>
          파일 업로드
        </Button>
        <input
          type="file"
          ref={fileRef}
          onChange={onChange}
          accept="image/jpg, image/png, application/pdf"
        />
      </SingleFileWrapper>
    );
  } else {
    return (
      <div css={css}>
        <section className="ds-flex jc-sb mb-16">
          <Button
            icon={<Icons icon="upload" />}
            size="small"
            onClick={eventPass}
            disabled={countLimit === currentFiles?.length}
          >
            파일 올리기
          </Button>
          <input
            // multiple
            hidden
            type="file"
            ref={fileRef}
            onChange={onChangeMulti}
            accept="image/jpg, image/png, application/pdf"
          />

          {/* <p className="fw-300 fs-15">
              용량제한 {getByteSize(getTotalFileSize(currentFiles))}/{totalLimit}
              MB
            </p> */}
        </section>

        {currentFiles.length > 0 && (
          <FileListWrapper>
            {currentFiles.map((f, i) => (
              <div className="file" key={`file-${i}`}>
                <Icons icon="file" />
                <p className="name">{f.name}</p>
                <p className="ta-e">({getByteSize(f.size)})</p>

                <button type="button" onClick={() => onDeleteMulti(f.name)}>
                  <Icons icon="cancel" />
                </button>
              </div>
            ))}
          </FileListWrapper>
        )}
      </div>
    );
  }
}

const SingleFileWrapper = styled.div`
  display: flex;
  gap: 16px;

  .file-list {
    background: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
    height: 40px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    gap: 17px;
  }
  .file-list .file {
    display: grid;
    grid-template-columns: 20px auto 70px 20px;
    align-items: center;
    gap: 5px;
  }
  input {
    display: none;
  }

  .file-name {
    padding: 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ant-btn {
    width: 148px;
  }

  .cancel-btn {
    background: none;
    height: 20px;
    cursor: pointer;
  }
`;
const FileListWrapper = styled.section`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px 28px;
  height: 140px;
  overflow: auto;

  .file {
    height: 20px;
    margin-bottom: 16px;
    display: grid;
    grid-template-columns: 20px auto 100px 20px;
    align-items: center;
    gap: 5px;

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    button {
      padding: 0px;
      height: 20px;
    }
  }
`;

// HELPER
const dataUnit = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export const getByteSize = (size: number, decimals = 2) => {
  if (!+size) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const i = Math.floor(Math.log(size) / Math.log(k));

  return `${parseFloat((size / Math.pow(k, i)).toFixed(dm))} ${dataUnit[i]}`;
};
export const fileSizeValidation = (
  size: number,
  byte: "Bytes" | "KB" | "MB" | "GB" | "TB",
  multiNum = 1
) => {
  const unit = dataUnit.indexOf(byte);
  const maxSize = Math.pow(1024, unit) * multiNum;
  return !unit || maxSize < size;
};
export const getTotalFileSize = (list: File[]) =>
  list.reduce((acc, curr) => acc + curr.size, 0);
