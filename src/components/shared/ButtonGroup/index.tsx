import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactNode } from "react";
import { ButtonGroupCell } from "./ButtonGroupCell";

const ButtonGroup = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css`
        display: flex;
        box-shadow: 0px 1px 1px rgba(188, 189, 194, 0.2),
          0px 0px 0px 1px rgba(188, 189, 194, 0.25),
          0px 2px 5px -2px rgba(79, 81, 89, 0.03),
          0px 4px 4px -4px rgba(79, 81, 89, 0.32);
        border-radius: 6px;
        & > :first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right: 1px solid ${basis.border};
        }
        & > :last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        & > :not(:first-child):not(:last-child) {
          border-radius: 0;
          border-right: 1px solid ${basis.border};
        }
      `}
    >
      {children}
    </div>
  );
};

export { ButtonGroup, ButtonGroupCell };
