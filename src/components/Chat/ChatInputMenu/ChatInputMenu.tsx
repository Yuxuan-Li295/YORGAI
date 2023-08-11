import { css } from "@emotion/css";
import { basis, rainbow } from "components/constants/colors";
import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Error } from "resources/img/Error.svg";
import { ReactComponent as ImgFile } from "resources/img/fileIcon/Img.svg";
import { ReactComponent as PdfFile } from "resources/img/fileIcon/Pdf.svg";
import { ReactComponent as ZipFile } from "resources/img/fileIcon/Zip.svg";
import { ReactComponent as DocFile } from "resources/img/fileIcon/Doc.svg";
import { ReactComponent as XSmRed } from "resources/img/XSmRed.svg";
import { ReactComponent as PaperIcon } from "resources/img/fileIcon/Paper.svg";

const ChatInputMenu = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [expand, setExpand] = useState(false);
  const [Uploaded, setIsUploaded] = useState(false);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
      // if (file.size <= 20 * 1024 * 1024) {
      //   // handleFileInput(file);
      //   setUploadedFile(file);
      //   // console.log(file.type.startsWith("image/jpeg"));
      //   console.log(file.type);
      // } else {
      //   alert("文件大小超过限制，请选择小于20MB的文件。");
      // }
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
  const onMouseEnter = () => {
    if (Uploaded) {
      setExpand(true);
    }
  };
  const containerRef = useRef(null); // 创建一个 ref 来存储 div 容器的引用

  useEffect(() => {
    // 在 componentDidMount 和 componentDidUpdate 时添加 mousedown 事件监听
    const handleOutsideClick = (event: any) => {
      if (
        containerRef.current &&
        !(containerRef.current as HTMLElement).contains(event.target)
      ) {
        setExpand(false); // 点击在容器外部时，将 expand 设置为 false
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
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
            background: var(--basis-bg, #f9f9fa);
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 2px 14px -2px rgba(79, 81, 89, 0.12),
              0px 0px 0px 1px rgba(188, 189, 194, 0.22),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
          `}
          onMouseEnter={onMouseEnter}
        >
          {getDisplayBtn()}
          <div
            className={css`
              color: var(--basis-text, #707480);
              text-align: center;
              font-family: PingFang SC;
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            `}
          >
            {getDisplayText()}
          </div>
        </div>
      </label>
      {expand && (
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
          ref={containerRef}
          onMouseEnter={() => setExpand(true)}
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
                      font-family: PingFang SC;
                      font-size: 12px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 16px;
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
                    font-family: PingFang SC;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 16px;
                  `}
                >
                  添加文件
                </div>
              </div>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export { ChatInputMenu };
