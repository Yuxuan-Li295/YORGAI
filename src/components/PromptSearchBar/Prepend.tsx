import { css, keyframes } from "@emotion/css";
import { basis } from "components/constants/colors";
import { useRef, useState } from "react";
import { ReactComponent as ArrowAngleDownLg } from "resources/img/ArrowAngleDownLg.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;  
  }
  
`;

const Prepend = ({ onClick }: { onClick?: () => void }) => {
  const [isPreShow, changePre] = useState(false);

  const subMenuRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  const togglePreShow = () => {
    changePre(!isPreShow);
  };

  const handleMouseEnter = () => {
    changePre(true);
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      changePre(false);
    }, 200);
  };

  return (
    <div
      className={css`
        line-height: 32px;
        height: 48px;
        box-sizing: border-box;
        width: 125px;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 16px;
        padding-left: 18px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border: 1px solid ${basis.border_subtle};
        border-right: 0px;
        &:hover {
          background-color: ${basis.bg_muted};
        }
      `}
    >
      <div
        onClick={togglePreShow}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          color: ${basis.text};
          font-size: 16px;
        `}
      >
        <div
          className={css`
            display: flex;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          所有分类
        </div>
        <ArrowAngleDownLg />
      </div>

      {isPreShow && (
        <div
          ref={subMenuRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={css`
            animation: ${fadeIn} 0.3s ease-in-out;
            margin-left: -18px;
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            color: ${basis.text_loud};
            width: 125px;
            border-radius: 6px;
            box-shadow: 0px 8px 12px -6px rgba(79, 81, 89, 0.16),
              0px 16px 24px -8px rgba(79, 81, 89, 0.2);
            cursor: pointer;

            & div {
              background-color: white;
              padding: 8px 12px;

              &:hover {
                background-color: ${basis.bg_subtle};
              }
            }
          `}
        >
          <div
            onClick={onClick}
            className={css`
              margin-top: 10px;
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
              border: 1px solid ${basis.alt.border};
            `}
          >
            提示词
          </div>
          <div
            onClick={onClick}
            className={css`
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
              border: 1px solid ${basis.alt.border};
              border-top: none;
            `}
          >
            AI 工具
          </div>
        </div>
      )}
    </div>
  );
};

export { Prepend };
