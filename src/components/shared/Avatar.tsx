import { css } from "@emotion/css";
import UserAvatar from "resources/img/UserAvatar.png";

// FIXME: get user avatar?
export const Avatar = ({ size }: { size: number }) => (
  <img
    className={css`
      width: ${size}px;
      height: ${size}px;
    `}
    src={UserAvatar}
    alt="User avatar"
  />
);
