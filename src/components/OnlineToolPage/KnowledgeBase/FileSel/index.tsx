import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Tag } from "components/shared/Tag";
import { ReactComponent as CircleExportSvg } from "resources/img/CircleExport.svg";
import { ReactComponent as EyeShowSvg } from "resources/img/EyeShow.svg";
import { TableCol, TableCell, TabelLabel } from "../Table";
import { KB } from "../types";
import { FC } from "react";
import { CheckBoxOrRadio } from "components/shared/CheckBoxOrRadio";
import { Header } from "./Header";

export const FileSel: FC<{
  selected: KB;
  toggleFile: (idx: number) => void;
  toggleAllFiles: () => void;
  totSelectedCount: number;
  maxSelectedCount: number;
}> = ({
  selected,
  toggleFile,
  toggleAllFiles,
  totSelectedCount,
  maxSelectedCount,
}) => (
  <div
    className={css`
      display: flex;
      flex: 100vw 0 1;
      flex-direction: column;
      align-items: stretch;
      overflow: hidden;
    `}
  >
    <Header />
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
          <CheckBoxOrRadio
            type="checkbox"
            size="sm"
            colorPattern={basis}
            checked={selected.files.length === selected.selectedCount}
            disabled={maxSelectedCount <= totSelectedCount}
            onChange={toggleAllFiles}
          />
        </TableCell>
        {selected.files
          .filter(({ visible }) => visible)
          .map((file, idx) => (
            <TableCell
              key={idx}
              height={32}
              variant={idx % 2 === 0 ? "light" : "dark"}
            >
              <CheckBoxOrRadio
                type="checkbox"
                size="sm"
                checked={file.selected}
                disabled={maxSelectedCount <= totSelectedCount}
                onChange={() => toggleFile(idx)}
              />
            </TableCell>
          ))}
      </TableCol>
      <TableCol grow>
        <TableCell variant="dark" sep>
          <TabelLabel label="名称" />
        </TableCell>
        {selected.files
          .filter(({ visible }) => visible)
          .map((file, idx) => (
            <TableCell
              key={idx}
              height={32}
              variant={idx % 2 === 0 ? "light" : "dark"}
            >
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
                <Button variant="tertiary">
                  <EyeShowSvg />
                </Button>
              </div>
            </TableCell>
          ))}
      </TableCol>
      <TableCol>
        <TableCell variant="dark" sep>
          <TabelLabel label="名称" />
        </TableCell>
        {selected.files
          .filter(({ visible }) => visible)
          .map((file, idx) => (
            <TableCell
              key={idx}
              height={32}
              variant={idx % 2 === 0 ? "light" : "dark"}
            >
              <Tag>{file.status}</Tag>
            </TableCell>
          ))}
      </TableCol>
      <TableCol>
        <TableCell variant="dark" sep>
          <TabelLabel label="上传时间" />
        </TableCell>
        {selected.files
          .filter(({ visible }) => visible)
          .map((file, idx) => (
            <TableCell
              key={idx}
              height={32}
              variant={idx % 2 === 0 ? "light" : "dark"}
            >
              {file.uploadTime}
            </TableCell>
          ))}
      </TableCol>
      <TableCol>
        <TableCell variant="dark" sep>
          <TabelLabel label="文件大小" />
        </TableCell>
        {selected.files
          .filter(({ visible }) => visible)
          .map((file, idx) => (
            <TableCell
              key={idx}
              height={32}
              variant={idx % 2 === 0 ? "light" : "dark"}
            >
              {file.size}
            </TableCell>
          ))}
      </TableCol>
      <TableCol>
        <TableCell variant="dark">
          <TabelLabel label="文件类型" />
        </TableCell>
        {selected.files
          .filter(({ visible }) => visible)
          .map((file, idx) => (
            <TableCell
              key={idx}
              height={32}
              variant={idx % 2 === 0 ? "light" : "dark"}
            >
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
        {maxSelectedCount - totSelectedCount > 0 &&
          `（还可以选择${maxSelectedCount - totSelectedCount}个）`}
      </span>
      <Button size="sm">
        <CircleExportSvg />
      </Button>
    </div>
  </div>
);
