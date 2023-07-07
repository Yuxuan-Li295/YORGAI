import { css } from "@emotion/css";
import { PrimaryNavBar } from "components/PrimaryNavBar";
import { ReactComponent as SideBarLeftDark } from "resources/img/sidebar-left-dark.svg";
import { ReactComponent as Info } from "resources/img/info-01.svg";
import { basis } from "components/constants/colors";
import { Switch } from "components/shared/Switch";
import { useCallback, useState } from "react";
import { SideBarContainer } from "components/OnlineToolPage/Container";

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
        </div>
      </div>
    </div>
  );
};

export { ToolsChat };
