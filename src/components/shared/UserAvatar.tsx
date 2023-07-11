import { css } from "@emotion/css";
import Avatar from "resources/img/UserAvatar.png";

// FIXME: get user avatar?
export const UserAvatar = ({ size }: { size: number }) => (
  <img
    className={css`
      width: ${size}px;
      height: ${size}px;
    `}
    src={Avatar}
    alt="User avatar"
  />
);
