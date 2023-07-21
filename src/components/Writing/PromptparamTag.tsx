import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactComponent as Separator } from "resources/img/Separator.svg";

const PromptParamTag = ({
  text1,
  text2,
  text3,
  text4
}: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div
      className={css`
        width: 543.5px;
        height: 36px;
        border: ${basis.bg_emphasis_subtle} 1px solid;
        background: var(--chart-layer, #FFF);
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
      `}
    >
      <div
        className={css`
          width: auto;
          height: auto;
          color: ${basis.text_loud};
          margin-left: 12px;
        `}
      >
        {text1}
      </div>
      <Separator
        className={css`
          width: 0.5px;
          height: 12px;
          fill: ${basis.text}
        `}
        preserveAspectRatio="none"
      />
      <div
        className={css`
          width: auto;
          height: auto;
          color: ${basis.text};
          text-align: center;
          line-height: 20px;
        `}
      >
        {text2}
      </div>
      <Separator
        className={css`
          width: 0.5px;
          height: 12px;
          fill: ${basis.text}
        `}
        preserveAspectRatio="none"
      />
      <div
        className={css`
          width: auto;
          height: auto;
          color: ${basis.text};
          text-align: center;
          line-height: 20px;
        `}
      >
        {text3}
      </div>
      <Separator
        className={css`
          width: 0.5px;
          height: 12px;
          fill: ${basis.text}
        `}
        preserveAspectRatio="none"
      />
      <div
        className={css`
          width: auto;
          height: auto;
          color: ${basis.text};
          text-align: center;
          line-height: 20px;
        `}
      >
        {text4}
      </div>
    </div>
  );
};

export default PromptParamTag;
