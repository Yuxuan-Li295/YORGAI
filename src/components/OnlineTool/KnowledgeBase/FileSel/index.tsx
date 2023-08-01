import { css } from "@emotion/css";
import { basis, primary } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { CheckBox } from "components/shared/CheckBoxOrRadio";
import { Badge } from "components/shared/Badge";
import { FC } from "react";
import { ReactComponent as CircleExportSvg } from "resources/img/CircleExport.svg";
import { ReactComponent as EyeShowSvg } from "resources/img/EyeShow.svg";
import { TabelLabel, TableCell, TableCol } from "../Table";
import { KB } from "../types";
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
          <CheckBox
            size="sm"
            colorPattern={primary}
            checked={selected.files.length === selected.selectedCount}
            disabled={
              selected.files.length !== selected.selectedCount &&
              maxSelectedCount <
                totSelectedCount -
                  (selected.selectedCount ?? 0) +
                  selected.files.length
            }
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
              <CheckBox
                colorPattern={primary}
                size="sm"
                checked={file.selected}
                disabled={
                  !file.selected && maxSelectedCount <= totSelectedCount
                }
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
              <Badge>{file.status}</Badge>
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
