import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import Pencil from "resources/img/Pencil.svg";

const ToolCategoryCard = () => (
  <div
    className={css`
      display: flex;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      flex: 1;
      border-radius: 8px;
      border: 1px solid ${basis.border_subtle};
      background: white;
      height: 42px;
      cursor: pointer;
    `}
  >
    <div
      className={css`
        display: flex;
      `}
    >
      <div
        className={css`
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 10px;
          border: 1px solid ${basis.border_subtle};
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 11px;
        `}
      >
        <img
          src={Pencil}
          alt="Pencil icon"
          className={css`
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          `}
        />
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <p
          className={css`
            display: flex;
            flex-direction: column;
            align-self: stretch;
            color: ${basis.text_loud};
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            margin-bottom: 6px;
            margin-top: 0px;
          `}
        >
          生产力工具
        </p>
        <p
          className={css`
            display: flex;
            flex-direction: column;
            align-self: stretch;
            color: ${basis.text};
            font-size: 12px;
            line-height: 16px;
            margin-top: 0px;
          `}
        >
          文章总结、长文翻译、头脑风暴...
        </p>
      </div>
    </div>
  </div>
);

export { ToolCategoryCard };
