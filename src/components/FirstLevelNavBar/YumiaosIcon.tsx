import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import Yumiaos from "resources/img/YumiaosLogo.png";

const YumiaosIcon = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: 100px;
      `}
    >
      <img
        className={css`
          width: 20px;
          height: 20px;
        `}
        src={Yumiaos}
        alt="Yumiaos Logo"
      />
      <div
        className={css`
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          letter-spacing: 0.15px;
          color: ${basis.text};
          white-space: nowrap;
        `}
      >
        小鱼厂
      </div>
    </div>
  );
};

export { YumiaosIcon };
