import { css } from "@emotion/css";
import { SideBarContainer } from "components/OnlineToolPage/Container";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { SystemChatItem } from "components/SystemChatHistoryItem/SystemChatItem";
import { basis } from "components/constants/colors";
import { Switch } from "components/shared/Switch";
import { useCallback, useMemo, useReducer, useState } from "react";
import { ReactComponent as SystemChatAvatar } from "resources/img/SystemChatAvatar.svg";
import { ReactComponent as Info } from "resources/img/info-01.svg";
import { ReactComponent as SideBarLeftDark } from "resources/img/sidebar-left-dark.svg";

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
      console.log(msg);
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

  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const switchToggleCallback = useCallback(
    () =>
      mode === ToolsMode.Standard
        ? showNormalMode(ToolsMode.Compose)
        : showNormalMode(ToolsMode.Standard),
    [changeModeState, mode],
  );

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
        <SideBarContainer
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
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              border-bottom: 1px solid ${basis.alt.border};
              background-color: ${basis.bg_subtle};
              padding: 14px 24px;
              gap: 9px;
              align-items: center;
            `}
          >
            <SideBarLeftDark
              aria-roledescription="button"
              onClick={() => setIsSidebarOpened(!isSidebarOpened)}
              className={css`
                margin-right: 101;
              `}
            />
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
                    font-weight: 500;
                    line-height: 20px;
                    color: ${basis.text_loud};
                  `}
                >
                  新的对话
                </span>
                <Switch
                  enabled
                  // enabled={mode === ToolsMode.Compose}
                  onToggle={switchToggleCallback}
                />
                <span
                  className={css`
                    white-space: nowrap;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 20px;
                    color: ${basis.text};
                  `}
                >
                  创作模式
                </span>
                <Info />
              </>
            ) : mode === ToolsMode.Compose ? (
              <></>
            ) : mode === ToolsMode.Paint ? (
              <></>
            ) : mode === ToolsMode.Podcast ? (
              "podcast mode"
            ) : (
              "kb mode"
            )}
          </div>
          {mode === ToolsMode.Home ? (
            <>home</>
          ) : mode === ToolsMode.Standard ? (
            <>
              <div>
                <SystemChatItem prepend={<SystemChatAvatar />}>
                  As a pet behaviorist, I'm here to help you address the
                  aggression issues with your German Shepherd. Aggression in
                  dogs can have various underlying causes, and it's important to
                  understand the root cause before implementing a behavior
                  modification plan. Here are the steps we can take to help
                  manage your dog's aggressioness.
                </SystemChatItem>
              </div>
            </>
          ) : mode === ToolsMode.Compose ? (
            <>compose</>
          ) : mode === ToolsMode.Paint ? (
            <>paint</>
          ) : mode === ToolsMode.Podcast ? (
            <>podcast</>
          ) : (
            <>knowledge base</>
          )}
        </div>
      </div>
    </div>
  );
};

export { ToolsChat };
