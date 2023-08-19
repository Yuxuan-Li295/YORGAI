import { css } from "@emotion/css";
import { basis, rainbow } from "components/constants/colors";
import { body } from "components/constants/fonts";
import React, { useState } from "react";
import { ReactComponent as Error } from "resources/img/Error.svg";
import { ReactComponent as ImgFile } from "resources/img/fileIcon/Img.svg";
import { ReactComponent as PdfFile } from "resources/img/fileIcon/Pdf.svg";
import { ReactComponent as ZipFile } from "resources/img/fileIcon/Zip.svg";
import { ReactComponent as DocFile } from "resources/img/fileIcon/Doc.svg";
import { ReactComponent as XSmRed } from "resources/img/XSmRed.svg";
import { ReactComponent as PaperIcon } from "resources/img/fileIcon/Paper.svg";
import { DropdownBase } from "components/shared/Dropdown";

const ChatInputMenuBtn = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [Uploaded, setIsUploaded] = useState(false);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
      setIsUploaded(true);
    }
  };

  const getDisplayText = () => {
    if (uploadedFiles.length > 0) {
      return `${uploadedFiles.length}个文件`;
    }
    return "未选择文件";
  };

  const getDisplayIcon = (file?: File) => {
    if (file) {
      if (file.type.startsWith("image")) return <ImgFile />;
      if (file.type.startsWith("application/zip")) return <ZipFile />;
      if (file.type.startsWith("application/pdf")) return <PdfFile />;
      if (file.type.startsWith("text/plain")) return <DocFile />;
    }
  };

  const getDisplayBtn = () => {
    if (uploadedFiles.length > 0) {
      return <PaperIcon />;
    }
    return <Error />;
  };
  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove the file at the specified index
  };

  const btn = (
    <label
      htmlFor="fileInput"
      className={css`
        cursor: pointer;
      `}
    >
      <input
        id="fileInput"
        className={css`
          display: none;
        `}
        type="file"
        disabled={Uploaded}
        onChange={handleFileInputChange}
      />
      <div
        className={css`
          display: inline-flex;
          padding: 6px 12px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 6px;
          background: ${basis.bg};
          box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
            0px 2px 5px -2px rgba(79, 81, 89, 0.03),
            0px 2px 14px -2px rgba(79, 81, 89, 0.12),
            0px 0px 0px 1px rgba(188, 189, 194, 0.22),
            0px 1px 1px 0px rgba(188, 189, 194, 0.2);
        `}
      >
        {getDisplayBtn()}
        <div
          className={css`
            color: ${basis.text};
            text-align: center;
            ${body.xs.medium}
          `}
        >
          {getDisplayText()}
        </div>
      </div>
    </label>
  );

  const btnItem = (
    <div
      className={css`
        display: flex;
        width: 180px;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 8px 12px -6px rgba(79, 81, 89, 0.16),
          0px 16px 24px -8px rgba(79, 81, 89, 0.2),
          0px 0px 0px 1px rgba(188, 189, 194, 0.2),
          0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
          0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 8px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
        `}
      >
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                display: flex;
                padding: 6px 12px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 6px;
                background: ${basis.bg};
              `}
            >
              {getDisplayIcon(file)}
              <div
                className={css`
                  color: ${basis.text_muted};
                  text-align: center;
                  ${body.xs.medium}
                  max-width: 90px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                `}
              >
                {file.name}
              </div>
            </div>
            <XSmRed
              className={css`
                cursor: pointer;
              `}
              onClick={() => handleRemoveFile(index)}
            />
          </div>
        ))}
      </div>
      <div
        className={css`
          display: flex;
          padding: 8px 4px 4px 4px;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          align-self: stretch;
          border-radius: 6px;
        `}
      >
        <label
          htmlFor="fileAdd"
          className={css`
            cursor: pointer;
          `}
        >
          <input
            id="fileAdd"
            className={css`
              display: none;
            `}
            type="file"
            onChange={handleFileInputChange}
          />
          <div
            className={css`
              display: flex;
              padding: 6px 12px;
              justify-content: center;
              align-items: center;
              gap: 10px;
            `}
          >
            <div
              className={css`
                color: ${rainbow.teal.text};
                text-align: center;
                ${body.xs.medium}
              `}
            >
              添加文件
            </div>
          </div>
        </label>
      </div>
    </div>
  );

  return (
    <DropdownBase
      above={true}
      align="center"
      dropdownMenu={btnItem}
      dropdownToggle={btn}
      closeOnClick={false}
    />
  );
};

export { ChatInputMenuBtn };
