import { css } from "@emotion/css";
import { Radio } from "components/shared/CheckBoxOrRadio";
import { useState } from "react";
import MoreIcon from "resources/img/More.svg";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={css`
        position: relative;
        &:hover > div,
        &:hover > button {
          opacity: 1;
        }
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 10px;
          left: 10px;
          width: 18px;
          height: 18px;
          opacity: 0;
        `}
      >
        <Radio checked={isChecked} onChange={handleRadioChange} />
      </div>

      <button
        className={css`
          position: absolute;
          top: 10px;
          right: 10px;
          width: 16px;
          height: 16px;
          background-color: white;
          background-image: url(${MoreIcon});
          background-position: center;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          border-radius: 25%;
          opacity: 0;
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
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;
