import React, { useState } from 'react';
import { css } from '@emotion/css';
import { ReactComponent as TurnPageLeft } from 'resources/img/TurnPageLeft.svg';
import { ReactComponent as TurnPageRight } from 'resources/img/TurnPageRight.svg';

type CarouselProps = {
  images: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const turnPageLeft = () => {
    setCurrentIndex((oldIndex) => oldIndex === 0 ? images.length - 1 : oldIndex - 1);
  };

  const turnPageRight = () => {
    setCurrentIndex((oldIndex) => oldIndex === images.length - 1 ? 0 : oldIndex + 1);
  };

  const CurrentImage = images[currentIndex];

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-right: 20px;
        `}
        onClick={turnPageLeft}
      >
        <TurnPageLeft />
      </div>
      <div
        className={css`
          width: 529px;
          height: 359px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <CurrentImage 
          className={css`
            width: 100%;
            height: 100%;
          `}
        />
      </div>
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-left: 20px;
        `}
        onClick={turnPageRight}
      >
        <TurnPageRight />
      </div>
    </div>
  );
};

export default Carousel;
