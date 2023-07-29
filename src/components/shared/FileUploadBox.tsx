import { css } from "@emotion/css";
import { basis, primary, fill } from "components/constants/colors";
import React, { useState } from "react";
import { ReactComponent as CloudUpload } from "resources/img/CloudUpload.svg";

const FileUploadBox = ({
  handleFileInput,
}: {
  handleFileInput: (file: File) => void;
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const handleDrag = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size <= 20 * 1024 * 1024) {
        handleFileInput(file);
        setUploadedFile(file);
      } else {
        alert("文件大小超过限制，请选择小于20MB的文件。");
      }
    }
  };

  const getDisplayText = () => {
    if (uploadedFile) {
      return uploadedFile.name;
    } else {
      return (
        <div>
          <a
            href="#"
            className={css`
              color: ${primary.text};
              text-decoration: none;
              margin-right: 4px;
            `}
          >
            上传图片
          </a>
          <text
            className={css`
              color: ${basis.text_muted};
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px;
            `}
          >
            或将图片拖动到这里
          </text>
        </div>
      );
    }
  };

  return (
    <label
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 308px;
        height: 64px;
        box-sizing: border-box;
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
          const file = event.dataTransfer.files[0];
          if (file.size <= 20 * 1024 * 1024) {
            handleFileInput(file);
            setUploadedFile(file);
          } else {
            alert("文件大小超过限制，请选择小于20MB的文件。");
          }
        }
      }}
    >
      <div
        className={css`
          display: inline-block;
          max-width: 308px;
          height: 64px;
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            width: 308px;
            height: 64px;
            border-radius: 8px;
            border: 1px dashed ${basis.border_muted};
            background: ${fill.base.layer_on};
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
              0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
          `}
        >
          <input
            className={css`
              display: none;
            `}
            type="file"
            onChange={handleFileInputChange}
          />
          <div
            className={css`
              font-family: PingFang SC;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px;
              white-space: nowrap;
              display: flex;
              padding: 12px;
              flex-direction: column;
              align-items: flex-start;
              flex: 1 0 0;
              width: 284px;
              height: 40px;
              box-sizing: border-box;
            `}
          >
            <div
              className={css`
                align-items: center;
                gap: 12px;
                align-self: stretch;
                display: flex;
              `}
            >
              <CloudUpload
                className={css`
                  align-items: center;
                  display: flex;
                  width: 40px;
                  margin-left: -10px;
                `}
              />
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                `}
              >
                {getDisplayText()}
                <div
                  className={css`
                    color: ${basis.text};
                    text-align: center;
                    font-family: PingFang SC;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px;
                  `}
                >
                  支持jpg、jpeg等，最大20MB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};

export { FileUploadBox };
