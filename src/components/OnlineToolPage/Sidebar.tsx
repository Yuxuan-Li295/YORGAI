import { css } from "@emotion/css";
import { basis, zinc } from "components/constants/colors";
import { ReactComponent as AddSquare } from "resources/img/AddSquare.svg";
import { ReactComponent as Diamond } from "resources/img/Diamond.svg";
import { ReactComponent as Home } from "resources/img/Home.svg";
import { SideBarButton } from "./SideBarButton";
import React from "react";

const SideBar = ({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: (isSidebarOpen: boolean) => void;
}) => {
  return (
    <div
      className={css`
        position: relative;
        display: flex;
        flex-direction: column;
        height: calc(100vh - 64px - 1px);
        flex: ${isSidebarOpen ? "280px" : "0px"} 0 0;
        background: ${zinc[25]};
        border-right: 1px solid ${basis.border_subtle};
        overflow: hidden;
        transition: flex-basis 0.3s ease-in-out;
        box-sizing: border-box;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow: scroll;
          flex: 100% 0 1;
          padding: 16px 12px;
          gap: 12px;
          align-items: flex-start;
        `}
      >
        {["今天", "昨天", "过去7天"].map((day) => (
          <React.Fragment key={day}>
            <div
              className={css`
                height: auto;
                padding: 0px 12px;
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
                  color: ${basis.text_loud};
                  font-size: 12px;
                  font-weight: 500;
                  line-height: 16px;
                `}
              >
                {day}
              </span>
            </div>
            {[...Array(10).keys()].map((i) => (
              <div key={i}>SideBarChatHistoryCard Placeholder {i + 1}</div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          padding: 16px 12px;
          align-items: flex-start;
          gap: 8px;
          align-self: stretch;
          height: auto;
          border-top: 1px solid ${basis.border_subtle};
          border-bottom: 1px solid ${basis.border_subtle};
          box-sizing: border-box;
        `}
      >
        <SideBarButton icon={<AddSquare />}>新的会话</SideBarButton>
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
        <SideBarButton icon={<Home />}>工具主页</SideBarButton>
        <SideBarButton icon={<Diamond />}>管理订阅</SideBarButton>
      </div>
    </div>
  );
};

export { SideBar };
