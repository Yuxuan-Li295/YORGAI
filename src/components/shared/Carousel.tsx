import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { useState } from "react";
import { ReactComponent as ArrowAngleLeft } from "resources/img/ArrowAngleLeft.svg";
import { ReactComponent as ArrowAngleRight } from "resources/img/ArrowAngleRight.svg";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const turnPageLeft = () => {
    setCurrentIndex((oldIndex) =>
      oldIndex === 0 ? images.length - 1 : oldIndex - 1,
    );
  };

  const turnPageRight = () => {
    setCurrentIndex((oldIndex) =>
      oldIndex === images.length - 1 ? 0 : oldIndex + 1,
    );
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <button
        className={css`
          display: flex;
          align-items: flex-start;
          margin-right: 20px;
          padding: 8px;
          background: ${basis.bg};
          border: none;
          border-radius: 25px;
          box-shadow: 0 2px 3px -1px rgba(79, 81, 89, 0.29),
            0px 2px 5px -1px rgba(79, 81, 89, 0.03),
            0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
            0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
          transition: background 0.2s;

          &:hover {
            background: ${basis.bg_muted};
          }
        `}
        onClick={turnPageLeft}
      >
        <ArrowAngleLeft
          className={css`
            width: 17.9997px;
            height: 18px;
          `}
        />
      </button>
      <div
        className={css`
          height: 360px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0px 3px 2px -2px rgba(79, 81, 89, 0.29),
            0px 2px 5px -1px rgba(79, 81, 89, 0.03),
            0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
            0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
        `}
      >
        <img
          className={css`
            height: 360px;
          `}
          src={images[currentIndex]}
          alt="Carousel"
        />
      </div>
      <button
        className={css`
          display: flex;
          align-items: flex-start;
          margin-left: 20px;
          padding: 8px;
          background: ${basis.bg};
          border: none;
          border-radius: 25px;
          box-shadow: 0 2px 3px -1px rgba(79, 81, 89, 0.29),
            0px 2px 5px -1px rgba(79, 81, 89, 0.03),
            0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
            0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
          transition: background 0.2s;

          &:hover {
            background: ${basis.bg_muted};
          }
        `}
        onClick={turnPageRight}
      >
        <ArrowAngleRight
          className={css`
            width: 17.9997px;
            height: 18px;
          `}
        />
      </button>
    </div>
  );
};

export default Carousel;
