import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const DropdownMenu = ({
  menuItems,
  setValue,
}: {
  menuItems: string[];
  setValue?: (item: string) => void;
}) => {
  return (
    <div
      className={css`
        box-shadow: 0px 8px 12px -6px rgba(79, 81, 89, 0.16),
          0px 16px 24px -8px rgba(79, 81, 89, 0.2);
        border-radius: 6px;

        & > div {
          background-color: white;
          padding: 10px 12px;
          border: 1px solid ${basis.alt.border};
          white-space: nowrap;

          &:hover {
            background-color: ${basis.bg_subtle};
          }
        }

        & > div:first-of-type {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        }

        & > div:not(:first-of-type) {
          border-top: none;
        }

        & > div:last-of-type {
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          border-top: none;
        }
      `}
    >
      {menuItems.map((item, i) => (
        <div key={i} onClick={() => setValue && setValue(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export { DropdownMenu };
