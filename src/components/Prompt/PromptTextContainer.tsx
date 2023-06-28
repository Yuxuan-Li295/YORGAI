import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { ReactComponent as Copy } from "resources/img/Copy.svg";
import { ReactComponent as Execute } from "resources/img/Execute.svg";

const PromptTextContainer = ({ children }: { children: string }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 18px 18px 14px;
        gap: 18px;
        background: ${basis.bg};
        border: 1px solid ${basis.border};
        border-radius: 8px;
        width: 100%;
      `}
    >
      <p
        className={css`
          font-family: inherit;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: ${basis.text_loud};
        `}
      >
        {children}
      </p>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 32px;
        `}
      >
        <Button variant="secondary" prepend={<Copy />}>
          复制到剪贴板
        </Button>
        <Button prepend={<Execute />}>立即运行</Button>
      </div>
    </div>
  );
};

export { PromptTextContainer };
