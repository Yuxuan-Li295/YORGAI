import { css } from "@emotion/css";
import { fill, basis } from "components/constants/colors";
import hippoptamus from "resources/img/hipopotamus.jpg";
import snorlax from "resources/img/snorlax.jpg";
import mysteryBox from "resources/img/mysteryBox.jpg";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import { Badge } from "../../shared/Badge";
const ImageModelCard = () => {
  return (
    <div
      className={css`
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        flex: 1 0 0;
        width: 308px;
        height: 315px;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid #67cdbc;
        background: ${fill.base.layer};
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          align-self: stretch;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;
            border-radius: 4px;
            border: 1px solid ${basis.border_muted};
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: flex-start;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                height: 80px;
                flex: 1 0 0;
                background: url(${snorlax}), lightgray 50% / cover no-repeat;
              `}
            ></div>
            <div
              className={css`
                height: 80px;
                flex: 1 0 0;
                background: url(${hippoptamus}), lightgray 50% / cover no-repeat;
              `}
            ></div>
          </div>
          <div
            className={css`
              display: flex;
              align-items: flex-start;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                height: 80px;
                flex: 1 0 0;
                background: url(${mysteryBox}), lightgray 50% / cover no-repeat;
              `}
            ></div>
            <div
              className={css`
                height: 80px;
                flex: 1 0 0;
                background: url(${mysteryBox}), lightgray 50% / cover no-repeat;
              `}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
              width: 87px;
              align-items: center;
              gap: 4px;
            `}
          >
            <div
              className={css`
                color: ${basis.text_loud};
                font-family: PingFang SC;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
              `}
            >
              Midjourney
            </div>

            <ArrowAngleRightMd style={{ width: "20", height: "20" }} />
          </div>
        </div>
        <div
          className={css`
            height: 47px;
            width: 276px;
            box-sizing: border-box;
            align-self: stretch;
            overflow: hidden;
            color: ${basis.text};
            font-family: PingFang SC;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          `}
        >
          Midjourney是一个由Midjourney研究实验室开发的人工智能程序，可根据文本生成图像，于2022年7月12日进入公开测试阶段，使用者可通过Discord的机器人指令进行操作，可以创作出很多...
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
            `}
          >
            <Badge size="xs">画图</Badge>
            <Badge size="xs">创意</Badge>
            <Badge size="xs">写实</Badge>
            <Badge size="xs">卡通</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ImageModelCard };
