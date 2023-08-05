import { css } from "@emotion/css";
import ImageDemo2 from "resources/img/ImageResultCardDemo2.png";
import ImageComponent from "./ImageComponent";

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
      <ImageComponent src={ImageDemo2} alt="Demo 1" />
      <ImageComponent src={ImageDemo2} alt="Demo 2" />
    </div>
  );
};

export { ImageResultCard };
