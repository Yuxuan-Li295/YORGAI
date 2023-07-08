import { css } from "@emotion/css";
import { SideBarContainer } from "components/OnlineToolPage/Container";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { SystemChatItem } from "components/SystemChatHistoryItem/SystemChatItem";
import { basis } from "components/constants/colors";
import { Switch } from "components/shared/Switch";
import { useCallback, useState } from "react";
import { ReactComponent as SystemChatAvatar } from "resources/img/SystemChatAvatar.svg";
import { ReactComponent as Info } from "resources/img/info-01.svg";
import { ReactComponent as SideBarLeftDark } from "resources/img/sidebar-left-dark.svg";

const ToolsChat = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const [isCreativeMode, setIsCreativeMode] = useState(false);
  const switchCallback = useCallback(setIsCreativeMode, [setIsCreativeMode]);

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
        <SideBarContainer isSidebarOpen={isSidebarOpened} toggleSidebar={setIsSidebarOpened} />
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
            />
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
            <Switch callback={switchCallback} />
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
          </div>
          {/* TODO: chat */ isCreativeMode.toString()}
          <div>
            <SystemChatItem prepend={<SystemChatAvatar />}>
              As a pet behaviorist, I'm here to help you address the aggression issues
              with your German Shepherd. Aggression in dogs can have various underlying
              causes, and it's important to understand the root cause before implementing
              a behavior modification plan. Here are the steps we can take to help manage
              your dog's aggressioness.
            </SystemChatItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ToolsChat };
