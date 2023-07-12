import { css } from "@emotion/css";
import { basis, fill, zinc } from "components/constants/colors";
import { ReactElement } from "react";

const SideBarButton = ({
  onClick,
  children,
  icon,
}: {
  onClick?: () => void;
  children: string;
  icon: ReactElement;
}) => {
  return (
    <button
      className={css`
        width: 256px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        border: 1px solid ${basis.border_subtle};
        background: ${fill.base.layer_chrome};
        box-shadow: 0px 2px 12px rgba(79, 81, 89, 0.06),
          0px 0px 4px rgba(79, 81, 89, 0.03), 0px 0px 0px 1px ${zinc[400]},
          0px 0.5px 1px ${zinc[400]},
          0px 1px 0px rgba(255, 255, 255, 0.06) inset,
          0px 0.5px 0px rgba(255, 255, 255, 0.06) inset;
        cursor: pointer;
        box-sizing: border-box;

        &:hover {
          border: 1px solid #67cdbc;
        }
      `}
      onClick={onClick}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 256px;
          height: 44px;
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            width: auto;
            height: auto;
          `}
        >
          {icon}
          <span
            className={css`
              color: ${zinc[500]};
              text-align: center;
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
            `}
          >
            {children}
          </span>
        </div>
      </div>
    </button>
  );
};

export { SideBarButton };
