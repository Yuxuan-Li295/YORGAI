import { css } from '@emotion/css';
import { SliderComponent } from "components/Chat/SliderComponent";
import { basis } from "components/constants/colors";
import Help from "resources/img/Help.svg";

const Slider = () => {
  return (
    <div
    className={css`
      display: flex;
      padding: 16px 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      align-self: stretch;
    `}
  >
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        gap: 8px;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${basis.text_loud};
          font-family: PingFang SC;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
        `}
      >
        内容时长
      </div>
      <img
          src={Help} alt="Help icon"
          className={css`
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          `}
        />
    </div>
    <SliderComponent />
  </div>
  );
};

export { Slider };