import { css } from "@emotion/css";
import UserAvatar from "resources/img/UserAvatar.png";

// FIXME: get user avatar?
export const Avatar = ({ size }: { size: number }) => (
  <img
    className={css`
      width: ${size};
      height: ${size};
    `}
    src={UserAvatar}
    alt="User avatar"
  />
);
