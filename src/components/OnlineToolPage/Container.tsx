import { css } from "@emotion/css";
import { basis, zinc } from "components/constants/colors";
import { useState } from "react";

const SideBarContainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarWidth = sidebarOpen ? "280px" : "0px";
  const buttons = ["Button 1", "Button 2"];

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={css`
          position: fixed;
          top: 10px;
          right: 10px;
        `}
      >
        Toggle Sidebar
      </button>
      <div
        className={css`
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: ${sidebarWidth};
          height: 960px;
          background: ${zinc[25]};
          border-right: 1px solid ${basis.border_subtle};
          overflow: hidden;
          transition: width 0.3s ease-in-out;
        `}
      >
        {/*chat history sections */}
        <div
          className={css`
            display: flex;
            flex-direction: column;
            overflow: auto;
            flex-grow: 1;
            align-items: flex-start;
          `}
        >
          {["今天", "昨天", "过去七天"].map((day) => (
            <div key={day}
              className={css`
                display: flex;
                flex-direction: column;
                padding: 16px 12px;
                align-items: flex-start;
                gap: 12px;
                flex: 1 0 0;
                align-self: stretch;
              `}
            >
              <div
                className={css`
                  width: 100%;
                  height: auto;
                  padding: 8px 12px;
                  display: flex;
                  align-items: center;
                  align-self: stretch;
                `}
              >
                <span
                  className={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  {day}
                </span>
              </div>
              {[...Array(10).keys()].map(i => (
                <div className={css`margin: 12px 0;`} key={i}>
                  SideBarChatHistoryCard Placeholder {i + 1}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* buttons section */}
        <div
          className={css`
            display: flex;
            flex-direction: column;
            padding: 16px 12px;
            align-items: flex-start;
            gap: 8px;
            align-self: stretch;
            width: 100%;
            height: auto;
            border-top: 1px solid ${basis.border_subtle};
            border-bottom: 1px solid ${basis.border_subtle};
            box-sizing: border-box; 
          `}
        >
          <span>SideBarButton Placeholder for New Chart</span>
        </div>

        <div
          className={css`
            display: flex;
            flex-direction: column;
            padding: 16px 12px;
            align-items: flex-start;
            gap: 8px;
            align-self: stretch;
            width: 100%;
          `}
        >
          {buttons.map((button) => (
            <div key={button}>
              <span>SideBarButton Placeholder for {button}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { SideBarContainer };
