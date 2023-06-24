import { css } from "@emotion/css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SecondaryNavBarButton } from "./SecondaryNavBarButton";

const ButtonSection = ({
  buttons,
}: {
  buttons: {
    icon: React.ReactElement;
    label: string;
    url?: string;
  }[];
}) => {
  const navigate = useNavigate();

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
      {buttons.map(({ icon, label, url }) => (
        <SecondaryNavBarButton
          icon={icon}
          label={label}
          onClick={() => {
            url && navigate(url);
          }}
          key={label}
        />
      ))}
    </div>
  );
};

export { ButtonSection };
