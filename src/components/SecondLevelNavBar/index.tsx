import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ButtonSection } from "./ButtonSection";
import { SearchBar } from "./SearchBar";

const SecondLevelNavBar = ({
  buttons,
}: {
  buttons: {
    icon: React.ReactElement;
    label: string;
    url?: string;
  }[];
}) => {
  return (
    <div
      className={css`
        box-sizing: border-box;
        background: ${basis.bg_subtle};
        border-bottom: 1px solid ${basis.border_subtle};
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 0 10px;
      `}
    >
      <div
        className={css`
          width: 251px;
          min-width: 251px;
        `}
      />
      <ButtonSection buttons={buttons} />
      <SearchBar />
    </div>
  );
};

export { SecondLevelNavBar };
