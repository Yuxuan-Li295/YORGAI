import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const BorderlessButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: string;
}) => {
  return (
    <button
      className={css`
        width: 120px;
        height: 24px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${basis["text"]};
        background-color: transparent;
        border: none;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { BorderlessButton };
