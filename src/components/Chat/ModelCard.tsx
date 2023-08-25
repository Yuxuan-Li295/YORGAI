import { css } from "@emotion/css";
import { TagList } from "components/Prompt/TagList";
import { basis, rainbow } from "components/constants/colors";
import { ReactElement } from "react";
import { ReactComponent as PinFilled } from "resources/img/PinFilled.svg";
import { Radio } from "../shared/CheckBoxOrRadio";

const ModelCard = ({
  title,
  description,
  price,
  tags,
  icon,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  price: number;
  tags: string[];
  icon: ReactElement;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 16px;
        gap: 10px;
        border-radius: 8px;
        background-color: white;
        border: 1px solid ${selected ? "#67cdbc" : basis.border_subtle};
        max-width: 100%;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: flex-start;
            gap: 11px;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              width: 42px;
              height: 42px;
            `}
          >
            {icon}
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 6px;
              flex: 1 0 0;
            `}
          >
            <div
              className={css`
                display: flex;
                align-items: flex-start;
                gap: 6px;
                align-self: stretch;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  flex: 1 0 0;

                  color: ${basis.text_loud};
                  font-size: 14px;
                  font-weight: 500;
                  line-height: 20px;
                `}
              >
                {title}
              </div>
              <PinFilled
                className={css`
                  width: 14px;
                  height: 14px;
                  color: ${basis.icon};
                `}
              />
            </div>
            <div
              className={css`
                display: flex;
                height: 16px;
                flex-direction: column;
                align-self: stretch;
              `}
            >
              <span
                className={css`
                  overflow: hidden;
                  color: ${basis.text};
                  white-space: nowrap;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 16px;
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                `}
              >
                {description}
              </span>
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            flex: 1 0 0;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
              height: 24px;
              padding: 0px 6px;
              justify-content: center;
              align-items: center;
              gap: 8px;
            `}
          >
            <TagList tags={tags} />
          </div>
          <div
            className={css`
              display: inline-flex;
              height: 24px;
              align-items: center;
              gap: 4px;
              flex: 1 0 0;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                color: ${basis.text};
                font-size: 12px;
                font-weight: 500;
                line-height: 16px;
              `}
            >
              {price}元/1000字
            </div>
          </div>
          <Radio
            size="xxs"
            colorPattern={rainbow.teal}
            value="option1"
            checked={selected}
            onChange={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export { ModelCard };
