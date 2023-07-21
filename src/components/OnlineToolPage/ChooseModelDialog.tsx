import { css } from "@emotion/css";
import { Button } from "components/shared/Button";
import { Dropdown } from "components/shared/Dropdown";
import { ReactComponent as ArrowAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as Stars } from "resources/img/Stars.svg";
import { ReactComponent as Clock } from "resources/img/Clock.svg";
import { ReactComponent as OpenAI } from "resources/img/OpenAI.svg";
import { ReactComponent as Search } from "resources/img/Search.svg";
import { basis, fill } from "components/constants/colors";
import { ModelCard } from "components/shared/ModelCard";
const ChooseModelDialog = () => {
  const cards = (length: number) =>
    Array(length).fill({
      title: "CHATGPT 3.5",
      description: "官方GPT3.5",
      price: [0.004],
      tags: ["大语言模型"],
      icon: <OpenAI />,
    });

  return (
    <div
      className={css`
        display: flex;
        padding: 24px;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 8px 8px 0px 0px;
        border-top: 1px solid var(--basis-border, #d7d7db);
        border-right: 1px solid var(--basis-border, #d7d7db);
        border-left: 1px solid var(--basis-border, #d7d7db);
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: stretch;
          align-self: stretch;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 56px;
            padding: 0px 16px;
            background: #fff;
          `}
        >
          <div
            className={css`
              display: flex;
              flex: 1;
              align-items: center;
              gap: 6px;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 8px;
              `}
            >
              <Dropdown
                menuItems={["process", "record"]}
                setValue={(item: string) => {
                  console.log(item);
                }}
              >
                <Button
                  variant="tertiary"
                  size="sm"
                  append={<ArrowAngleDownMd />}
                >
                  所有类型
                </Button>
              </Dropdown>
            </div>
            <div
              className={css`
                display: inline-flex;
                align-items: center;
                gap: 16px;
              `}
            >
              <Dropdown
                menuItems={["process", "record"]}
                setValue={(item: string) => {
                  console.log(item);
                }}
              >
                <Button
                  variant="tertiary"
                  size="sm"
                  append={<ArrowAngleDownMd />}
                >
                  所有提供商
                </Button>
              </Dropdown>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex: 1;
              gap: 16px;
            `}
          >
            <Button variant="tertiary" size="sm" prepend={<Stars />}>
              最受欢迎
            </Button>
            <Button variant="tertiary" size="sm" prepend={<Star />}>
              收藏最多
            </Button>
            <Button variant="tertiary" size="sm" prepend={<Clock />}>
              最新发布
            </Button>
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              padding: 6px 12px;
              width: 160px;
              background: ${fill.base.layer_overlay_subtle};
              border-radius: 6px;
              box-shadow: 0px -1px 0px 0px ${basis.alt.border} inset;
              gap: 8px;
            `}
          >
            <Search
              className={css`
                margin-right: 6px;
                color: ${basis.text_subtle};
              `}
            />
            <input
              type="text"
              placeholder="搜索"
              className={css`
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                background: transparent;
                border: none;
                outline: none;
                width: 100%;

                &::placeholder {
                  color: ${basis.text_subtle};
                }
              `}
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            padding-top: 24px;
            flex-direction: column;
            align-items: flex-start;
            background: #fff;
            gap: 10px;
            flex: 1 0 0;
            align-self: stretch;
            border-radius: 6px;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex: 1 0 0;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 24px;
                flex: 1 0 0;
              `}
            >
              <div
                className={css`
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 24px;
                  //   max-width: 1088px;
                `}
              >
                {cards(9).map(({ title, description, price, tags, icon }) => (
                  <ModelCard
                    title={title}
                    description={description}
                    price={price}
                    tags={tags}
                    icon={icon}
                    selected={true}
                    onClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              padding: 12px 24px;
              justify-content: space-between;
              align-items: center;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                display: flex;
                align-items: baseline;
                gap: 4px;
              `}
            >
              从GPT3.5切换到Claude?
            </div>
            <div
              className={css`
                display: flex;
                align-items: flex-start;
                gap: 12px;
              `}
            >
              <Button children="取消" variant="secondary" />
              <Button children="切换" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ChooseModelDialog };
