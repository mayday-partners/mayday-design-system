/** @jsxImportSource @emotion/react */
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { css } from "@emotion/react";
import { message, Space, Upload as AntUpload, UploadFile } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/es/upload";

import palette from "./styles/palette";

import {
  DeleteOutlined,
  FileAddOutlined,
  PlusCircleFilled,
  SwapOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button } from "./Button";
import Label from "./Label";
import Icons from "./icons";
// import { file } from '@components/icons/svg';

export type UploadType = {
  type: "image" | "multi" | "single";
  uploadUrl: string;
  label?: string | ReactNode;
  acceptedFileType?: string[];
  acceptedFileSize?: number;
} & CustomImageUploadType &
  SingleFileUploadType &
  MultiFileUploadType;

type FileType = File | null | string | undefined;

type CustomImageUploadType = {
  name: string;
  width?: number;
  height?: number;
  icon?: ReactNode;
  description?: string | ReactNode;
  image?: FileType;
  handleImage: (imageValue: FileType) => void;
  hasDelete?: boolean;
  deleteText?: string;
  isProfile?: boolean;
  noCrop?: boolean;
  wrapperWidth?: number;
  wrapperHeight?: number;
  isLogo?: boolean;
  handleDelete?: () => void;
};
type SingleFileUploadType = {
  file: File | null;
  //   fileList: File[];
  setValue: (value: File) => void;
  singleLimit?: number; // MB 기준
  totalLimit?: number; // MB 기준
  hasError?: string;
};
type MultiFileUploadType = {
  fileList: any[];
  setValue: (value: any[]) => void;
  singleLimit?: number; // MB 기준
  totalLimit?: number; // MB 기준
  countLimit?: number;
};

export default function Upload({
  width = 320,
  height = 160,
  icon,
  description = "클릭해서 이미지 추가하기",
  image,
  handleImage,
  hasDelete = false,
  deleteText = "삭제하기",
  isProfile = false,
  noCrop = false,
  wrapperWidth,
  wrapperHeight,
  isLogo,
  handleDelete,

  type,
  uploadUrl,
  label,
  acceptedFileSize,
  acceptedFileType,

  file,
  fileList,
  setValue,
  singleLimit = 2,
  totalLimit = 200,
  hasError,

  countLimit,
  ...props
}: UploadType) {
  const [preview, setPreview] = useState("");

  //   const buttonText = image ? "변경하기" : "업로드하기";

  useEffect(() => {
    image && getPreview(image, (preview) => setPreview(preview));
  }, [image]);

  const beforeUpload = (file: RcFile) => {
    console.log("file", file);
    const isFileType = acceptedFileType
      ? acceptedFileType.includes(file.type)
      : true;
    const isLimit = acceptedFileSize
      ? file.size / 1024 / 1024 < acceptedFileSize
      : true;

    if (!isFileType) {
      message.error("업로드 가능한 형식의 파일이 아닙니다.");
      return false;
    }
    if (!isLimit) {
      message.error(`파일의 용량은 ${acceptedFileSize}MB 보다 작아야합니다.`);
      return false;
    }

    if (file) {
      handleImage(file);
    }
    return true;
  };

  const onDelete = () => {
    handleImage(null);
    handleDelete && handleDelete();
  };

  //   SINGLE FILE
  const fileRef = useRef<HTMLInputElement>(null);

  const eventPass = () => fileRef.current && fileRef.current.click();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const newFile = files.item(0);

    if (!newFile) return;

    if (fileSizeValidation(newFile.size, "MB", singleLimit))
      if (
        fileSizeValidation(
          getTotalFileSize([...fileList, newFile]),
          "MB",
          totalLimit
        )
      )
        // return error({ content: `파일 크기는 최대 ${singleLimit}MB까지 가능합니다.` });

        // return error({ content: `파일 업로드는 최대 ${totalLimit}MB까지 가능합니다.` });

        setValue(newFile);

    e.target.value = "";
  };

  const onDeleteSingle = () => setValue(new File([], ""));

  //   MULTI FILE
  const fileRefMulti = useRef<HTMLInputElement>(null);
  const [currentFiles, setCurrentFiles] = useState<File[]>([]);

  // console.log('currentFiles', currentFiles);
  useEffect(() => {
    const setInitValues = async () => {
      fileList &&
        setCurrentFiles(
          await Promise.all(
            fileList.map(async (e: any) =>
              e instanceof File
                ? e
                : await urlToFileFactory(e.originalFileName, e.fileUrl)
            )
          )
        );
    };

    setInitValues();
  }, [fileList]);

  const eventPassMulti = () => fileRef.current && fileRef.current.click();

  const onChangeMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const inputFiles = Object.values(files);
    const nameList = currentFiles.map((e) => e.name);
    const duplicateFilter = inputFiles.filter(
      (e) => !nameList.includes(e.name)
    );
    const newList = [...currentFiles, ...duplicateFilter];

    if (countLimit && countLimit < newList.length)
      if (inputFiles.filter((e) => nameList.includes(e.name)).length)
        if (
          inputFiles.filter((e) =>
            fileSizeValidation(e.size, "MB", singleLimit)
          ).length
        )
          if (fileSizeValidation(getTotalFileSize(newList), "MB", totalLimit))
            // return error({ content: `최대 ${countLimit}개까지 업로드 가능합니다.` });

            // return error({ content: '이미 업로드된 파일입니다.' });

            // return error({ content: `각 파일은 최대 ${totalLimit}MB까지 업로드가 가능합니다.` });

            // return error({ content: `파일 업로드는 최대 ${totalLimit}MB 입니다.` });

            setValue(newList);

    e.target.value = ""; // 같은 파일 삭제 후 다시 등록하는 경우 때문에
  };

  const onDeleteMulti = (name: string) =>
    setValue(currentFiles.filter((e) => e.name !== name));

  // 이미지업로드 - 크롭
  if (type === "image" && !noCrop) {
    return (
      <UploadImageWrapper>
        <UploadCropImageDiv
          css={css`
            .ant-upload {
              width: ${wrapperWidth ?? width}px !important;
              height: ${wrapperHeight ?? height}px !important;
              border: none !important;
            }
          `}
          {...props}
        >
          <ImgCrop
            modalClassName="image-upload-modal"
            rotate
            aspect={width / height}
            modalOk="적용하기"
            modalCancel="취소"
            modalTitle="이미지 등록"
          >
            <AntUpload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
            >
              <div
                className={`upload-interaction ${image ? "hasImage" : ""}`}
                css={css`
                  ${isLogo && "padding: 30px;"}
                `}
              >
                {image ? (
                  <img src={preview} />
                ) : (
                  <div>
                    <Icons icon="addPhoto" color={palette.gray.gray4} />
                    <Label
                      bold="semibold"
                      type="body2"
                      color={palette.gray.gray6}
                    >
                      {description as string}
                    </Label>
                  </div>
                )}
              </div>
            </AntUpload>
          </ImgCrop>
        </UploadCropImageDiv>

        {/* 이미지 하단 버튼 */}
        <UploadImageButton
          css={css`
            width: ${wrapperWidth ?? width}px;

            ${hasDelete &&
            css`
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
            `}
            button {
              width: 100%;
            }
            .ant-upload {
              width: 100%;
            }
          `}
        >
          {hasDelete && (
            <Button size="small" onClick={onDelete} disabled={!image}>
              <>
                <DeleteOutlined />
                삭제하기
              </>
            </Button>
          )}

          <UploadWrapper noCrop={noCrop} width={width} height={height}>
            <AntUpload showUploadList={false} beforeUpload={beforeUpload}>
              <Button
                size="small"
                css={css`
                  width: 100%;
                `}
                disabled={!image}
              >
                <>
                  <SwapOutlined />
                  변경하기
                </>
              </Button>
            </AntUpload>
          </UploadWrapper>
        </UploadImageButton>
      </UploadImageWrapper>
    );
  } else if (type === "image" && noCrop) {
    // 이미지업로드 - 크롭 없음
    return (
      <UploadImageWrapper>
        <UploadImageDiv
          css={css`
            .ant-upload {
              width: ${wrapperWidth ?? width}px !important;
              height: ${wrapperHeight ?? height}px !important;
              border: none !important;
            }
          `}
          {...props}
        >
          <UploadWrapper noCrop={noCrop} width={width} height={height}>
            <AntUpload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
            >
              <div
                className={`upload-interaction ${image ? "hasImage" : ""}`}
                css={css`
                  ${isLogo && "padding: 30px;"}
                `}
              >
                {image ? (
                  <img src={preview} />
                ) : (
                  <div>
                    <Icons icon="addPhoto" color={palette.gray.gray4} />
                    <Label
                      bold="semibold"
                      type="body2"
                      color={palette.gray.gray6}
                    >
                      {description as string}
                    </Label>
                  </div>
                )}
              </div>
            </AntUpload>
          </UploadWrapper>
        </UploadImageDiv>

        {/* 이미지 하단 버튼 */}
        <UploadImageButton
          css={css`
            width: ${wrapperWidth ?? width}px;

            ${hasDelete &&
            css`
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
            `}
            button {
              width: 100%;
            }
            .ant-upload {
              width: 100%;
            }
          `}
        >
          {hasDelete && (
            <Button size="small" onClick={onDelete} disabled={!image}>
              <>
                <DeleteOutlined />
                삭제하기
              </>
            </Button>
          )}

          <UploadWrapper noCrop={noCrop} width={width} height={height}>
            <AntUpload showUploadList={false} beforeUpload={beforeUpload}>
              <Button
                size="small"
                css={css`
                  width: 100%;
                `}
                disabled={!image}
              >
                <>
                  <SwapOutlined />
                  변경하기
                </>
              </Button>
            </AntUpload>
          </UploadWrapper>
        </UploadImageButton>
      </UploadImageWrapper>
    );
  } else if (type === "multi") {
    return (
      <div>
        <section className="ds-flex jc-sb mb-16">
          <Button
            icon={<Icons icon="upload" />}
            size="small"
            onClick={eventPassMulti}
            disabled={countLimit === currentFiles.length}
          >
            파일 올리기
          </Button>
          <input
            // multiple
            hidden
            type="file"
            ref={fileRefMulti}
            onChange={onChangeMulti}
            accept="image/jpg, image/png, application/pdf"
          />

          <p className="fw-300 fs-15">
            용량제한 {getByteSize(getTotalFileSize(currentFiles))}/{totalLimit}
            MB
          </p>
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
  } else {
    return (
      <SingleFileWrapper>
        <div
          className="file-list"
          onClick={eventPass}
          css={css`
            ${hasError && `border: 1px solid ${palette.red.red1} !important`}
          `}
        >
          {file instanceof File && file.size ? (
            <div key={file.name} className="file">
              <Icons icon="folder" />
              <p className="fs-15 fw-400 file-name">{file.name}</p>

              <p
                className="fs-15 fw-400 gray5 ta-e"
                css={css`
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
  }
}

function UploadWrapper({
  children,
  width,
  height,
  noCrop = true,
}: {
  children: ReactElement;
  width: number;
  height: number;
  noCrop: boolean;
}) {
  if (noCrop) {
    return <>{children}</>;
  }

  return (
    <ImgCrop
      rotate
      aspect={width / height}
      modalOk="적용하기"
      modalCancel="취소"
      modalTitle="이미지 등록"
      modalClassName="image-upload-modal"
    >
      {children}
    </ImgCrop>
  );
}

const getPreview = (file: FileType, callback: (url: string) => void) => {
  if (typeof file === "string") {
    return callback(file);
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(file as RcFile);
};

const UploadCropImageDiv = styled.div`
  .ant-upload {
    background-color: ${palette.gray.gray2} !important;
  }
  .ant-upload.ant-upload-select-picture-card {
    background: none;
  }
  .profile-img {
    /* border-radius: 50%; */
    width: 100%;
  }
  .ant-upload.ant-upload-select-picture-card:hover {
    border: none;
  }
`;
const UploadImageDiv = styled.div`
  .ant-upload {
    background-color: ${palette.gray.gray2} !important;
  }
  .upload-interaction {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    text-align: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
  }
  .upload-interaction.hasImage {
    border: 1px solid #efefef;
    background: #fff;
    height: 100%;
  }
  .ant-upload-wrapper.ant-upload-picture-card-wrapper {
    border: none;
  }
  .ant-upload.ant-upload-select-picture-card:hover {
    border: none;
  }
`;
const UploadImageButton = styled.div``;
const UploadImageWrapper = styled.div``;

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

// NOTE: 파일 관련
const dataUnit = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export const getTotalFileSize = (list: File[]) =>
  list.reduce((acc, curr) => acc + curr.size, 0);

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

export const urlToFileFactory = async (fileName: string, fileUrl: string) => {
  const fileTypes = ["image/jpg", "image/png", "application/pdf"];
  const fileExtension = fileName.split(".").pop() ?? "";
  const [type] = fileTypes.filter((e) => e.includes(fileExtension));

  const response = await fetch(fileUrl);
  const data = await response.blob();
  const metadata = {
    type,
  };

  return new File([data], fileName, metadata);
};
