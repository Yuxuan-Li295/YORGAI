import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import ChatGPT from "resources/img/ChatGPT2x.png";
import { ChatInputBar } from "./ChatInputBar";
import { ReactComponent as AddSm } from "resources/img/AddSm.svg";

const ChatInput = () => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      padding: 24px 180px;
      gap: 10px;
      border-top: 1px solid ${basis.border_subtle};
    `}
  >
    <div
      className={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        className={css`
          display: flex;
          gap: 8px;
        `}
      >
        <Button
          prepend={
            <img
              className={css`
                width: 18px;
                height: 18px;
              `}
              src={ChatGPT}
              alt="ChatGPT icon"
            />
          }
          variant="secondary"
        >
          ChatGPT 4.0
        </Button>
        <Button variant="tertiary">
          <AddSm />
        </Button>
      </div>
      <div
        className={css`
          display: flex;
          gap: 9px;
        `}
      >
        {/* <Button
          Icon={Switch}
          variant="secondary"
          size="sm"
          fontStyle={{
            fontWeight: "700",
            fontSize: "14px",
            fontFamily: "PingFang SC",
          }}
          fontColor="#707480"
          btnWidth={140}
        >
          提示词助手
        </Button> */}
      </div>
    </div>
    <ChatInputBar />
  </div>
);

export { ChatInput };
