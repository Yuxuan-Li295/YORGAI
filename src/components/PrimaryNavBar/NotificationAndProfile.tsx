import { css } from "@emotion/css";
import { UserAvatar } from "components/shared/UserAvatar";
import { VerticalBar } from "components/shared/VerticalBar";
import { ReactComponent as Notification } from "resources/img/Notification.svg";
import { Button } from "components/shared/Button";

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
      <Button variant="tertiary">
        <Notification />
      </Button>
      <VerticalBar height={16} />
      <UserAvatar size={32} />
    </div>
  );
};

export { NotificationAndProfile };
