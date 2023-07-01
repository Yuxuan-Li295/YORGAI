import { css } from "@emotion/css";
import { FastSearchButton } from "./FastSearchButton";

const FastSearchButtonSection = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        gap: 21px;
      `}
    >
      <FastSearchButton>ChatGPT</FastSearchButton>
      <FastSearchButton>MidJourney</FastSearchButton>
      <FastSearchButton>GPT4</FastSearchButton>
      <FastSearchButton>DALL-E</FastSearchButton>
      <FastSearchButton>Stable Diffusion</FastSearchButton>
    </div>
  );
};

export { FastSearchButtonSection };
