import { css } from "@emotion/css";
import UserAvatar from "resources/img/UserAvatarAR.svg";

// FIXME: get user avatar?
export const AvatarAR = ({ size }: { size: number }) => (
  <img
    className={css`
      width: ${size};
      height: ${size};
    `}
    src={UserAvatar}
    alt="User avatar"
  />
);
