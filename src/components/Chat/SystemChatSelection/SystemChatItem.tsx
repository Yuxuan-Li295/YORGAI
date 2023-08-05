import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactElement } from "react";
import { ReactComponent as SystemCopy } from "resources/img/SystemCopy.svg";
import { Button } from "components/shared/Button";

const SystemChatItem = ({
  prepend,
  chatName,
  children,
}: {
  prepend?: ReactElement;
  chatName?: string;
  children?: string;
}) => {
  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(children || "");
    } else
      try {
        const textArea = document.createElement("textarea");
        textArea.value = children || "";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } catch (err) {
        //Todo: on fail?
      }
  };
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        border-bottom: 1px solid ${basis.alt.border_subtle};
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-right-color: ${basis.alt.border_subtle};
        backdrop-filter: blur(30px);
        overflow: hidden;
        position: relative;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          just-content: center;
          margin-right: 20px;
        `}
      >
        {prepend}
      </div>
      <div
        className={css`
          display: flex;
          width: 666px;
          align-items: flex-start;
          flex-direction: column;
          color: ${basis.text_loud};
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        `}
      >
        {chatName && (
          <div
            className={css`
              font-weight: bold;
            `}
          >
            {chatName}
          </div>
        )}
        {children}
      </div>
      <div
        className={css`
          margin-left: 20px;
        `}
      >
        <Button variant="tertiary" onClick={handleCopy}>
          <SystemCopy />
        </Button>
      </div>
    </div>
  );
};

export { SystemChatItem };
