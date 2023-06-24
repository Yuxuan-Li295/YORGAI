import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const PrimaryNavBarButton = ({
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
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${basis.text_loud};
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { PrimaryNavBarButton };
