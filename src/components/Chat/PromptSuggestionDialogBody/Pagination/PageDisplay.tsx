import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { Dropdown } from "components/shared/Dropdown";
import { useState } from "react";
import { ReactComponent as ArrayAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";

type PageSelectProps = {
  totalNumber?: number;
};

const textStyles = css`
  color: ${basis.text_loud};
  text-align: right;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

const PageDisplay = ({ totalNumber = 2077 }: PageSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<number>(9);
  const availableValues = [9, 10, 20, 50, 100, 200];

  return (
    <div
      className={css`
        width: 190px;
        height: 28px;
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      `}
    >
      <span className={textStyles} style={{ width: "60px", height: "16px" }}>
        每页显示：
      </span>

      <Dropdown
        children={
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 10px;
              cursor: pointer;
              padding-left: 12px;
            `}
          >
            <span
              className={css`
                width: auto;
                height: 16px;
                color: ${basis.text};
              `}
            >
              {selectedValue}
            </span>
            <ArrayAngleDownMd />
          </div>
        }
        menuItems={availableValues.map((value) => value.toString())}
        setValue={(value: string) => setSelectedValue(Number(value))}
        above={true}
      />

      <div
        className={css`
          width: 12px;
        `}
      ></div>

      <span
        className={textStyles}
        style={{ width: "24px", height: "16px", color: basis.text }}
      >
        总共
      </span>

      <div
        className={css`
          width: 28px;
          height: 16px;
          color: ${basis.text_loud};
        `}
      >
        {totalNumber}
      </div>
    </div>
  );
};

export { PageDisplay };
