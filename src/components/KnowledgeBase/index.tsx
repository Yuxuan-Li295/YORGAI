import { css } from "@emotion/css";
import { FileStatus } from "contexts/UploadContext";
import { useReducer } from "react";
import { FileSel } from "./FileSel";
import { KnowledgeBaseSel } from "./KnowledgeBaseSel";
import { KB, ToolMsg, ToolState } from "./types";

export const KnowledgeBase = () => {
  const [state, changeState] = useReducer(
    (prevState: ToolState, msg: ToolMsg) => {
      switch (msg.cmd) {
        case "loadKB":
          return { ...prevState, kbList: msg.kbList, initialized: true };
        case "setKB":
          return { ...prevState, selected: msg.idx };
        case "toggleFile":
          if (msg.kbIdx === undefined) {
            msg.kbIdx = prevState.selected;
          }
          if (
            prevState.kbList
              .map(({ selectedCount }) => selectedCount)
              .reduce((x, y) => x + (y ?? 0), 0) >=
              prevState.maxSelectedCount &&
            !prevState.kbList[msg.kbIdx].files[msg.fileIdx].selected
          ) {
            return prevState;
          }
          return {
            ...prevState,
            kbList: prevState.kbList.map((dir, idx) =>
              idx !== msg.kbIdx
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
          if (msg.kbIdx === undefined) {
            msg.kbIdx = prevState.selected;
          }
          if (
            prevState.kbList[msg.kbIdx].files.length +
              prevState.kbList
                .map(({ selectedCount }, idx) =>
                  idx === msg.kbIdx ? 0 : selectedCount,
                )
                .reduce((x, y) => x + (y ?? 0), 0) >
            prevState.maxSelectedCount
          ) {
            return prevState;
          }
          return {
            ...prevState,
            kbList: prevState.kbList.map((dir, idx) =>
              idx !== msg.kbIdx
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
      kbList: [
        ...Array(20).fill({
          name: "小鱼厂最新设计",
          files: Array(10).fill({
            visible: true,
            name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            status: FileStatus.Done,
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

  const selectedKB = state.kbList[state.selected];
  const totSelectedCount = state.kbList
    .map(({ selectedCount }) => selectedCount)
    .reduce((x, y) => x + (y ?? 0), 0);
  const loadKB = (kb: KB[]) => changeState({ cmd: "loadKB", kbList: kb });
  const setKB = (idx: number) => changeState({ cmd: "setKB", idx });
  const toggleAllFiles = () => changeState({ cmd: "toggleAllFiles" });
  const toggleFile = (idx: number) =>
    changeState({ cmd: "toggleFile", fileIdx: idx });

  return (
    <div
      className={css`
        flex: calc(100vh - 64px - 1px - 12px * 2) 0 1;
        display: flex;
        flex-direction: row;
        margin: 12px;
        align-self: stretch;
        border-radius: 8px;
        overflow: hidden;
      `}
    >
      <KnowledgeBaseSel
        kbList={state.kbList}
        setKB={setKB}
        selected={state.selected}
      />
      <FileSel
        selected={selectedKB}
        toggleFile={toggleFile}
        toggleAllFiles={toggleAllFiles}
        totSelectedCount={totSelectedCount}
        maxSelectedCount={state.maxSelectedCount}
      />
    </div>
  );
};
