import { css } from "@emotion/css";
import { basis, fill, transparent } from "components/constants/colors";
import { FC, PropsWithChildren, useReducer } from "react";
import { ReactComponent as LibrarySvg } from "resources/img/Library.svg";
import { ReactComponent as SquareSSvg } from "resources/img/SquareS.svg";
import { ReactComponent as SearchSvg } from "resources/img/Search.svg";
import { ReactComponent as DownloadSvg } from "resources/img/Download.svg";
import { ReactComponent as TransferSvg } from "resources/img/Transfers.svg";
import { ReactComponent as TrashSvg } from "resources/img/Trash.svg";
import { ReactComponent as UploadSvg } from "resources/img/Upload.svg";
import { ReactComponent as CircleExportSvg } from "resources/img/CircleExport.svg";
import { ReactComponent as EyeShowSvg } from "resources/img/EyeShow.svg";
import { IconButton } from "components/shared/IconButton";
import { VerticalBar } from "components/shared/VerticalBar";
import { Button } from "components/shared/Button";
import { CheckBox } from "components/shared/CheckBox";
import { Tag } from "components/shared/Tag";

export const KnowledgeBase = () => {
  enum KnowledgeBaseFileStatus {
    Offline = "Offline",
    Done = "Done",
    Protect = "Protect",
    Testing = "Testing",
  }
  type KnowledgeBaseFile = {
    name: string;
    visible: boolean;
    status: KnowledgeBaseFileStatus;
    selected: boolean;
    uploadTime: string;
    size: string;
    type: string;
  };
  type KnowledgeBaseDir = {
    name: string;
    selectedCount: number;
    files: KnowledgeBaseFile[];
  };
  type KnowledgeBaseState = {
    dirs: KnowledgeBaseDir[];
    selected: number;
    maxSelectedCount: number;
    initialized: boolean;
  };
  type InitMsg = { cmd: "loadDir"; dirs: KnowledgeBaseDir[] };
  type SetDirMsg = { cmd: "setDir"; idx: number };
  type ToggleFileMsg = { cmd: "toggleFile"; dirIdx?: number; fileIdx: number };
  type ToggleAllFilesMsg = { cmd: "toggleAllFiles"; dirIdx?: number };
  type KnowledgeBaseMsg =
    | InitMsg
    | SetDirMsg
    | ToggleFileMsg
    | ToggleAllFilesMsg;
  const [state, changeState] = useReducer(
    (prevState: KnowledgeBaseState, msg: KnowledgeBaseMsg) => {
      switch (msg.cmd) {
        case "loadDir":
          return { ...prevState, dirs: msg.dirs, initialized: true };
        case "setDir":
          return { ...prevState, selected: msg.idx };
        case "toggleFile":
          if (msg.dirIdx === undefined) {
            msg.dirIdx = prevState.selected;
          }
          if (
            prevState.dirs
              .map(({ selectedCount }) => selectedCount)
              .reduce((x, y) => x + (y ?? 0), 0) >=
              prevState.maxSelectedCount &&
            !prevState.dirs[msg.dirIdx].files[msg.fileIdx].selected
          ) {
            return prevState;
          }
          return {
            ...prevState,
            dirs: prevState.dirs.map((dir, idx) =>
              idx !== msg.dirIdx
                ? dir
                : {
                    ...dir,
                    selectedCount:
                      (dir.selectedCount ?? 0) +
                      (dir.files[msg.fileIdx].selected ? -1 : 1),
                    files: dir.files.map((file, idx) =>
                      idx === msg.fileIdx
                        ? { ...file, selected: !file.selected }
                        : file,
                    ),
                  },
            ),
          };
        case "toggleAllFiles":
          if (msg.dirIdx === undefined) {
            msg.dirIdx = prevState.selected;
          }
          if (
            prevState.dirs[msg.dirIdx].files.length +
              prevState.dirs
                .map(({ selectedCount }, idx) =>
                  idx === msg.dirIdx ? 0 : selectedCount,
                )
                .reduce((x, y) => x + (y ?? 0), 0) >
            prevState.maxSelectedCount
          ) {
            return prevState;
          }
          return {
            ...prevState,
            dirs: prevState.dirs.map((dir, idx) =>
              idx !== msg.dirIdx
                ? dir
                : {
                    ...dir,
                    selectedCount:
                      dir.selectedCount !== dir.files.length
                        ? dir.files.length
                        : 0,
                    files: dir.files.map((file) => ({
                      ...file,
                      selected: dir.selectedCount !== dir.files.length,
                    })),
                  },
            ),
          };
      }
    },
    {
      dirs: [
        ...Array(20).fill({
          name: "小鱼厂最新设计",
          files: Array(10).fill({
            visible: true,
            name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            status: KnowledgeBaseFileStatus.Done,
            uploadTime: "2023-03-30 01:10",
            size: "1000 KB",
            type: "pdf",
          }),
        }),
      ],
      selected: 0,
      initialized: true,
      maxSelectedCount: 10,
    },
  );

  const selectedDir = state.dirs[state.selected];
  const totSelectedCount = state.dirs
    .map(({ selectedCount }) => selectedCount)
    .reduce((x, y) => x + (y ?? 0), 0);
  const setDir = (idx: number) => changeState({ cmd: "setDir", idx });
  const toggleAllFiles = () => changeState({ cmd: "toggleAllFiles" });
  const toggleFile = (idx: number) =>
    changeState({ cmd: "toggleFile", fileIdx: idx });

  const knowledgeBaseSel = (
    <div
      className={css`
        display: flex;
        flex: 291px 0 0;
        flex-direction: column;
        align-items: stretch;
        align-self: stretch;
        background: ${basis.bg_subtle};
        border-right: 1px solid ${basis.border_subtle};
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 20px 16px;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h4
          className={css`
        color: ${basis.text_loud}
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; 
      `}
        >
          我的知识库
        </h4>
        <SquareSSvg
          className={css`
            width: 18px;
            height: 18px;
          `}
        />
      </div>
      <div
        className={css`
          flex: 100vh 0 1;
          overflow: scroll;
          display: flex;
          padding: 8px;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        `}
      >
        {state.dirs.map((dir, idx) => (
          <div
            key={idx}
            onClick={() => setDir(idx)}
            className={css`
              display: flex;
              height: 20px;
              padding: 6px 8px;
              align-items: center;
              align-self: stretch;
              flex-direction: row;
              border-radius: 6px;
              gap: 8px;
            `}
            style={{
              background:
                idx === state.selected ? basis.alt.bg_vibrant : transparent,
              color: idx === state.selected ? basis.text_loud : basis.text,
            }}
          >
            <LibrarySvg />
            <span
              className={css`
                display: flex;
                flex-grow: 1;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
              `}
            >
              {dir.name}
            </span>
            {dir.selectedCount > 0 && (
              <div
                className={css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 10px;
                  background-color: #67cdbc;
                  padding: 0 6px;
                  height: 20px;
                  color: ${fill.base.layer};
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 16px;
                `}
              >
                <span>{dir.selectedCount}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const fileSel = (
    <div
      className={css`
        display: flex;
        flex: 100vw 0 1;
        flex-direction: column;
        align-items: stretch;
        overflow: hidden;
      `}
    >
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
              &:hover,
              &:active,
              &:focus {
                outline: none;
              }
              color: ${basis.text}
              &:placeholder {
                color: ${basis.text_subtle};
              }
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px; 
              overflow: hidden;
              text-overflow: ellipsis;
              whitespace: nowrap; 
            `}
            />
          </div>
          <VerticalBar height={16} />
          <IconButton icon={<DownloadSvg />} />
          <IconButton icon={<TransferSvg />} />
          <IconButton icon={<TrashSvg />} />
          <Button size="sm" prepend={<UploadSvg />}>
            上传
          </Button>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          flex: 100vh 0 1;
          overflow-y: scroll;
          overflow-x: hidden;
        `}
      >
        <TableCol>
          <TableCell variant="dark" sep>
            <CheckBox
              enabled={selectedDir.selectedCount === selectedDir.files.length}
              onToggle={toggleAllFiles}
            />
          </TableCell>
          {selectedDir.files
            .filter(({ visible }) => visible)
            .map((file, idx) => (
              <TableCell height={32} variant={idx % 2 === 0 ? "light" : "dark"}>
                <CheckBox
                  enabled={file.selected}
                  onToggle={() => toggleFile(idx)}
                />
              </TableCell>
            ))}
        </TableCol>
        <TableCol grow>
          <TableCell variant="dark" sep>
            <TabelLabel label="名称" />
          </TableCell>
          {selectedDir.files
            .filter(({ visible }) => visible)
            .map((file, idx) => (
              <TableCell height={32} variant={idx % 2 === 0 ? "light" : "dark"}>
                <div
                  className={css`
                    display: flex;
                    flex: 100vw 0 1;
                    flex-direction: row;
                    overflow: hidden;
                    justify-content: space-between;
                    align-items: center;
                    & > button {
                      opacity: 0;
                    }
                    &:hover > button {
                      opacity: 1;
                    }
                  `}
                >
                  <span
                    className={css`
                      flex: 100vw 0 1;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                    `}
                  >
                    {file.name}
                  </span>
                  <IconButton icon={<EyeShowSvg />} />
                </div>
              </TableCell>
            ))}
        </TableCol>
        <TableCol>
          <TableCell variant="dark" sep>
            <TabelLabel label="名称" />
          </TableCell>
          {selectedDir.files
            .filter(({ visible }) => visible)
            .map((file, idx) => (
              <TableCell height={32} variant={idx % 2 === 0 ? "light" : "dark"}>
                <Tag>{file.status}</Tag>
              </TableCell>
            ))}
        </TableCol>
        <TableCol>
          <TableCell variant="dark" sep>
            <TabelLabel label="上传时间" />
          </TableCell>
          {selectedDir.files
            .filter(({ visible }) => visible)
            .map((file, idx) => (
              <TableCell height={32} variant={idx % 2 === 0 ? "light" : "dark"}>
                {file.uploadTime}
              </TableCell>
            ))}
        </TableCol>
        <TableCol>
          <TableCell variant="dark" sep>
            <TabelLabel label="文件大小" />
          </TableCell>
          {selectedDir.files
            .filter(({ visible }) => visible)
            .map((file, idx) => (
              <TableCell height={32} variant={idx % 2 === 0 ? "light" : "dark"}>
                {file.size}
              </TableCell>
            ))}
        </TableCol>
        <TableCol>
          <TableCell variant="dark">
            <TabelLabel label="文件类型" />
          </TableCell>
          {selectedDir.files
            .filter(({ visible }) => visible)
            .map((file, idx) => (
              <TableCell height={32} variant={idx % 2 === 0 ? "light" : "dark"}>
                {file.type}
              </TableCell>
            ))}
        </TableCol>
      </div>
      <div
        className={css`
          flex: fit-content 0 0;
          display: flex;
          padding: 12px 24px;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid ${basis.border_subtle};
          color: ${basis.text_loud};
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        `}
      >
        <span
          className={css`
            white-space: nowrap;
          `}
        >
          已选择{totSelectedCount}个文件
          {state.maxSelectedCount - totSelectedCount > 0 &&
            `（还可以选择${state.maxSelectedCount - totSelectedCount}个）`}
        </span>
        <Button size="sm">
          <CircleExportSvg />
        </Button>
      </div>
    </div>
  );

  return (
    <div
      className={css`
        flex: calc(100vh - 64px - 1px - 48px - 1px - 12px * 2) 0 1;
        display: flex;
        flex-direction: row;
        margin: 12px;
        align-self: stretch;
        border-radius: 8px;
        background: ${fill.base.layer_on};
        overflow: hidden;
      `}
    >
      {knowledgeBaseSel}
      {fileSel}
    </div>
  );
};

const TableCol: FC<PropsWithChildren<{ grow?: boolean }>> = ({
  children,
  grow,
}) => (
  <div
    className={css`
      flex: ${grow ? "fit-content 1 1" : "fit-content 0 0"};
      display: flex;
      flex-direction: column;
      align-items: stretch;
      overflow: hidden;
    `}
  >
    {children}
  </div>
);

const TableCell: FC<
  PropsWithChildren<{
    variant: "light" | "dark";
    height?: number;
    sep?: boolean;
  }>
> = ({ variant, height, children, sep }) => (
  <div
    className={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: ${variant === "dark" ? basis.alt.bg_subtle : "transparent"};
      overflow: hidden;
      white-space: nowrap;
      ${height === undefined ? "" : `height: ${height}px;`}
      color: ${basis.text_loud};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      padding: 10px 12px;
      ${sep
        ? `position: relative;
          &::after {
            position: absolute;
            right: 0;
            height: 16px;
            width: 1px;
            content: " ";
            background: ${basis.border_subtle};
          }`
        : ""}
    `}
  >
    {children}
  </div>
);

const TabelLabel: FC<{ label: string }> = ({ label }) => (
  <span
    className={css`
      color: ${basis.text};
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
    `}
  >
    {label}
  </span>
);
