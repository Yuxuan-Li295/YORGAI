import { css } from "@emotion/css";
import { ChooseModelDialog } from "components/OnlineTool/ChooseModelDialog";
import { KnowledgeBase } from "components/OnlineTool/KnowledgeBase";
import { OnlineToolHeader } from "components/OnlineTool/OnlineToolHeader";
import { OnlineToolSideBar } from "components/OnlineTool/OnlineToolSideBar";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { basis } from "components/constants/colors";
import { useEffect, useMemo, useReducer, useState } from "react";
import { ToolsMode } from "types/OnlineToolTypes";

declare global {
  var debugEnableKBMode: () => void;
  var debugDisableKBMode: () => void;
}

const OnlineTool = () => {
  type ToolsNormalModes =
    | ToolsMode.Home
    | ToolsMode.Chat
    | ToolsMode.Compose
    | ToolsMode.Paint
    | ToolsMode.Podcast;

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
    { isKnowledgeBaseMode: false, underlyingMode: ToolsMode.Chat },
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
        <OnlineToolSideBar
          isSidebarOpen={isSidebarOpen}
          selectedItem={selectedItem}
          handleSelectedItemChangeCallback={handleSelectedItemChange}
          toggleChooseModelDialog={toggleChooseModelDialog}
        />
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
          {mode === ToolsMode.Home ? (
            <>home</>
          ) : mode === ToolsMode.Chat ? (
            <div
              className={css`
                display: flex;
                flex-direction: column;
                flex: 1;
                border-radius: 8px;
                border: 1px solid ${basis.border};
                margin: 12px;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  flex: 1;
                  & :first-child {
                    border-top-right-radius: 8px;
                    border-top-left-radius: 8px;
                  }
                `}
              >
                {/* <UserChatItem>
                  I want you to act as a UX/UI developer. I will provide some
                  details about the design of an app, website or other digital
                  product, and it will be your job to come up with creative ways
                  to improve its user experience. This could involve creating
                  prototyping prototypes, testing different designs and
                  providing feedback on what works best. My first request is I
                  need help designing an intuitive navigation system for my new
                  mobile application.
                </UserChatItem>
                <SystemChatItem
                  prepend={
                    <img
                      className={css`
                        width: 28px;
                        height: 28px;
                      `}
                      src={SystemAvatar}
                      alt="System avatar"
                    />
                  }
                >
                  As a pet behaviorist, I'm here to help you address the
                  aggression issues with your German Shepherd. Aggression in
                  dogs can have various underlying causes, and it's important to
                  understand the root cause before implementing a behavior
                  modification plan. Here are the steps we can take to help
                  manage your dog's aggressions.
                </SystemChatItem>
                <DialogHeader /> */}
                {isChooseModelDialogVisible && <ChooseModelDialog />}
              </div>
              {/* <ChatInput /> */}
            </div>
          ) : mode === ToolsMode.Compose ? (
            <>compose</>
          ) : mode === ToolsMode.Paint ? (
            <>paint</>
          ) : mode === ToolsMode.Podcast ? (
            <>podcast</>
          ) : (
            <KnowledgeBase />
          )}
        </div>
      </div>
    </div>
  );
};

export { OnlineTool };
