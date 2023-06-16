import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import PromptTrendingSectionTitleIcon from "resources/img/PromptTrendingSectionTitleIcon.svg";

const SectionTitle = ({
  children,
  subTitle,
}: {
  children: string;
  subTitle?: string;
}) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        gap: 15px;
      `}
    >
      <img
        src={PromptTrendingSectionTitleIcon}
        alt="Prompt trending section title icon"
      />
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
            color: ${basis["text-load"]};
          `}
        >
          {children}
        </div>
        <div
          className={css`
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: ${basis["text"]};
          `}
        >
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export { SectionTitle };
