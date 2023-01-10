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
// import { file } from '@components/icons/svg';

export type UploadType = {
  type: "image" | "multifile" | "singlefile";
  uploadUrl: string;
  label?: string | ReactNode;
  acceptedFileType?: string[];
  acceptedFileSize?: number;
} & CustomImageUploadType;

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
            shape="round"
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
                    <FileAddOutlined />
                    <div className="fw-600 fs-13">{description}</div>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <FileAddOutlined
                      css={css`
                        svg {
                          width: 48px;
                          height: 48px;
                          color: ${palette.gray[400]};
                        }
                      `}
                    />
                    <Label
                      bold="semibold"
                      type="body2"
                      color={palette.gray[600]}
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
  } else if (type === "multifile") {
    return <>multi file</>;
  } else {
    return <>single file</>;
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
