import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const Button = ({
  children,
  Icon,
}: {
  children: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <button
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #67cdbc;
        padding: 0;
        border-radius: 6px;
        border: none;
        box-shadow: 0px 0px 0px 1px #74b6a9;
        margin: 1px;
        font-family: inherit;

        &:hover {
          background-color: #57c4b1;
        }

        &:active {
          background-color: #14b8a2;
        }

        &:hover > div {
          background: linear-gradient(#57c4b1, #57c4b1) padding-box,
            linear-gradient(to bottom, #ffffff52, #ffffff00 60%) border-box;
        }

        &:active > div {
          background: linear-gradient(#14b8a2, #14b8a2) padding-box,
            linear-gradient(to bottom, #ffffff52, #ffffff00 60%) border-box;
        }
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background: linear-gradient(#67cdbc, #67cdbc) padding-box,
            linear-gradient(to bottom, #ffffff52, #ffffff00 60%) border-box;
          padding: 5px 11px;
          border: 1px solid transparent;
          border-radius: 6px;
          color: ${basis["text-foreground"]};
        `}
      >
        {Icon && <Icon />}
        <div
          className={css`
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
          `}
        >
          {children}
        </div>
      </div>
    </button>
  );
};

export { Button };
