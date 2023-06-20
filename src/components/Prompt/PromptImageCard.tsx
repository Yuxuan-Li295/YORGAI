import { css } from "@emotion/css";

const PromptImageCard = ({
  image,
  subTitle,
}: {
  image: string;
  subTitle?: string;
}) => {
  return (
    <div
      className={css`
        position: relative;
        width: 282px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 0px;
      `}
    >
      <img
        className={css`
          width: 282px;
        `}
        src={image}
        alt="view"
      />
      <div
        className={css`
          position: absolute;
        `}
      >
        what the heck
      </div>
    </div>
  );
};

export { PromptImageCard };
