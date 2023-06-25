import { css } from "@emotion/css";
import { FirstLevelNavBar } from "components/FirstLevelNavBar";
import { SecondLevelNavBar } from "components/SecondLevelNavBar";
import { basis, zinc } from "components/constants/colors";
import { AvatarAR } from "components/shared/AvatarAR";
import { Badge } from "components/shared/Badge";
import { Breadcrumb } from "components/shared/Breadcrumb";
import { Button } from "components/shared/Button";
import { Footer } from "components/shared/Footer";
import { Star } from "components/shared/Star";
import { Tag } from "components/shared/Tag";
import { ReactComponent as AIApplication } from "resources/img/AIApplication.svg";
import { ReactComponent as Execute } from "resources/img/Execute.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as PromptImage } from "resources/img/PromptImage.svg";
import { ReactComponent as PromptImageDetail } from "resources/img/PromptImageDetail.svg";
import { ReactComponent as StarSvg } from "resources/img/Star.svg";
import { ReactComponent as UserDouble } from "resources/img/UserDouble.svg";
import { ReactComponent as Copy } from "resources/img/copy.svg";

export const PromptImageDetails = () => {
  // FIXME: request data
  const tags = ["写作", "文案", "作文", "办公"];
  const title = "角色扮演生成器";
  const userName = "Dennis";
  const userIcon = <AvatarAR size={24} />;
  const rate = 4.9;
  const commentCount = 2130;
  const text = `我希望你扮演一位英语口语教师和提高者。\
  我会用英语与你交流，你将用英语回答我，以练习我的口语能力。\
  我希望你的回答整洁，字数限制在100字以内。我希望你严格纠正我的语法错误、打字错误和事实错误。\
  在你的回答中，请问我一个问题。\
  现在我们开始练习，你可以先问我一个问题。\
  记住，我希望你严格纠正我的语法错误、打字错误和事实错误。`;

  const buttonClickHandler = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
  };

  const buttons = [
    {
      icon: <UserDouble />,
      label: "社区热门",
      onClick: () => buttonClickHandler("社区热门"),
    },
    {
      icon: <AIApplication />,
      label: "提示词大全",
      onClick: () => buttonClickHandler("提示词大全"),
      url: "prompt/complete/image/details",
    },
    {
      icon: <MagicWand />,
      label: "提示词优化器",
      onClick: () => buttonClickHandler("提示词优化器"),
    },
    {
      icon: <StarSvg />,
      label: "我的收藏",
      onClick: () => buttonClickHandler("我的收藏"),
    },
  ];

  const breadcrumbs = [
    { name: "首页", link: "/" },
    { name: "提示词库", link: "/prompt" },
    { name: "提示词大全", link: "/prompt/complete" },
    { name: title, link: "/prompt/complete/details" },
  ];

  return (
    <div
      className={css`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: ${zinc[25]};
    font-family: "PingFang SC", sans-serif;
    font-style: normal;
  `}
    >
      <div
        className={css`
      display: flex;
      flex-direction: column;
    `}
      >
        <FirstLevelNavBar />
        <SecondLevelNavBar buttons={buttons} />
      </div>
      <div
        className={css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      margin-left: 256px;
      margin-top: 40px;
    `}
      >
        <div
          className={css`
    display: flex;
    align-items: start;
    gap: 48px;
  `}
        >
          <PromptImage />

          <div
            className={css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      width: 320px;
      height: 290px;
    `}
          >
            <div
              className={css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
      `}
            >
              {tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </div>

            <Badge avatar={userIcon}>{userName}</Badge>

            <div
              className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
      `}
            >
              <div
                className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 7px;
          color: #f7bb00;
          margin-right: 12px;
        `}
              >
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} selected={i < Math.round(rate)} />
                  ))}
              </div>
              <span
                className={css`
          font-family: inherit;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          color: ${basis.text};
        `}
              >
                {rate} ({commentCount} 评论)
              </span>
            </div>

            <div
              className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 18px 18px 14px;
        gap: 18px;
        background: #f9f9fa;
        border: 1px solid #d7d7db;
        border-radius: 8px;
        width: 320px;
        height: 190px;
        margin-top: 20px;
      `}
            >
              <p
                className={css`
          font-family: inherit;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: ${basis.text_loud};
        `}
              >
                {text}
              </p>

              <div
                className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 32px;
          width: 284px;
          height: 28px;
        `}
              >
                <Button variant="secondary" icon={<Copy />}>
                  复制到剪贴板
                </Button>
                <Button icon={<Execute />}>立即运行</Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        align-items: start;
        gap: 48px;
        width: 928px;
        margin-top: 48px;
      `}
        >
          <Breadcrumb items={breadcrumbs} />
          <div
            className={css`
          display: flex;
          padding: 40px 10px 60px 10px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          background: var(--basis-bg, #F9F9FA);
          width: 100%; 
          max-width: 1440px;
        `}
          >
            {/* “同类提示词”文本 */}
            <p
              className={css`
            color: var(--basis-text-loud, #18181B);
            text-align: center;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 500;
            line-height: 30px;
          `}
            >
              同类提示词
            </p>
          </div>
          <div
            className={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
        `}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
