import { css } from "@emotion/css";
import { basis, fill, primary } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Tag } from "components/shared/Tag";
import { ReactComponent as CircleExportSvg } from "resources/img/CircleExport.svg";
import { ReactComponent as EyeShowSvg } from "resources/img/EyeShow.svg";
import { TableCol, TableCell, TabelLabel } from "../Table";
import { KB } from "../types";
import React, { FC, createRef, useState } from "react";
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
}) => {
  type TblCol = "name" | "status" | "uploadTime" | "fileSize" | "fileType";
  type TblPerm = [TblCol, TblCol, TblCol, TblCol, TblCol];
  const [tblColPerm, setTblColPerm] = useState<TblPerm>([
    "name",
    "status",
    "uploadTime",
    "fileSize",
    "fileType",
  ]);
  const [curTblCol, setCurTblCol] = useState<TblCol>();
  const dragHelperDivRef = createRef<HTMLDivElement>();
  // const [dragStartX, setDragStartX] = useState<number>();
  // const [dragCurX, setDragCurX] = useState<number>();

  const genDragProps = (col: TblCol) => ({
    draggable: true,
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setDragImage(dragHelperDivRef.current!, 0, 0);
      setCurTblCol(col);
      // setDragStartX(e.clientX);
      // setDragCurX(e.clientX);
    },
    // onDrag: (e: React.DragEvent<HTMLDivElement>) => {
    //   setDragCurX(e.clientX);
    // },
    onDrop: () => {
      if (curTblCol === col || curTblCol === undefined) return;
      setTblColPerm(
        tblColPerm.map((x) =>
          x === col ? curTblCol : x === curTblCol ? col : x,
        ) as TblPerm,
      );
    },
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => e.preventDefault(),
    onDragEnd: () => {
      // setDragStartX(undefined);
      // setDragCurX(undefined);
      setCurTblCol(undefined);
    },
    // style: {
    //   transform: `translateX(${
    //     (curTblCol ?? "") === col ? (dragCurX ?? 0) - (dragStartX ?? 0) : 0
    //   }px) translateZ(${(curTblCol ?? "") === col ? 1 : -1}px)`,
    //   overflow: (curTblCol ?? "") === col ? "visible" : "hidden",
    //   background: (curTblCol ?? "") === col ? basis.bg_muted : "transparent",
    //   boxShadow:
    //     (curTblCol ?? "") === col
    //       ? "0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 4px 14px -2px rgba(79, 81, 89, 0.12), 0px 0px 0px 1px rgba(188, 189, 194, 0.20), 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset"
    //       : "none",
    // },
  });

  return (
    <div
      className={css`
        display: flex;
        flex: 1 0 0;
        flex-direction: column;
        align-items: stretch;
        overflow: hidden;
      `}
    >
      <div
        ref={dragHelperDivRef}
        className={css`
          display: none;
          position: absolute;
          top: 100000px;
          left: 100000px;
          width: 1px;
          height: 1px;
          background: transparent;
        `}
      />
      <Header />
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          backgroud: ${basis.alt.bg_subtle};
          flex: 1 0 0;
          overflow-y: scroll;
          overflow-x: hidden;
          transform-style: preserve-3d;
        `}
      >
        <TableCol>
          <TableCell variant="dark" sep>
            <CheckBoxOrRadio
              type="checkbox"
              size="xs"
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
                <CheckBoxOrRadio
                  type="checkbox"
                  colorPattern={primary}
                  size="xs"
                  checked={file.selected}
                  disabled={
                    !file.selected && maxSelectedCount <= totSelectedCount
                  }
                  onChange={() => toggleFile(idx)}
                />
              </TableCell>
            ))}
        </TableCol>
        {tblColPerm.map((col) =>
          col === "name" ? (
            <TableCol grow key={col} above={curTblCol === col}>
              <TableCell variant="dark" sep {...genDragProps("name")}>
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
          ) : col === "status" ? (
            <TableCol key={col}>
              <TableCell variant="dark" sep {...genDragProps("status")}>
                <TabelLabel label="状态" />
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
          ) : col === "uploadTime" ? (
            <TableCol key={col}>
              <TableCell variant="dark" sep {...genDragProps("uploadTime")}>
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
          ) : col === "fileSize" ? (
            <TableCol key={col}>
              <TableCell variant="dark" sep {...genDragProps("fileSize")}>
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
          ) : col === "fileType" ? (
            <TableCol key={col}>
              <TableCell variant="dark" sep {...genDragProps("fileType")}>
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
          ) : null,
        )}
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
          background: ${fill.base.layer_on};
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
};
