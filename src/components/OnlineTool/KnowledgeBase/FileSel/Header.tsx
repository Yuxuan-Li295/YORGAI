import { css } from "@emotion/css";
import { basis, fill } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { VerticalBar } from "components/shared/VerticalBar";
import { ReactComponent as SearchSvg } from "resources/img/Search.svg";
import { ReactComponent as DownloadSvg } from "resources/img/Download.svg";
import { ReactComponent as TransferSvg } from "resources/img/Transfers.svg";
import { ReactComponent as TrashSvg } from "resources/img/Trash.svg";
import { ReactComponent as UploadSvg } from "resources/img/Upload.svg";
import { DropdownBase } from "components/shared/Dropdown";
import { Segment } from "components/shared/Segment";
import { FileUploadBox } from "components/shared/FileUploadBox";

export const Header = () => (
  <div
    className={css`
      display: flex;
      padding: 12px 16px;
      justify-content: space-between;
      align-items: center;
      background: ${basis.bg_subtle};
      border-bottom: 1px solid ${basis.alt.border};
      gap: 16px;
    `}
  >
    <h6
      className={css`
        white-space: nowrap;
        color: ${basis.text_loud};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      `}
    >
      小鱼厂最新设计
    </h6>
    <div
      className={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-shrink: 0;
        gap: 16px;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          width: 160px;
          padding: 6px 6px 6px 12px;
          align-items: center;
          gap: 8px;
          border-radius: 6px;
          background: ${fill.base.layer_overlay_subtle};
          box-shadow: 0px -1px 0px 0px rgba(188, 189, 194, 0.2) inset;
        `}
      >
        <SearchSvg
          className={css`
            flex-grow: 0;
            flex-shrink: 0;
            color: ${basis.text_subtle};
          `}
        />
        <input
          type="text"
          placeholder="搜索"
          className={css`
            padding: 0;
            flex-shrink: 1;
            display: flex;
            background: transparent;
            border: none;
            color: ${basis.text};
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            whitespace: nowrap;
            &:hover,
            &:active,
            &:focus {
              outline: none;
            }
            &:placeholder {
              color: ${basis.text_subtle};
            }
          `}
        />
      </div>
      <VerticalBar height={16} />
      <Button variant="tertiary">
        <DownloadSvg />
      </Button>
      <Button variant="tertiary">
        <TransferSvg />
      </Button>
      <Button variant="tertiary">
        <TrashSvg />
      </Button>
      <DropdownBase
        closeOnClick={false}
        dropdownToggle={
          <Button size="sm" prepend={<UploadSvg />}>
            上传
          </Button>
        }
        dropdownMenu={
          <div
            className={css`
              display: inline-flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-end;
              border-radius: 8px;
              background-color: ${fill.base.layer};
              box-shadow: 0px 12px 20px -8px rgba(79, 81, 89, 0.16),
                0px 6px 12px -4px rgba(79, 81, 89, 0.12),
                0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
                0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
            `}
          >
            <div
              className={css`
                display: flex;
                padding: 12px 24px;
                align-items: center;
                gap: 8px;
                align-self: stretch;
                border-bottom: 1px solid ${basis.border_subtle};
                font-size: 16px;
                color: ${basis.text_muted};
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
              `}
            >
              上传
            </div>
            <div
              className={css`
                display: flex;
                position: relative;
                padding: 24px;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                gap: 20px;
                align-self: stretch;
                &::after {
                  content: "*";
                  position: absolute;
                  right: 0;
                  top: 0;
                }
              `}
            >
              <Segment list={["文件", "纯文本", "链接"]} />
              <FileUploadBox
                handleFileInput={() => {
                  /* TODO: file input */
                }}
              />
            </div>
          </div>
        }
        align="right"
      />
    </div>
  </div>
);
