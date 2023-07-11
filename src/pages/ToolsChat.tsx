import { css } from "@emotion/css";
import { ChatInput } from "components/Chat/ChatInput";
import { DialogHeader } from "components/Chat/DialogHeader/DialogHeader";
import { SideBar } from "components/OnlineToolPage/Sidebar";
import { SystemChatItem } from "components/OnlineToolPage/SystemChatItem";
import { UserChatItem } from "components/OnlineToolPage/UserChatItem";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { basis } from "components/constants/colors";
import { useEffect, useMemo, useReducer, useState } from "react";
import SystemAvatar from "resources/img/SystemAvatar.png";
import { ReactComponent as SidebarLeftDark } from "resources/img/SidebarLeftDark.svg";
import { Button } from "components/shared/Button";
import { KnowledgeBase } from "components/OnlineToolPage/KnowledgeBase";

// declare global {
//   var debugEnableKBMode: () => void;
//   var debugDisableKBMode: () => void;
// }

const ToolsChat = () => {
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

  // useEffect(() => {
  //   globalThis.debugEnableKBMode = setKnowledgeBaseMode;
  //   globalThis.debugDisableKBMode = setKnowledgeBaseMode;
  // });

  const [isSidebarOpened, setIsSidebarOpened] = useState(true);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
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
          toggleSidebar={setIsSidebarOpened}
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
                  新的对话
                </span>
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
                <UserChatItem>
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
                <DialogHeader />
              </div>
              <ChatInput />
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

export { ToolsChat };
