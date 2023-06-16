import { css } from "@emotion/css";
import Yumiaos from "resources/img/YumiaosLogo.svg";

const LeftIcon = () => {
    return (
        <div
            className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center; 
                    gap: 10px;
                    width: 201px;
                    height: 20px;
                    padding: 4px 12px 8px 12px;
                `}
        >
            <img src={Yumiaos} alt="Yumiaos Logo" />
            <div
                className={css`
                        font-family: 'PingFang SC';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 24px;
                        display: flex;
                        align-items: center;
                        letter-spacing: 0.15px;
                        color: #707480;
                        order: 1;
                    `}
            >
                小鱼厂
            </div>
        </div>
    );
};

export { LeftIcon };
