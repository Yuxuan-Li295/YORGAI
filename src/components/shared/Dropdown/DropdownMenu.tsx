import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const DropdownMenu = ({
  menuItems,
  setValue,
  above,
}: {
  menuItems: string[];
  setValue?: (item: string) => void;
  above: boolean;
}) => {
  return (
    <div
      className={css`
        box-shadow: ${above
          ? `0px 4px 4px -4px rgba(79, 81, 89, 0.32),
          0px 4px 14px -2px rgba(79, 81, 89, 0.12),
          0px 0px 0px 1px rgba(188, 189, 194, 0.2),
          0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
          0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset`
          : `0px 8px 12px -6px rgba(79, 81, 89, 0.16),
          0px 16px 24px -8px rgba(79, 81, 89, 0.2),
          0px 0px 0px 1px rgba(188, 189, 194, 0.2),
          0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
          0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset`};
        border-radius: 6px;

        & > div:first-of-type {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          border-top: none;
        }

        & > div:last-of-type {
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      `}
    >
      {menuItems.map((item, i) => (
        <div
          className={css`
            background-color: white;
            padding: 10px 12px;
            border-top: 1px solid ${basis.alt.border};
            white-space: nowrap;
            cursor: pointer;
            color: ${basis.text_loud};
            font-size: 14px;
            line-height: 20px;

            &:hover {
              background-color: ${basis.bg_subtle};
            }
          `}
          key={i}
          onClick={() => setValue && setValue(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export { DropdownMenu };
