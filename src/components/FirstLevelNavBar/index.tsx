import { css } from "@emotion/css";
import { basis, white } from "components/constants/colors";
import { ButtonSection } from "./ButtonSection";
import { NotificationAndProfile } from "./NotificationAndProfile";
import { YumiaosIcon } from "./YumiaosIcon";

const FirstLevelNavBar = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        height: 64px;
        padding: 0 24px;
        background: ${white};
        border-bottom: 1px solid ${basis.border_subtle};
      `}
    >
      <YumiaosIcon />
      <ButtonSection />
      <NotificationAndProfile />
    </div>
  );
};

export { FirstLevelNavBar };
