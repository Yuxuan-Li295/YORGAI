/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const LeftIcon = () => {
    const outerContainerStyle = css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        width: 237px;
        height: 32px;
        left: 0.5px;
        top: 16px;
    `;

    const innerContainerStyle = css`
        display: flex;
        flex-direction: row;
        align-items: flex-start; /* Changed from center to flex-start */
        gap: 8px;
        width: 201px;
        height: 20px;
        padding: 4px 12px 8px 12px; /* Adjust padding as needed */
    `;

    return (
        <div css={outerContainerStyle}>
            <div css={innerContainerStyle}>
                <img src="/logosmallfish.svg" alt="icon1" />
            </div>
        </div>
    );
};

export default LeftIcon;
