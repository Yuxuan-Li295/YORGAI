import { css } from "@emotion/css";
import { MultiLineInputField } from "components/shared/MultiLineInputField";
import React, { ReactNode } from "react";

interface ConfigSideBarPromptProps {
  Icon1: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Icon2: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
  placeholder?: string;
  children: ReactNode;
}

const ConfigSideBarPrompt = ({
  Icon1,
  Icon2,
  placeholder = "Placeholder",
  children,
}: ConfigSideBarPromptProps) => {

  const renderIcon2 = () => {
    if (typeof Icon2 === "string") {
      return (
        <span
          className={css`
            width: 6.496px;
            height: 6.202px;
            font-size: 14px; 
          `}
        >
          {Icon2}
        </span>
      );
    } else {
      const SvgIcon2 = Icon2;
      return <SvgIcon2 width="16px" height="16px" />;
    }
  };

  return (
    <div className={css`
      display: flex;
      width: 356px;
      height: auto;
      padding: 24px 24px 16px 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      align-self: stretch;
    `}>
      <div className={css`
        display: flex;
        align-items: center;
        gap: 20px;
      `}>
        <Icon1 width="20px" height="20px" />
        <div className={css`
          height: 20px;
          width: auto;
          max-width: 100%;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
        `}>{children}</div>
        {renderIcon2()}
      </div>
      <MultiLineInputField
        width={308}
        height={32}
        value=""
        placeholder={placeholder}
      />
    </div>
  );
};

export { ConfigSideBarPrompt };
