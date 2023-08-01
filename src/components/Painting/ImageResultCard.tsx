import { css } from "@emotion/css";

import ImageDemo from "resources/img/ImageResultCardDemo.png";
import ImageDemo2 from "resources/img/ImageResultCardDemo2.png";

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
      `}
    >
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
