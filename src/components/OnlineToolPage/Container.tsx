import { css } from "@emotion/css";
import { basis, zinc } from "components/constants/colors";
import { ReactComponent as AddSquare } from "resources/img/AddSquare.svg";
import { SideBarButton } from "./SideBarButton";
import {ReactComponent as Diamond} from "resources/img/Diamond.svg";
import {ReactComponent as Home} from "resources/img/Home.svg";

const SideBarContainer = ({
  isSidebarOpen, 
 }: {
  isSidebarOpen: boolean;
  toggleSidebar: (isSidebarOpen: boolean) => void;
 }) => {
  const sidebarWidth = isSidebarOpen ? "376px" : "0px";
  const buttons = [<SideBarButton icon={<Home/>}>工具主页</SideBarButton>, <SideBarButton icon={<Diamond/>}>管理订阅</SideBarButton>];

  return (
      <div
        className={css`
          position: relative;
          display: flex;
          flex-direction: column;
          width: ${sidebarWidth};
          height: 960px;
          background: ${zinc[25]};
          border-right: 1px solid ${basis.border_subtle};
          overflow: hidden;
          transition: width 0.3s ease-in-out;
          box-sizing: border-box;
        `}
      >
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
                    color: ${basis.text_loud};
                    font-size: 12px;
                    font-family: 'PingFang SC', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 16px;
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
          <SideBarButton icon={<AddSquare/>}>新的会话</SideBarButton>
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
          {buttons}
        </div>
      </div>
  );
};

export { SideBarContainer };
