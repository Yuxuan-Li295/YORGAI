import { css } from "@emotion/css";
import { zincs } from "components/constants/colors";
import { LeftIcon } from "./LeftIcon";
import { MiddlebuttonSection } from "./MiddlebuttonSection";
import { NotificationAndProfile } from "./NotificationAndProfile";

const FirstLevelNavBar = () => {
    return (
        <div
            className={css`
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 1440px;
                height: 64px;
                padding: 0 24px;
                background: ${zincs[25]}; 
                border-bottom: 1px solid ${zincs[200]};
            `}
        >
            <LeftIcon />
            <MiddlebuttonSection />
            <div
                className={css`
                    width: 285.5px;
                `}
            />
            <NotificationAndProfile />
        </div>
    );
};

export { FirstLevelNavBar };
