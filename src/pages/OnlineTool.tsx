import { css } from "@emotion/css";
import { ChatHistoryItemTrailContainer } from "components/OnlineToolPage/ChatHistoryItemTrailContainer";
import { ChooseModelDialog } from "components/OnlineToolPage/ChooseModelDialog";
import { KnowledgeBase } from "components/OnlineToolPage/KnowledgeBase";
import { SideBar } from "components/OnlineToolPage/Sidebar";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { basis } from "components/constants/colors";
import { body } from "components/constants/fonts";
import { Button } from "components/shared/Button";
import { SingleLineInputField } from "components/shared/SingleLineInputField";
import { useEffect, useMemo, useReducer, useState } from "react";
import { ReactComponent as DoCheck } from "resources/img/DoCheck.svg";
import { ReactComponent as Pencil } from "resources/img/Pencil.svg";
import { ReactComponent as SidebarLeftDark } from "resources/img/SidebarLeftDark.svg";
import { ReactComponent as XLarge } from "resources/img/XLarge.svg";

declare global {
  var debugEnableKBMode: () => void;
  var debugDisableKBMode: () => void;
}

const OnlineTool = () => {
  enum ToolsMode {
    // https://www.figma.com/file/PiWfPFbMoq5k2fDJvF2lxG/%E5%B0%8F%E9%B1%BC%E6%96%B0%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9F?type=design&node-id=2065-274657&mode=dev
    KnowledgeBase,
    // https://www.figma.com/file/PiWfPFbMoq5k2fDJvF2lxG/%E5%B0%8F%E9%B1%BC%E6%96%B0%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9F?type=design&node-id=1454-279891&mode=dev
    Home,
    // https://www.figma.com/file/PiWfPFbMoq5k2fDJvF2lxG/%E5%B0%8F%E9%B1%BC%E6%96%B0%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9F?type=design&node-id=1401-277631&mode=dev
    Standard,
    // https://www.figma.com/file/PiWfPFbMoq5k2fDJvF2lxG/%E5%B0%8F%E9%B1%BC%E6%96%B0%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9F?type=design&node-id=1440-277813&mode=dev
    Compose,
    // https://www.figma.com/file/PiWfPFbMoq5k2fDJvF2lxG/%E5%B0%8F%E9%B1%BC%E6%96%B0%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9F?type=design&node-id=2217-300497&mode=dev
    Paint,
    // https://www.figma.com/file/PiWfPFbMoq5k2fDJvF2lxG/%E5%B0%8F%E9%B1%BC%E6%96%B0%E8%AE%BE%E8%AE%A1%E7%B3%BB%E7%BB%9F?type=design&node-id=2311-263056&mode=dev
    Podcast,
  }

  type ToolsNormalModes =
    | ToolsMode.Home
    | ToolsMode.Standard
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
    { isKnowledgeBaseMode: false, underlyingMode: ToolsMode.Standard },
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

  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
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
  const [originalTitle, setOriginalTitle] = useState(
    selectedItem ? selectedItem.title : "新的会话",
  );
  const [currentTitle, setCurrentTitle] = useState(
    selectedItem ? selectedItem.title : "新的会话",
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectedItemChange = (
    newSelectedItem: {
      dayIndex: number;
      itemIndex: number;
      title: string;
    } | null,
  ) => {
    setSelectedItem(newSelectedItem);
    setCurrentTitle(newSelectedItem ? newSelectedItem.title : "新的会话");
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
        <SideBar
          isSidebarOpen={isSidebarOpened}
          selectedItem={selectedItem}
          handleSelectedItemChangeCallback={handleSelectedItemChange}
          toggleSidebar={setIsSidebarOpened}
          toggleChooseModelDialog={toggleChooseModelDialog}
        />
        {/* TODO: chat menu */}
        <div
          className={css`
            flex: 100vw 0 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            overflow: hidden;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              border-bottom: 1px solid ${basis.alt.border};
              background-color: ${basis.bg_subtle};
              padding: 14px 24px;
              align-items: center;
            `}
          >
            <Button
              variant="tertiary"
              onClick={() => setIsSidebarOpened(!isSidebarOpened)}
            >
              <SidebarLeftDark />
            </Button>
            {mode === ToolsMode.Home ? (
              <span
                className={css`
                  flex: 100vw 0 1;
                  text-align: center;
                  line-height: 20px;
                  font-family: inherit;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 20px;
                  color: ${basis.text_loud};
                `}
              >
                请选择一个模型
              </span>
            ) : mode === ToolsMode.Standard ? (
              <>
                {!selectedItem ? (
                  <span
                    className={css`
                      flex: 100vw 0 1;
                      text-align: center;
                      line-height: 20px;
                      font-family: inherit;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 20px;
                      color: ${basis.text_loud};
                    `}
                  >
                    {currentTitle}
                  </span>
                ) : !isEditing ? (
                  // if selectedItem is not null and is not editing, display the title and a pencil
                  <div
                    className={css`
                      display: flex;
                      flex: 100vw 0 1;
                      text-align: center;
                      align-items: center;
                      justify-content: center;
                      gap: 16px;
                    `}
                  >
                    <div
                      className={css`
                        height: 20px;
                      `}
                    >
                      <div
                        className={css`
                          display: inline-flex;
                          align-items: center;
                          gap: 16px;
                        `}
                      >
                        <span
                          className={css`
                            color: ${basis.text_loud};
                            text-align: center;
                            ${body.sm.regular}
                          `}
                        >
                          {currentTitle}
                        </span>
                        <button
                          className={css`
                            height: 20px;
                            border: none;
                            background: none;
                            outline: none;
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          `}
                          onClick={() => setIsEditing(!isEditing)}
                        >
                          <Pencil />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={css`
                      display: flex;
                      flex: 100vw 0 1;
                      text-align: center;
                      align-items: center;
                      justify-content: center;
                      gap: 16px;
                    `}
                  >
                    <SingleLineInputField
                      value={currentTitle}
                      placeholder={""}
                      disabled={false}
                      error={false}
                      fontStyles={body.sm.regular}
                      width={200}
                      height={32}
                      onChange={(event) => setCurrentTitle(event.target.value)}
                    />
                    <ChatHistoryItemTrailContainer
                      LeftIcon={DoCheck}
                      LeftIconOnClickHandler={() => {
                        handleSelectedItemChange({
                          ...selectedItem,
                          title: currentTitle,
                        });
                        setOriginalTitle(currentTitle);
                        setIsEditing(!isEditing);
                      }}
                      RightIcon={XLarge}
                      RightIconOnClickHandler={() => {
                        setCurrentTitle(originalTitle);
                        setIsEditing(!isEditing);
                      }}
                    />
                  </div>
                )}
              </>
            ) : mode === ToolsMode.Compose ? (
              <></>
            ) : mode === ToolsMode.Paint ? (
              <></>
            ) : mode === ToolsMode.Podcast ? (
              "podcast mode"
            ) : (
              <span
                className={css`
                  flex: 100vw 0 1;
                  text-align: center;
                  line-height: 20px;
                  font-family: inherit;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 20px;
                  color: ${basis.text_loud};
                `}
              >
                我的知识库
              </span>
            )}
            <div
              className={css`
                width: 32px;
                min-width: 32px;
              `}
            />
          </div>
          {mode === ToolsMode.Home ? (
            <>home</>
          ) : mode === ToolsMode.Standard ? (
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
