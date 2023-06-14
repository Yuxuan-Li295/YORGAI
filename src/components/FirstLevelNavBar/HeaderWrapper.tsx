/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import LeftIcon from "./LeftIcon";
import MiddleIcons from "./MiddleIcon";

const HeaderWrapper: React.FC = () => {
    const wrapperStyle = css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        width: 1440px;
        height: 64px;
        background: #FFFFFF;
        border-bottom: 1px solid #E9E9EC;
        padding: 16px 0px;
    `;

    const spacingStyle = css`
        width: 157.5px;
    `;

    return (
        <div css={wrapperStyle}>
            <LeftIcon />
            <div css={spacingStyle}></div>
            <MiddleIcons />
        </div>
    );
};

export default HeaderWrapper;
