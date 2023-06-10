import { css } from "@emotion/css";
import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    const styles = css`
        width: 120px;
        height: 24px;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #18181B;
        background-color: transparent;
        border: none;
        cursor: pointer;
        flex: none;
        order: 0;
        flex-grow: 0;
    `;

    return (
        <button className={styles} onClick={onClick}>
            {text}
        </button>
    );
};

export { Button };
