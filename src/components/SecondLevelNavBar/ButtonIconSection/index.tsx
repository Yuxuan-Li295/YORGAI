import { css } from "@emotion/css";
import { ButtonIcon } from "./ButtonIcon";
import React from "react";

const ButtonIconSection = ({
  buttons,
}: {
  buttons: {
    icon: React.ReactElement;
    label: string;
    onClick: () => void;
  }[];
}) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 528px;
        justify-content: center;
      `}
    >
      {buttons.map(({ icon: Icon, label, onClick }) => (
        <ButtonIcon icon={Icon} label={label} onClick={onClick} key={label} />
      ))}
    </div>
  );
};

export { ButtonIconSection };
