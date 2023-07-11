import { css } from '@emotion/css';
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";

const DialogFooter = () => (
  <div
    className={css`
      display: flex;
      padding: 12px 24px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border-top: 1px solid ${basis.border_subtle};
    `}
  >
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${basis.text_loud};
        font-family: PingFang SC;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      `}
    >
      从 ChatGPT3.5 切换到 Claude?
    </div>
    <div
      className={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 12px;
      `}
    >
      <Button
        variant="secondary"
      >
        取消
      </Button>
      <Button
        variant="primary"
      >
        切换
      </Button>
    </div>
  </div>
)

export { DialogFooter };
