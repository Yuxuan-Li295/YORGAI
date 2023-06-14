import { css } from "@emotion/css";
import React from 'react';
import { BorderlessButton } from "components/FirstLevelNavBar/BorderlessButton"; // Replace './Button' with the actual path to your Button component.

const MiddleIcons = () => {
    const containerStyle = css`
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 650px;
      height: 32px;
      left: calc(50% - 650px/2);
      top: 16px;
      padding: 4px 0;
    `;

    // Replace with your actual button onClick handler.
    const buttonClickHandler = () => {
      console.log("Button clicked!");
    };

    const buttons = ["需求大厅", "作品社区", "AI工具", "提示词库", "数字中控"];

    return (
      <div className={containerStyle}>
        {buttons.map(button => (
          <BorderlessButton onClick={buttonClickHandler} key={button}>
            {button}
          </BorderlessButton>
        ))}
      </div>
    );
};

export default MiddleIcons;
