import { css } from "@emotion/css";
import { basis, black, fill, functional } from "components/constants/colors";
import { UploadContext } from "contexts/UploadContext";
import { useContext, useState } from "react";
import { Button } from "./Button";
import { ReactComponent as ArrowAngleDownMdSvg } from "resources/img/ArrowAngleDownMd.svg";
import { ReactComponent as XSvg } from "resources/img/x.svg";
import { ReactComponent as CsvSvg } from "resources/img/fileIcon/Csv.svg";
import { ReactComponent as DocSvg } from "resources/img/fileIcon/Doc.svg";
import { ReactComponent as ImgSvg } from "resources/img/fileIcon/Img.svg";
import { ReactComponent as PdfSvg } from "resources/img/fileIcon/Pdf.svg";
import { ReactComponent as TrachSvg } from "resources/img/fileIcon/Trash.svg";
import { ReactComponent as ZipSvg } from "resources/img/fileIcon/Csv.svg";

export const UploadWidget = () => {
  const { files, removeFile, visibility, setVisibility } =
    useContext(UploadContext);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {visibility && (
        <div
          className={css`
            position: fixed;
            bottom: 0;
            left: 319px;
            display: flex;
            width: 320px;
            min-height: 36px;
            padding: 16px 12px 12px 16px;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            border-radius: 12px 12px 0px 0px;
            border: 1px solid #2dd4bb;
            background: ${basis.bg_subtle};
            box-shadow: 0px -4px 4px -4px rgba(79, 81, 89, 0.32),
              0px -4px 14px -2px rgba(79, 81, 89, 0.12),
              0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
              0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
          `}
          style={{
            maxHeight: collapsed ? 36 : 319,
          }}
        >
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              align-self: stretch;
            `}
          >
            <span
              className={css`
                color: ${black};
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
              `}
            >
              正在上传 (5/10)
            </span>
            <span
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4px;
                align-self: stretch;
              `}
            >
              <Button
                variant="tertiary"
                size="xs"
                onClick={() => setCollapsed(!collapsed)}
              >
                <ArrowAngleDownMdSvg
                  height={16}
                  width={16}
                  style={{
                    transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Button>
              <Button
                variant="tertiary"
                size="xs"
                onClick={() => setVisibility(false)}
              >
                <XSvg />
              </Button>
            </span>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              overflow-y: scroll;
              gap: 12px;
              flex-shrink: 1;
              padding-right: 12px;
            `}
            style={{
              flexGrow: collapsed ? "0.0001" : "1",
            }}
          >
            {Object.entries(files).map(([key, { name, type }]) => (
              <div
                key={key}
                className={css`
                  flex-shrink: 0;
                  display: flex;
                  flex-direction: row;
                  border-radius: 6px;
                  box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                    0px 2px 5px -2px rgba(79, 81, 89, 0.03),
                    0px 0px 0px 1px rgba(188, 189, 194, 0.25),
                    0px 1px 1px 0px rgba(188, 189, 194, 0.2);
                  background: ${fill.base.layer_on};
                  overflow: hidden;
                  flex-wrap: wrap;
                `}
              >
                <div
                  className={css`
                    flex: calc(66% - 16px) 1 0;
                    display: flex;
                    flex-direction: row;
                    padding: 8px;
                    align-items: center;
                    gap: 6px;
                  `}
                >
                  {type === "csv" ? (
                    <CsvSvg />
                  ) : type === "doc" ? (
                    <DocSvg />
                  ) : type === "img" ? (
                    <ImgSvg />
                  ) : type === "pdf" ? (
                    <PdfSvg />
                  ) : type === "trash" ? (
                    <TrachSvg />
                  ) : type === "zip" ? (
                    <ZipSvg />
                  ) : null}
                  <span>{name}</span>
                </div>
                <Button
                  variant="tertiary"
                  style={{
                    flex: "36px 0 0",
                    borderRadius: 0,
                  }}
                  size="sm"
                >
                  <XSvg onClick={() => removeFile(Number(key))} />
                </Button>
                <div
                  className={css`
                    flex: 100% 0 1;
                    background: rgba(52, 211, 147, 0.4);
                    height: 2px;
                    display: flex;
                    flex-direction: row;
                  `}
                >
                  <div
                    className={css`
                      flex: 100% 0 0;
                      background: ${functional.success.border_vibrant};
                      height: 100%;
                      border-radius: 1px;
                    `}
                    style={{ transform: `translateX(-${100 - 50}%)` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
