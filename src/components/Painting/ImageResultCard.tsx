import { css } from "@emotion/css";
import ImageDemo from "resources/img/ImageResultCardDemo.png";
import ImageDemo2 from "resources/img/ImageResultCardDemo2.png";
import MoreIcon from "resources/img/More.svg";
import { Radio } from "components/shared/CheckBoxOrRadio";

const ImageResultCard = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: flex-start;
        gap: 20px;
        align-self: stretch;
        width: 890px;
        max-width: 100%;
        position: relative;
      `}
    >
      {/* Radio组件 */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "18px",
          height: "18px",
        }}
      >
        <Radio />
      </div>

      {/* More.svg形式的按钮 */}
      <button
        className={css`
          position: absolute;
          top: 10px;
          right: 10px;
          width: 16px;
          height: 16px;
          background: url(${MoreIcon}) no-repeat center;
          border: none;
          cursor: pointer;
        `}
        onClick={() => {
          console.log("More clicked!");
        }}
      ></button>

      <img
        className={css`
          width: 200px;
          height: 200px;
          border-radius: 8px;
        `}
        src={ImageDemo}
        alt="Demo Image 1"
      />

      <img
        className={css`
          width: 200px;
          height: 200px;
          border-radius: 8px;
        `}
        src={ImageDemo2}
        alt="Demo Image 2"
      />
    </div>
  );
};

export { ImageResultCard };
