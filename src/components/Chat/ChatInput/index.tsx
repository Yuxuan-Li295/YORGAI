import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ChatInputBar } from "./ChatInputBar";
import { ChatInputMenuBtn } from "./ChatInputMenuBtn";

const ChatInput = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        padding: 24px 180px;
        gap: 10px;
        /* border-top: 1px solid ${basis.border_subtle}; */
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
          <ChatInputMenuBtn />
        </div>
      </div>
      <ChatInputBar />
    </div>
  );
};

export { ChatInput };
