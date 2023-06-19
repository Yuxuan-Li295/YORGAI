import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const ButtonIcon = ({
  icon,
  label,
  onClick,
  width = '80px'
}: {
  icon: string;
  label: string;
  onClick?: () => void;
  width?: string;
}) => {
  const textWidth = `calc(${width} - 23px)`;

  return (
    <button
      className={css`
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 7px;
        width: ${width};
        height: 48px;
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        color: ${basis["text"]};

        &:hover {
          color: #67CDBC;  

          & > div:last-child {
            background: #67CDBC;  
          }
        }
      `}
      onClick={onClick}
    >
      <div
        className={css`
          width: 16px;
          height: 20px;
          z-index: 1;

          img {
            &:hover {
              filter: brightness(0) saturate(100%) invert(38%) sepia(86%) saturate(1276%) hue-rotate(140deg) brightness(96%) contrast(92%); 
            }
          }
        `}
      >
        <img src={icon} alt={label} />
      </div>
      <div
        className={css`
          width: ${textWidth};  
          min-width: 33px;  
          height: 20px;
          font-family: 'PingFang SC';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          order: 1;
        `}
      >
        {label}
      </div>
      <div
        className={css`
          position: absolute;
          height: 2px;
          background: transparent;
          flex: none;
          order: 3;
          z-index: 3;
        `}
      />
    </button>
  );
};


export { ButtonIcon };
