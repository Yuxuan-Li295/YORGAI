import { css } from "@emotion/css";
import { ButtonIconSection } from "./ButtonIconSection";
import { SearchButton } from "./SearchButton";
import { basisAlt, zincs } from "components/constants/colors";

const SecondLevelNavBar = ({
  buttons,
}: {
  buttons: {
    icon: React.ReactElement;
    label: string;
    onClick: () => void;
  }[];
}) => {
  return (
    <div
      className={css`
        box-sizing: border-box;
        background: ${zincs[25]};
        border-bottom: 1px solid ${basisAlt.border_subtle};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 195px;
      `}
    >
      <ButtonIconSection buttons={buttons} />
      <SearchButton />
    </div>
  );
};

export { SecondLevelNavBar };
