import { css } from "@emotion/css";
import { basis, rainbow } from "components/constants/colors";

const Badge = ({
  avatar,
  children,
  variant = "primary",
}: {
  children: string;
  avatar: React.ReactElement;
  variant?: "primary" | "success" | "danger" | "alert";
}) => {
  let palette;
  // switch (variant) {
  //   case "primary": {
  palette = basis;
  //   break;
  // }
  //   case "success": {palette = rainbow.green; break}
  //   case "danger": {palette = rainbow.red; break}
  //   case "alert": {palette = rainbow.amber; break}
  // }
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${palette.alt.bg};
        color: ${palette.text_loud};
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        border-radius: 50px;
        margin: 2px;
        white-space: nowrap;
      `}
    >
      {avatar}
      <span
        className={css`
          padding: 2px 8px 2px 4px;
        `}
      >
        {children}
      </span>
    </div>
  );
};

export { Badge };
