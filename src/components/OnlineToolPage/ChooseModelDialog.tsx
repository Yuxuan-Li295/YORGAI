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
import { DialogHeader } from "components/Chat/DialogHeader/DialogHeader";
import { DialogFooter } from "components/Chat/DialogFooter";
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
        <DialogHeader />
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
          <DialogFooter />
        </div>
      </div>
    </div>
  );
};
export { ChooseModelDialog };
