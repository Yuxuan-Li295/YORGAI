import { css } from '@emotion/css';
import { basis } from 'components/constants/colors';
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";

const DefaultOutputBox = () => {
  return (
    <div
      className={css`
      display: flex;
      padding: 24px 18px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex: 1 0 0;
      align-self: stretch;
      background: ${basis.bg_muted};
      `}
    >
      <div
        className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        `}
      >
        <div
          className={css`
          width: 18px;
          height: 18px;
          `}
        >
        <MagicWand />
        </div>
        <div
          className={css`
          color: ${basis.text};
          /* Pingfang SC/body/xs/400 - regular */
          font-family: PingFang SC;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 133.333% */
          `}
        >
          AI生成的内容将会在此处显示
        </div>
      </div>
    </div>
  );
};

export { DefaultOutputBox };