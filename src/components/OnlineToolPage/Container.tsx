import { css } from "@emotion/css";
import { basis, zinc } from "components/constants/colors";

const SideBarContainer = () => {
  const buttons = ["Button 1", "Button 2"];

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 280px;
        height: 960px;
        background: ${zinc[25]};
        border-right: 1px solid ${basis.border_subtle};
      `}
    >
      <div
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
        <div>
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
              今天
            </span>
          </div>
          <div className={css`margin: 12px 0;`}>SideBarChatHistoryCard Placeholder</div>
          <div className={css`margin: 12px 0;`}>SideBarChatHistoryCard Placeholder</div>
        </div>

        <div>
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
              昨天
            </span>
          </div>
          <div className={css`margin: 12px 0;`}>SideBarChatHistoryCard Placeholder</div>
        </div>

        <div>
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
              过去七天
            </span>
          </div>
          <div className={css`margin: 12px 0;`}>SideBarChatHistoryCard Placeholder</div>
          <div className={css`margin: 12px 0;`}>SideBarChatHistoryCard Placeholder</div>
          <div className={css`margin: 12px 0;`}>SideBarChatHistoryCard Placeholder</div>
        </div>
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
  );
};

export { SideBarContainer };

