import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactElement } from "react";

const SectionTitle = ({
  icon,
  children,
}: {
  icon: ReactElement;
  children: string;
}) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
      `}
    >
      {icon}
      <div
        className={css`
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: ${basis.text_loud};
        `}
      >
        {children}
      </div>
    </div>
  );
};

export { SectionTitle };
