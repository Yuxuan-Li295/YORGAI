import React, { useState } from 'react';
import { css } from '@emotion/css';
import { ReactComponent as ArrowAngleLeft } from 'resources/img/ArrowAngleLeft.svg';
import { ReactComponent as ArrowAngleRight } from 'resources/img/ArrowAngleRight.svg';
import { basis, yellow } from 'components/constants/colors';


type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const turnPageLeft = () => {
    setCurrentIndex((oldIndex) => oldIndex === 0 ? images.length - 1 : oldIndex - 1);
  };

  const turnPageRight = () => {
    setCurrentIndex((oldIndex) => oldIndex === images.length - 1 ? 0 : oldIndex + 1);
  };

  const CurrentImageUrl = images[currentIndex];

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1420px;
        height: 399px;
        background: var(--fill-base-layer-subtle, #FBFBFC);
        box-shadow: 0px 2px 2px -2px rgba(79, 81, 89, 0.16), 0px 2px 5px -1px rgba(79, 81, 89, 0.03), 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-right: 20px;
          padding: 8px;
          background: ${basis.bg};
          border-radius: 25px;
          box-shadow: 0px 2px 2px -2px rgba(79, 81, 89, 0.16), 0px 2px 5px -1px rgba(79, 81, 89, 0.03), 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
          transition: background 0.3s;

          &:hover {
            background: var(--hover-bg, #E9E9EA);
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
      </div>
      <div
        className={css`
          width: 529px;
          height: 359px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 2px 2px -2px rgba(79, 81, 89, 0.16), 0px 2px 5px -1px rgba(79, 81, 89, 0.03), 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
        `}
      >
        <img 
          className={css`
            width: 100%;
            height: 100%;
          `}
          src = {CurrentImageUrl}
          alt = "Carousel"
        />
      </div>
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-left: 20px;
          padding: 8px;
          background: ${basis.bg};
          border-radius: 25px;
          box-shadow: 0px 2px 2px -2px rgba(79, 81, 89, 0.16), 0px 2px 5px -1px rgba(79, 81, 89, 0.03), 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
          transition: background 0.3s;

          &:hover {
            background: var(--hover-bg, #E9E9EA);
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
      </div>
    </div>
  );
};

export default Carousel;
