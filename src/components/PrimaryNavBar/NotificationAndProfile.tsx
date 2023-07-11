import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { Avatar } from "components/shared/Avatar";
import { IconButton } from "components/shared/IconButton";
import { VerticalBar } from "components/shared/VerticalBar";
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
      <IconButton icon={<Notification />} />
      <VerticalBar height={16} />
      <Avatar size={32} />
    </div>
  );
};

export { NotificationAndProfile };
