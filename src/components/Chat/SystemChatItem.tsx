import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { ReactElement } from "react";
import { ReactComponent as SystemCopy } from "resources/img/SystemCopy.svg";

const SystemChatItem = ({
  prepend,
  children,
}: {
  prepend?: ReactElement;
  children?: string;
}) => {
  const handleCopy = () => {
    // In case of non-secure browser context, we can't use navigator.clipboard
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(children || "");
    } else
      try {
        // Fallback to execCommand
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
        // Todo: on fail?
      }
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        padding: 20px 200px;
        border-bottom: 1px solid ${basis.alt.border_subtle};
        background: ${basis.bg};
        overflow: hidden;
        box-sizing: border-box;
      `}
    >
      {prepend}
      <div
        className={css`
          width: 100%;
          display: flex;
          color: ${basis.text_loud};
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        `}
      >
        {children}
      </div>
      <div
        className={css`
          margin-top: -4px;
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
