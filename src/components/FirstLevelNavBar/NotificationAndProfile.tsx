import { css } from "@emotion/css";
import Notification from "resources/img/Notification.svg";
import UserAvatar from "resources/img/UserAvatar.svg";

const NotificationAndProfile = () => {
    return (
        <div
            className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                gap: 33px;
                padding: 4px 0;
            `}
        >
            <img src={Notification} alt="Notification Icon"
                className={css`
                    width: 32px;
                    height: 32px;
                `}
            />
            <img src={UserAvatar} alt="User Icon"
                className={css`
                    width: 32px;
                    height: 32px;
                `}
            />
        </div>
    );
};

export { NotificationAndProfile };
