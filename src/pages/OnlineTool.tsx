import { css } from "@emotion/css";
import { PatingSideBar } from "components/Compose/PaintingSideBar";
import { OnlineToolBody } from "components/OnlineTool/OnlineToolBody";
import { OnlineToolHeader } from "components/OnlineTool/OnlineToolHeader";
import { OnlineToolSideBar } from "components/OnlineTool/OnlineToolSideBar";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { basis } from "components/constants/colors";
import { useEffect, useMemo, useReducer, useState } from "react";
import { ToolsMode, ToolsNormalModes } from "types/OnlineToolTypes";

declare global {
  var debugEnableKBMode: () => void;
  var debugDisableKBMode: () => void;
}

const configSidebarWrapperStyle = css`
  width: 462px;
  overflow: auto;
`;

const OnlineTool = () => {
  type ToolsModeState = {
    isKnowledgeBaseMode: boolean;
    underlyingMode: ToolsNormalModes;
  };

  type ModeMsg =
    | { cmd: "enableKnowledgeBaseMode" | "disableKnowledgeBaseMode" }
    | { cmd: "changeMode"; mode: ToolsNormalModes };

  const [modeState, changeModeState] = useReducer(
    (prevState: ToolsModeState, msg: ModeMsg) => {
      switch (msg.cmd) {
        case "enableKnowledgeBaseMode":
          return {
            ...prevState,
            isKnowledgeBaseMode: true,
          };
        case "disableKnowledgeBaseMode":
          return {
            ...prevState,
            isKnowledgeBaseMode: false,
          };
        case "changeMode":
          return prevState.isKnowledgeBaseMode
            ? prevState
            : {
              ...prevState,
              underlyingMode: msg.mode,
            };
      }
    },
    { isKnowledgeBaseMode: false, underlyingMode: ToolsMode.Home },
  );

  const mode = useMemo(
    () =>
      modeState.isKnowledgeBaseMode
        ? ToolsMode.KnowledgeBase
        : modeState.underlyingMode,
    [modeState],
  );

  const showNormalMode = (mode: ToolsNormalModes) =>
    changeModeState({ cmd: "changeMode", mode });

  const setKnowledgeBaseMode = () =>
    changeModeState({ cmd: "enableKnowledgeBaseMode" });

  const unsetKnowledgeBaseMode = () =>
    changeModeState({ cmd: "disableKnowledgeBaseMode" });

  const [knowledgeBases, setKnowledgeBases] = useState();

  useEffect(() => {
    globalThis.debugEnableKBMode = setKnowledgeBaseMode;
    globalThis.debugDisableKBMode = setKnowledgeBaseMode;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChooseModelDialogVisible, setChooseModelDialogVisible] =
    useState(false);

  const toggleChooseModelDialog = () => {
    setChooseModelDialogVisible((prevVisible) => !prevVisible);
  };

  const [selectedItem, setSelectedItem] = useState<{
    dayIndex: number;
    itemIndex: number;
    title: string;
  } | null>(null);

  const handleSelectedItemChange = (
    newSelectedItem: {
      dayIndex: number;
      itemIndex: number;
      title: string;
    } | null,
  ) => {
    setSelectedItem(newSelectedItem);
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        min-width: 1200px;
        background: white;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <PrimaryNavBar />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex: 100vh 0 1;
          background-color: ${basis.bg_muted};
        `}
      >
        {mode === ToolsMode.Paint ? (
          <div
            className={css`
              ${isSidebarOpen ? configSidebarWrapperStyle : 'width: 0; overflow: hidden;'};
              transition: width 0.3s ease-in-out;
            `}
          >
            <PatingSideBar />
          </div>
        ) : (
          <OnlineToolSideBar
            isSidebarOpen={isSidebarOpen}
            selectedItem={selectedItem}
            handleSelectedItemChangeCallback={handleSelectedItemChange}
            toggleChooseModelDialog={toggleChooseModelDialog}
            showNormalMode={showNormalMode}
            unsetKnowledgeBaseMode={unsetKnowledgeBaseMode}
          />
        )}

        <div
          className={css`
            flex: 100vw 0 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            overflow: hidden;
          `}
        >
          <OnlineToolHeader
            mode={mode}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            selectedItem={selectedItem}
            handleSelectedItemChange={handleSelectedItemChange}
          />
          <OnlineToolBody
            mode={mode}
            showNormalMode={showNormalMode}
            setKnowledgeBaseMode={setKnowledgeBaseMode}
          />
        </div>
      </div>
    </div>
  );
};

export { OnlineTool };
