/**
 *
 * FILE : UploadImage.tsx
 *
 * DESCRIPTION : 이미지 업로드 컴포넌트
 *
 * AUTHOR : 이혜원 (hyeoz)
 *
 * DATE : 2023-01
 *
 */
/** @jsxImportSource @emotion/react */
import React from "react";
import { Upload as AntUpload } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/es/upload";
import { css as emotionCss, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

import palette from "../styles/palette";
import Icons from "../icons";
import Label from "./Label";
import { Button } from "./Button";

type FileType = File | null | string | undefined;

export type UploadImageType = {
  type: "image" | "image-crop";
  width?: number;
  height?: number;
  acceptedFileType?: string[];
  acceptedFileSize?: number;
  handleImage: (imageValue: FileType) => void;
  image?: FileType;
  description?: string;
  preview?: any;
  setPreview?: any;
  hasDelete?: boolean;
  handleDelete?: () => void;
} & { css?: SerializedStyles };

/**
 * IMAGE UPLOAD 컴포넌트
 * @param {"image" | "image-crop"} type image 타입
 * @param width
 * @param height
 * @param acceptedFileType 업로드 가능한 이미지 형식 리스트
 * @param acceptedFileSize 업로드 가능한 이미지 용량
 * @param handleImage
 * @param image
 * @param description 이미지 업로드 문구
 * @param preview 미리보기 이미지 상태
 * @param setPreview 미리보기 이미지 상태관리 함수
 * @param hanDelete 삭제버튼 여부
 * @param handleDelete
 * @returns
 */
export default function UploadImage({
  type,
  css,
  width = 320,
  height = 160,
  acceptedFileSize,
  acceptedFileType,
  handleImage,
  image,
  description,
  preview,
  setPreview,
  hasDelete = false,
  handleDelete,
  ...props
}: UploadImageType) {
  const beforeUpload = (file: RcFile) => {
    console.log("file", file);
    const isFileType = acceptedFileType
      ? acceptedFileType.includes(file.type)
      : true;
    const isLimit = acceptedFileSize
      ? file.size / 1024 / 1024 < acceptedFileSize
      : true;

    // TODO 추후 toast 컴포넌트 추가
    if (!isFileType) {
      // message.error("업로드 가능한 형식의 파일이 아닙니다.");
      return false;
    }
    if (!isLimit) {
      // message.error(`파일의 용량은 ${acceptedFileSize}MB 보다 작아야합니다.`);
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

  if (type === "image") {
    return (
      <div css={css}>
        <UploadImageDiv
          css={emotionCss`
            .ant-upload {
              width: ${width}px !important;
              height: ${height}px !important;
              border: none !important;
            }
          `}
          {...props}
        >
          <AntUpload
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUpload}
          >
            <div
              className={`upload-interaction ${image ? "hasImage" : ""}`}
              css={css}
            >
              {image ? (
                <img src={preview} />
              ) : (
                <div>
                  <Icons icon="add_photo" color={palette.gray.gray4} />
                  <Label
                    bold="semibold"
                    type="body2"
                    color={palette.gray.gray6}
                  >
                    {description ?? "클릭해서 이미지 추가하기"}
                  </Label>
                </div>
              )}
            </div>
          </AntUpload>
        </UploadImageDiv>

        {/* 이미지 하단 버튼 */}
        <div
          css={emotionCss`
            width: ${width}px;

            ${
              hasDelete &&
              emotionCss`
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
            `
            }
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
                <Icons icon="trash" />
                삭제하기
              </>
            </Button>
          )}

          <AntUpload showUploadList={false} beforeUpload={beforeUpload}>
            <Button
              size="small"
              css={emotionCss`
                width: 100%;
              `}
              disabled={!image}
            >
              <>
                <Icons icon="change" />
                변경하기
              </>
            </Button>
          </AntUpload>
        </div>
      </div>
    );
  } else {
    return (
      <div css={css}>
        <UploadCropImageDiv
          css={emotionCss`
            .ant-upload {
              width: ${width}px !important;
              height: ${height}px !important;
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
              <div className={`upload-interaction ${image ? "hasImage" : ""}`}>
                {image ? (
                  <img src={preview} />
                ) : (
                  <div>
                    <Icons icon="add_photo" color={palette.gray.gray4} />
                    <Label
                      bold="semibold"
                      type="body2"
                      color={palette.gray.gray6}
                    >
                      {description ?? "클릭해서 이미지 추가하기"}
                    </Label>
                  </div>
                )}
              </div>
            </AntUpload>
          </ImgCrop>
        </UploadCropImageDiv>

        {/* 이미지 하단 버튼 */}
        <div
          css={emotionCss`
            width: ${width}px;

            ${
              hasDelete &&
              emotionCss`
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
            `
            }
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
                <Icons icon="trash" />
                삭제하기
              </>
            </Button>
          )}

          <AntUpload showUploadList={false} beforeUpload={beforeUpload}>
            <Button
              size="small"
              css={emotionCss`
                  width: 100%;
                `}
              disabled={!image}
            >
              <>
                <Icons icon="change" />
                변경하기
              </>
            </Button>
          </AntUpload>
        </div>
      </div>
    );
  }
}

// Styled Component

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
