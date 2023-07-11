import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { UserAvatar } from "components/shared/UserAvatar";
import { ReactComponent as Notification } from "resources/img/Notification.svg";

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
      <Notification />
      <div
        className={css`
          height: 16px;
          width: 1px;
          background-color: ${basis.border_subtle};
        `}
      />
      <UserAvatar size={32} />
    </div>
  );
};

export { NotificationAndProfile };
