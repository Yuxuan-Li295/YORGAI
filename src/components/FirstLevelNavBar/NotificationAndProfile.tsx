import { css } from "@emotion/css";
import Notification from "resources/img/Notification.svg";
import UserAvatar from "resources/img/UserAvatar.svg";
import { zincs } from "components/constants/colors";

const NotificationAndProfile = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        width: 100px;
      `}
    >
      <img src={Notification} alt="Notification Icon" />
      <div
        className={css`
          height: 16px;
          width: 1px;
          background-color: ${zincs[200]};
        `}
      />
      <img src={UserAvatar} alt="User Icon" />
    </div>
  );
};

export { NotificationAndProfile };
